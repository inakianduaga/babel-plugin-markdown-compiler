export default function ({ types: t }) {
  return {
    visitor: {
      // visitor contents
      BinaryExpression(path) {
        console.log(path);
        // path.parentPath.replaceWith(
        //   t.expressionStatement(t.stringLiteral("Anyway the wind blows, doesn't really matter to me, to me."))
        // );
      },
      Identifier() {
        console.log("Called!");
      }

    }
  };
};