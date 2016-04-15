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
Unopinionated, standard compilant flexbox components. You don't need to learn any propietary syntax, classnames or API's. If you know how to use flexbox, you know how to use flexbox-react components.
</big></p>
<p align="center"><big>
Finally, you get to see your code and figure out how are nodes laid out without jumping around between css files. Leave css files for the looks and actual aesthetics, not layout.
</big></p>
<p align="center"><big>
No hardcoded, bloated, unnecesary vendor prefixes, by http://caniuse.com. And just what your browser needs! Based on your userAgent.
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

## Props
Take a look at [Flexbox PropTypes](https://github.com/nachoaIvarez/flexbox-react/blob/master/src/Flexbox.jsx#L30) and [FlexItem PropTypes](https://github.com/nachoaIvarez/flexbox-react/blob/master/src/FlexItem.jsx#L30). No misteries. As said, you just need to know actual flexbox properties not any propietary syntax for them.

## License

MIT © [Ignacio Álvarez](http://github.com/nachoaIvarez)

[npm-url]: https://npmjs.org/package/flexbox-react
[npm-image]: https://img.shields.io/npm/v/flexbox-react.svg?style=flat-square

[depstat-url]: https://david-dm.org/nachoaIvarez/flexbox-react
[depstat-image]: https://david-dm.org/nachoaIvarez/flexbox-react.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/flexbox-react.svg?style=flat-square
