import { Flexbox, FlexItem } from 'flexbox-react';
import styles from '~/css/components/header.css';

console.log(styles);

export default function Layout({ children }) {
  return (
    <Flexbox flexDirection='column' alignItems="center" width='100%'>
      <FlexItem className={styles.header} width='100%' height='60px'>
        <span>Hi!</span>
      </FlexItem>
      <FlexItem>

      </FlexItem>
    </Flexbox>
  );
}
