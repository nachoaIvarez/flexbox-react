import Layout from './Layout';
import Markdown from 'react-markdown';
import readme from '~/README.md';

export default () =>
  (<Layout>
    <Markdown source={readme} />
  </Layout>);
