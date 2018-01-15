/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Flexbox from '../Flexbox';

const TEST_CLASS = 'test-class';

const prettifyCSS = css =>
  css
    .replace(/\s+/g, '')
    .replace(/;/g, ';\n  ')
    .replace(/{/g, ' {\n  ')
    .replace(/ {2}}/g, '}\n')
    .replace(/:}/g, ': ');

const testComponent = component =>
  () => {
    const div = document.createElement('div');
    const mockComponent = renderer.create(component).toJSON();
    const classNames = mockComponent.props.className.split(' ');

    ReactDOM.render(component, div);
    const css = prettifyCSS(document.head.childNodes['0'].textContent);

    // Every class present in the rendered element must be either the TEST_CLASS (to test if
    // we can pass arbitrary classNames to the component) or generated classNames which must be
    // also present in the generated <style> rules by styled-components.
    expect(
      classNames.every(className => className === TEST_CLASS || css.includes(className)),
    ).toBeTruthy();
    expect(css).toMatchSnapshot();
    expect(mockComponent).toMatchSnapshot();
  };

test('Renders minimal <Flexbox /> component', testComponent(<Flexbox />));

test(
  'Renders custom element (header) <Flexbox /> component',
  testComponent(<Flexbox element="header" />),
);

test(
  'Renders <Flexbox /> component with several flexbox props',
  testComponent(
    <Flexbox
      alignItems="center"
      flexDirection="column"
      flexGrow={1}
      flexWrap="wrap"
      justifyContent="center"
    />,
  ),
);

test(
  'Renders <Flexbox /> component with layout helpers (height, width, margin, padding, etc)',
  testComponent(
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
  ),
);

test(
  'Renders <Flexbox /> with extra props, outside expected/defined ones (like event handlers or className)',
  testComponent(
    <Flexbox onClick={() => 'On click handler'} key="666" className="test-class" id="test-id" />,
  ),
);

test(
  'Renders <Flexbox /> with inline styles that can overwrite flexbox-react related props too',
  testComponent(
    <Flexbox
      style={{
        backgroundColor: 'red',
        display: 'block',
      }}
    />,
  ),
);

test(
  'Renders <Flexbox /> with flex items with non-flex display',
  testComponent(
    <Flexbox>
      <Flexbox display="block" />
    </Flexbox>,
  ),
);
