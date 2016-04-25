import { Flexbox, FlexItem } from 'flexbox-react';
import { PropTypes } from 'React';

import '~/src/css/base.css';
import 'normalize.css';
import header from '~/src/css/components/header.css';

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
        src="https://ghbtns.com/github-btn.html?user=nachoaIvarez&repo=flexbox-react&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="120px"
        height="30px"
      ></iframe>
    </Flexbox>
    <FlexItem padding="40px" maxWidth="666px" width="100%">{children}</FlexItem>
    <FlexItem
      className="footer"
      height="60px"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <span>MIT © <a href="http://github.com/nachoaIvarez">Nacho Álvarez</a></span>
    </FlexItem>
  </Flexbox>);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
