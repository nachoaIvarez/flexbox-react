## Intro
Unopinionated, standard compilant flexbox components.

## Why
You should not learn any propietary syntax, classnames or API's.
If you know how to use flexbox, you know how to use `flexbox-react` components.

No more `<Box>`, `<SpacedBox>`, `<Column>`, `<View>`, `<Section>` or any other
arbitrarily named and _spec_&hairsp;ed components to layout your apps.

No more `first={true}`, `ternary={true}`, `spaced={true}`,`grouped={true}`
or any other arbitrarily named and _spec_&hairsp;ed props to layout your apps.

Finally, you get to see your code and figure out how your components are
laid out without jumping between css files. Leave css files for the looks
and actual aesthetics. On the
[React mindset](https://facebook.github.io/react/docs/thinking-in-react.html),
some inline stuff is good. Relax.

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

  <FlexItem flex="1">
    Content
  </FlexItem>

  <FlexItem height="60px">
    Footer
  </FlexItem>

</Flexbox>
```
*Sticky footer!*

As you can see, there's some extra props as _layout_&hairsp;ing helpers. Those are `height`, `minHeight`, `maxHeight`, `width`, `minWidth`, `maxWidth`, `padding` and `margin`. The idea of `flexbox-react` is to be a complete solution to build layouts. Feel free to create an issue or submit a PR if you think there's room for improvement here!

## Props
Take a look at
[Flexbox PropTypes](https://github.com/nachoaIvarez/flexbox-react/blob/master/src/Flexbox.jsx#L30)
and [FlexItem PropTypes](https://github.com/nachoaIvarez/flexbox-react/blob/master/src/FlexItem.jsx#L30). No mysteries. As said, you just need to know actual flexbox properties not any propietary syntax for them, if you're not familiar with flexbox, here is a
[good starting point](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## License

MIT © [Ignacio Álvarez](http://github.com/nachoaIvarez)
