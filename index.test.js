const clean = require('./index')

describe('toRoman()', () => {
  test('converts 1', () => expect(clean(1)).toEqual('I'));
  test('converts 2', () => expect(clean(2)).toEqual('II'));
  test('converts 3', () => expect(clean(3)).toEqual('III'));
  test('converts 4', () => expect(clean(4)).toEqual('IV'));
  test('converts 5', () => expect(clean(5)).toEqual('V'));
  test('converts 6', () => expect(clean(6)).toEqual('VI'));
  test('converts 9', () => expect(clean(9)).toEqual('IX'));
  test('converts 27', () => expect(clean(27)).toEqual('XXVII'));
  test('converts 48', () => expect(clean(48)).toEqual('XLVIII'));
  test('converts 59', () => expect(clean(59)).toEqual('LIX'));
  test('converts 93', () => expect(clean(93)).toEqual('XCIII'));
  test('converts 141', () => expect(clean(141)).toEqual('CXLI'));
  test('converts 163', () => expect(clean(163)).toEqual('CLXIII'));
  test('converts 402', () => expect(clean(402)).toEqual('CDII'));
  test('converts 575', () => expect(clean(575)).toEqual('DLXXV'));
  test('converts 911', () => expect(clean(911)).toEqual('CMXI'));
  test('converts 1024', () => expect(clean(1024)).toEqual('MXXIV'));
  test('converts 3000', () => expect(clean(3000)).toEqual('MMM'));
});

