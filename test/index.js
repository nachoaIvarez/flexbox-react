import test from 'tape';
import flexboxReact from '../src';

test('flexboxReact', (t) => {
  t.plan(1);
  t.equal(true, flexboxReact(), 'return true');
});
