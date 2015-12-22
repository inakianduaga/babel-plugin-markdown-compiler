babel-plugin-markdown-compiler
================================

> Compile markdown inside object literals

The target of this plugin is to provide markdown compilation of static strings inside objects / variables in your application during compilation time.
It came as a necessity to support markdown inside typescript language files.

## Features:

- Compiles markdown inside object literals using [Markdown-It](https://github.com/markdown-it/markdown-it);
- Parse static markdown inside your app **on compile time** instead of runtime, increasing performance and reducing production dependencies.

## Example:

If we start with the file

```js
// some file.js
const bold = '**So bold**';
const mdObj = {
  a: '# Some h1 header'
};

```

after running through the babel compiler it becomes:

```js
// compiled/file.js
const bold = '<b>So bold</b>';
const mdObj = {
  a: '<h1> Some h1 header</h1>'
};
```

## Usage:

1. Install `babel-plugin-markdown-compiler` from npm

```
$ npm install --save-dev babel-plugin-markdown-compiler
```

2. In your `.babelrc` file (or inside `package.json` babel block if you prefer) add

```json
//.babelrc
{
  "plugins": ["markdown-compiler"]
}
```