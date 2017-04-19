<big><h1 align="center">flexbox-react</h1></big>

<p align="center">
  <a href="https://travis-ci.org/nachoaIvarez/flexbox-react">
    <img src="https://travis-ci.org/nachoaIvarez/flexbox-react.svg?branch=master"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/flexbox-react">
    <img src="https://img.shields.io/npm/v/flexbox-react.svg"
         alt="NPM Version">
  </a>

  <a href="https://npmjs.org/package/flexbox-react">
    <img src="http://img.shields.io/npm/dm/flexbox-react.svg"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/nachoaIvarez/flexbox-react.svg">
    <img src="https://david-dm.org/nachoaIvarez/flexbox-react.svg"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/nachoaIvarez/flexbox-react/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/flexbox-react.svg"
         alt="License">
  </a>
</p>


## Intro
Unopinionated, standard compliant flexbox components.

## Why
You should not learn any proprietary syntax, classnames or API's for this.
If you know how to use flexbox, you know how to use `flexbox-react` components.

No more `<Container>`, `<SpacedBox>`, `<Column>`, `<View>`, `<Section>` or any other
arbitrarily named and _spec_&hairsp;ed components to layout your apps.

No more `first={true}`, `ternary={true}`, `spaced={true}`,`grouped={true}`
or any other arbitrarily named and _spec_&hairsp;ed props to layout your apps.

`flexbox-react` is agnostic of which post/pre css build flow you have, it works out of the box. It's agnostic to it. You could have all your styling on css files. Or all inlined. This sits just in the middle. It might be a good idea to see your components and know how they are laid out without jumping between css files or arbitrary, layout-exclusive components specifications.

## How
No hardcoded, bloated, unnecessary vendor prefixes, by
<a href="http://caniuse.com"> caniuse</a>. Just those your browser needs, based
on your `userAgent`.

No need to import any new stylesheet or to add any styles to your
existing stylesheets. It works out of the box, just by using the
component.

## Install

```sh
yarn add flexbox-react
# or
npm install --save flexbox-react
```

## Usage
```js
import Flexbox from 'flexbox-react';

// ...
<Flexbox flexDirection="column" minHeight="100vh">
  <Flexbox element="header" height="60px">
    Header
  </Flexbox>

  <Flexbox flexGrow={1}>
    Content
  </Flexbox>

  <Flexbox element="footer" height="60px">
    Footer
  </Flexbox>
</Flexbox>
```
*Sticky footer!*

As you can see, there're some extra props as _layout_&hairsp;ing helpers. Those are `height`, `minHeight`, `maxHeight`, `width`, `minWidth`, `maxWidth`, `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `margin`, `marginTop`, `marginRight`, `marginBottom`, and `marginLeft`. The idea of `flexbox-react` is to be a complete solution to build layouts. Since, well, flexbox is a complete solution to build layouts. It's all about the sugar. Feel free to create an issue or submit a PR if you think there's room for improvement here!

### Semantic HTML tags

If you need to use a tag other than `<div>` for the layout, like `<header>` or `<section>`, you can pass an extra `element` prop to the `<Flexbox />` component:

```html
<Flexbox element="header" height="80px">
  ...
</Flexbox>
```

which will render to this:

```html
<header style="display: flex; height: 80px;">
  ...
</header>
```

## Props
Take a look at
[Flexbox PropTypes](https://github.com/nachoaIvarez/flexbox-react/blob/master/src/Flexbox.jsx#L68-L141). No mysteries. As said, you just need to know actual flexbox properties not any proprietary syntax for them. If you're not familiar with flexbox, [this is a good starting point](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

If TypeScript is your cup of tea, check the [type definitions](https://github.com/nachoaIvarez/flexbox-react/blob/master/src/index.d.ts), we support them too.

## License

MIT © [Ignacio Álvarez](http://github.com/nachoaIvarez)

[npm-url]: https://npmjs.org/package/flexbox-react
[npm-image]: https://img.shields.io/npm/v/flexbox-react.svg

[depstat-url]: https://david-dm.org/nachoaIvarez/flexbox-react
[depstat-image]: https://david-dm.org/nachoaIvarez/flexbox-react.svg

[download-badge]: http://img.shields.io/npm/dm/flexbox-react.svg
