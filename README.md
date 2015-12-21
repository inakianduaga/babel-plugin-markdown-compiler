babel-plugin-markdown-compiler
================================
> Compile markdown inside object literals

The target of this plugin is to provide markdown compilation of static strings inside objects / variables in your application during compilation time.
It came as a necessity to support markdown inside typescript language files.

## Features:

- Compiles markdown inside object literals;
- Parse static markdown in your **@ compile time** instead of run time, increasing performance and reducing dependencies

## Examples:

```js
// some file.js
const bold = '**So bold**';
const mdObj = {
  a: '# Some h1 header'
};

```

after running through the babel compiler:

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