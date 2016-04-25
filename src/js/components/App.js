import Markdown from 'react-markdown';

import Layout from './Layout';

import readme from '~/README.md';

export default () =>
  (<Layout>
    <Markdown source={readme} />
  </Layout>);
