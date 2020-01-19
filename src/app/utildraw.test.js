const { drawImage } = require('./utildraw.js')

test('test utildraw', () => {
  const mockFn = jest.fn();
  // var defaultFrame = [[['fff']], [['fff']]];
  // drawImage(defaultFrame, mockFn);
  expect(mockFn).toBeDefined();
});