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
bower install @iktakahiro/markdown-it-br --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-br'));

md.render('protect <br>') // => 'protect <br>'

```

The widgetparams can be used to determine what kind of html widget should be rendered in the output container.

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitBr`.

## License
[MIT](https://github.com/iktakahiro/markdown-it-br/blob/master/LICENSE)

forked from: https://github.com/jay-hodgson/markdown-it-br/
