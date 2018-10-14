import formatMoney from '../lib/formatMoney';

describe('formatMoney Function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(9)).toEqual('$0.09');
  });

  it('leaves cents off for whole dollars', () => {
    expect(formatMoney(5000)).toEqual('$50');
  });

  it('works with whole and fractional dollars', () => {
    expect(formatMoney(5012)).toEqual('$50.12');
  });
});
