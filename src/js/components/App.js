import Layout from './Layout';
import 'normalize.css';
import '~/css/base.css';

export default function App() {
  return (
    <Layout>
      <p>
        Unopinionated, standard compilant flexbox components.
        You don't need to learn any propietary syntax, classnames or API's.
        If you know how to use flexbox, you know how to use flexbox-react
        components.
      </p>
      <p>
        Finally, you get to see your code and figure out how are nodes
        laid out without jumping between css files. Leave css files for the
        looks and actual aesthetics.
      </p>
      <p>
        No hardcoded, bloated, unnecesary vendor prefixes, by
        <a href="http://caniuse.com"> caniuse</a>. Just what your browser needs,
        based on your userAgent.
      </p>
      <p>
        No need to import any new stylesheet or to add any styles to your
        existing stylesheets. It works out of the box, just by using the
        component.
      </p>
    </Layout>
  );
}
