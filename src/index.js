import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default function ({ types: t }, options) {
  return {
    visitor: {
      StringLiteral(path) {
        path.node.value = "<p>Some html tag</p>";
        // path.node.value = md.renderInline(path.node.value);
      },
    }
  };
};