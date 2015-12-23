const bold = '**Extra boldness**';

const md = {
  plainObj: {
    h1: '# This is an h1 header',
    bold: '**So strong!**',
    hyperlink: 'Enclosing a [label](url) hyperlink',
  },
  mdTemplateLiteral: {
    h2: `## This is an h2 header`,
    withVariable: `### An h3 header that wont be rendered, with ${bold}`
  },
  deeplyNested: {
    a: {
      b: {
        c: {
          d: {
            finally: '*Some emphasis*'
          }
        }
      }
    }
  }
}

export default md;