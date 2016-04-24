import { PropTypes } from 'React';
import { Flexbox, FlexItem } from 'flexbox-react';
import header from '~/css/components/header.css';

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
        frameBorder="0" scrolling="0" width="160px" height="30px"
      ></iframe>
    </Flexbox>
    <FlexItem padding="40px" maxWidth="666px" >{children}</FlexItem>
  </Flexbox>);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
