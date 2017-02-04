import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

const allowedContexts = [
  'VariableDeclarator',
  'ObjectProperty',
];

const allowedFiles = [
  '/var/babel-plugin-markdown-compiler/test/fixtures/fixture.js',
];

export default function ({ types: t }, options) {
  console.log(options);
  return {
    visitor: {
      StringLiteral(path) {
        if (allowedContexts.indexOf(path.container.type) !== -1 && allowedFiles.indexOf(path.hub.file.log.filename) !== -1) {
          path.node.value = md.render(path.node.value);
          console.log(path.hub.file.log.filename);
        }
      },
      TemplateLiteral(path) {
        if (allowedContexts.indexOf(path.container.type) !== -1 && allowedFiles.indexOf(path.hub.file.log.filename) !== -1) {
          path.node.quasis.forEach((quasis) => {
            quasis.value.cooked = md.renderInline(quasis.value.cooked);
            quasis.value.raw = md.renderInline(quasis.value.raw);
          });
        }
      },
    }
  };
};