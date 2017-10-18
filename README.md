# markdown-it-br

[![Build Status](https://img.shields.io/travis/iktakahiro/markdown-it-br/master.svg?style=flat)](https://travis-ci.org/jay-hodgson/markdown-it-br)
[![NPM version](https://img.shields.io/npm/v/@iktakahiro/markdown-it-br.svg?style=flat)](https://www.npmjs.org/package/markdown-it-br)

> BR plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

`protect <br> <script>` => `protect <br>`

Support: `<br>` or `<br/>` or `<br />`

UnSupport: `<BR>`

## Install

node.js, browser:

```bash
npm install @iktakahiro/markdown-it-br --save
```

## Use

```typescript
import MarkdownIt = require("markdown-it")
import markdownItBr from "@iktakahiro/markdown-it-br"

const md = MarkdownIt()
md.render('protect <br>')
// => 'protect <br>'
```

## License
[MIT](https://github.com/iktakahiro/markdown-it-br/blob/master/LICENSE)

forked from: https://github.com/jay-hodgson/markdown-it-br/
