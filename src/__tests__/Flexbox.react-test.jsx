import React from 'react';
import renderer from 'react-test-renderer';
import Flexbox from '../Flexbox';

test('Renders minimal <Flexbox /> component', () => {
  const component = renderer.create(
    <Flexbox />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders custom element (header) <Flexbox /> component', () => {
  const component = renderer.create(
    <Flexbox element="header" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders <Flexbox /> component with several flexbox props', () => {
  const component = renderer.create(
    <Flexbox
      alignitems="center"
      flexDirection="column"
      flexGrow={1}
      flexWrap="wrap"
      justifyContent="center"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders <Flexbox /> component with layout helpers (height, width, margin, padding, etc)', () => {
  const component = renderer.create(
    <Flexbox
      height="100%"
      margin="66px 33px"
      marginRight="25px"
      maxWidth="100vw"
      minHeight="100vh"
      padding="99px"
      paddingLeft="50px"
      width="100px"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders <Flexbox /> with extra props, outside expected/defined ones (like event handlers or className)', () => {
  const component = renderer.create(
    <Flexbox
      onClick={() => 'On click handler'}
      key="666"
      className="test-class"
      id="test-id"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders <Flexbox /> with inline styles that can overwrite flexbox-react related props too', () => {
  const component = renderer.create(
    <Flexbox
      style={{
        backgroundColor: 'red',
        display: 'block',
      }}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
