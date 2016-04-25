import { PropTypes } from 'react';

import { Flexbox, FlexItem } from 'flexbox-react';

import '~/src/css/base.css';
import 'normalize.css';
import header from '~/src/css/components/header.css';
import footer from '~/src/css/components/footer.css';

const Layout = ({ children }) =>
  (<Flexbox flexDirection="column" alignItems="center" width="100%">
    <Flexbox
      alignItems="center"
      className={header.container}
      flexDirection="column"
      height="350px"
      justifyContent="space-around"
      padding="40px"
      width="100%"
    >
      <span className={header.text}>flexbox-react</span>
      <iframe
        frameBorder="0"
        height="30px"
        scrolling="0"
        src="https://ghbtns.com/github-btn.html?user=nachoaIvarez&repo=flexbox-react&type=star&count=true&size=large"
        width="120px"
      ></iframe>
    </Flexbox>
    <FlexItem maxWidth="666px" padding="40px" width="100%">{children}</FlexItem>
    <FlexItem className={footer.container} height="60px" width="100%" />
  </Flexbox>);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
