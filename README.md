## Intro
Unopinionated, standard compliant flexbox components.

## Why
You should not learn any proprietary syntax, classnames or API's for this.
If you know how to use flexbox, you know how to use `flexbox-react` components.

No more `<Container>`, `<SpacedBox>`, `<Column>`, `<View>`, `<Section>` or any other
arbitrarily named and _spec_&hairsp;ed components to layout your apps.

No more `first={true}`, `ternary={true}`, `spaced={true}`,`grouped={true}`
or any other arbitrarily named and _spec_&hairsp;ed props to layout your apps.

`flexbox-react` is agnostic of which post/pre css build flow you have, it works out of the box. It's agnostic to it. You could have all your styling on css files. Or all inlined. This sits just in the middle, when you want to have the layout part of the styles alongside with your components. I think it is a good idea to see your components and know how they are laid out without jumping between css files or arbitrary, layout-exclusive components specifications. That said, I do believe that every other styles (animations, transitions, aesthetics in general) _must_ live in css files (`css-modules` ideally) so you can take advantage of an extra build step like `postCSS`, `sass`, `less`, etc.  _Rembember, we build components. On the [React mindset](https://facebook.github.io/react/docs/thinking-in-react.html),
some inline stuff is good. Relax._

## How
No hardcoded, bloated, unnecesary vendor prefixes, by
<a href="http://caniuse.com"> caniuse</a>. Just those your browser needs, based
on your `userAgent`.

No need to import any new stylesheet or to add any styles to your
existing stylesheets. It works out of the box, just by using the
component.

## Install

```sh
npm install --save flexbox-react
```

## Usage
```js
import { Flexbox, FlexItem } from "flexbox-react";

//...
<Flexbox flexDirection="column" minHeight="100vw">

  <FlexItem height="60px">
    Header
  </FlexItem>

  <FlexItem flexGrow={1}>
    Content
  </FlexItem>

  <FlexItem height="60px">
    Footer
  </FlexItem>

</Flexbox>
```
*Sticky footer!*

As you can see, there's some extra props as _layout_&hairsp;ing helpers. Those are `height`, `minHeight`, `maxHeight`, `width`, `minWidth`, `maxWidth`, `padding` and `margin`. The idea of `flexbox-react` is to be a complete solution to build layouts. Since, well, flexbox it is a complete solution to build layouts. It's all about the sugar. Feel free to create an issue or submit a PR if you think there's room for improvement here!

## Props
Take a look at
[Flexbox PropTypes](https://github.com/nachoaIvarez/flexbox-react/blob/master/src/Flexbox.jsx#L30)
and [FlexItem PropTypes](https://github.com/nachoaIvarez/flexbox-react/blob/master/src/FlexItem.jsx#L30). No mysteries. As said, you just need to know actual flexbox properties not any propietary syntax for them, if you're not familiar with flexbox, here is a
[good starting point](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## License

MIT © [Ignacio Álvarez](http://github.com/nachoaIvarez)
