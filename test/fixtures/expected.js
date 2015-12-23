const bold = '<p><strong>Extra boldness</strong></p>\n';

export default {
  plainObj: {
    h1: '<h1>This is an h1 header</h1>\n',
    bold: '<p><strong>So strong!</strong></p>\n',
    hyperlink: '<p>Enclosing a <a href="url">label</a> hyperlink</p>\n',
  },
  mdTemplateLiteral: {
    h2: `<h2>This is an h2 header</h2>\n`,
    withVariable: `### An h3 header that wont be rendered, with ${bold}`
  },
  deeplyNested: {
    a: {
      b: {
        c: {
          d: {
            finally: '<p><em>Some emphasis</em></p>\n'
          }
        }
      }
    }
  }
}
