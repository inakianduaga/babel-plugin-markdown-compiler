const bold = '<b>Extra boldness</b>';

export default {
  plainObj: {
    h1: '<h1> This is an h1 header</h1>',
    bold: '<b>So strong!</b>',
    hyperlink: 'Enclosing a <a href="url">label</a> hyperlink',
  },
  mdTemplateLiteral: {
    h2: `<h2> This is an h2 header</h2>`,
    h3: `<h3> An h3 header with ${bold}</h3>`
  },
  deeplyNested: {
    a: {
      b: {
        c: {
          d: {
            finally: '<em>Some emphasis</em>'
          }
        }
      }
    }
  }
}
