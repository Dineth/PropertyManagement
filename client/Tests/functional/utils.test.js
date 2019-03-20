import Util from '../../src/util';

test('get days to first pay day best case', () => {
  expect(Util.getDaysToFirstPay(new Date('2019-04-05'), 'saturday')).toBe(1);
});

test('get days to first pay day worst case', () => {
  expect(Util.getDaysToFirstPay(new Date('2019-04-05'), 'thurseday')).toBe(6);
});
