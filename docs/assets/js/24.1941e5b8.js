(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{172:function(a,e,s){"use strict";s.r(e);var t=s(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"tricks-tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tricks-tips","aria-hidden":"true"}},[a._v("#")]),a._v(" Tricks & Tips")]),a._v(" "),s("h4",{attrs:{id:"содержание"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#содержание","aria-hidden":"true"}},[a._v("#")]),a._v(" Содержание")]),a._v(" "),s("ul",[s("li",[a._v("Использование имен для регистрации комопнентов (PascalCase, kebab-case)")]),a._v(" "),s("li",[a._v("Как убрать eslint если он мешает собраться проекту")])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"испоnьзование-имен-дnя-регистрации-комопнентов-pascalcase-kebab-case"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзование-имен-дnя-регистрации-комопнентов-pascalcase-kebab-case","aria-hidden":"true"}},[a._v("#")]),a._v(" Использование имен для регистрации комопнентов (PascalCase, kebab-case)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Vue.component('MyComponentName', { /* ... */ })\n")])])]),s("p",[a._v("При определении компонента с помощью "),s("strong",[a._v("PascalCase")]),a._v(" вы можете использовать любой случай, ссылаясь на свой пользовательский элемент. Это означает, что оба "),s("code",[a._v("<my-component-name>")]),a._v(" и "),s("code",[a._v("<MyComponentName>")]),a._v(" являются приемлемыми. Обратите внимание, однако, что только имена "),s("strong",[a._v("kebab-case")]),a._v(" действительны непосредственно в DOM (то есть нестрочные шаблоны).")]),a._v(" "),s("h2",{attrs:{id:"как-убрать-eslint-есnи-он-мешает-собраться-проекту"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#как-убрать-eslint-есnи-он-мешает-собраться-проекту","aria-hidden":"true"}},[a._v("#")]),a._v(" Как убрать eslint если он мешает собраться проекту")]),a._v(" "),s("h6",{attrs:{id:"package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json","aria-hidden":"true"}},[a._v("#")]),a._v(" package.json")]),a._v(" "),s("p",[s("code",[a._v("ENABLE_ESLINT=false")]),a._v(" not TRUE")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(' "scripts": {\n    "dev": "node build/dev-server.js",\n    "start": "cross-env ENABLE_ESLINT=true node build/dev-server.js",\n    "build": "cross-env ENABLE_ESLINT=false node build/build.js",\n    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",\n    "test": "npm run unit",\n    "lint": "eslint --ext .js,.vue src test/unit/specs"\n  },\n\n')])])])])}],!1,null,null,null);n.options.__file="tricks-tips.md";e.default=n.exports}}]);