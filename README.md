<big><h1 align="center">flexbox-react</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/flexbox-react">
    <img src="https://img.shields.io/npm/v/flexbox-react.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://npmjs.org/package/flexbox-react">
    <img src="http://img.shields.io/npm/dm/flexbox-react.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/nachoaIvarez/flexbox-react.svg">
    <img src="https://david-dm.org/nachoaIvarez/flexbox-react.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/nachoaIvarez/flexbox-react/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/flexbox-react.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
Unopinionated, standard compilant flexbox components. You don&#39;t need to learn any propietary syntax, classnames or API's. If you know how to use flexbox, you know how to use flexbox-react components.
</big></p>
<p align="center"><big>
No hardcoded/unnecesary vendor prefixes, by [caniuse](http://caniuse.com).
</big></p>
<p align="center"><big>
No need to import any new stylesheet or to add any styles to your existing stylesheets. It works out of the box, just by using the component.
</big></p>


## Install

```sh
npm install --save flexbox-react
```

## Usage

```js
import { Flexbox, FlexItem } from "flexbox-react";

//...
<Flexbox alignItems="center" justifyContent="center" height="100vh" width="100vw">
  <FlexItem>
    <h1>Hi!</h1>
  </FlexItem>
</Flexbox>
```

## License

MIT © [Ignacio Álvarez](http://github.com/nachoaIvarez)

[npm-url]: https://npmjs.org/package/flexbox-react
[npm-image]: https://img.shields.io/npm/v/flexbox-react.svg?style=flat-square

[depstat-url]: https://david-dm.org/nachoaIvarez/flexbox-react
[depstat-image]: https://david-dm.org/nachoaIvarez/flexbox-react.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/flexbox-react.svg?style=flat-square
