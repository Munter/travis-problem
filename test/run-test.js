var sass = require('node-sass');
var zopfli = require('node-zopfli');

var expect = require('unexpected');

it('should load node-sass', function () {
  expect(sass, 'to satisfy', {
    render: expect.it('to be a function'),
    renderSync: expect.it('to be a function'),
    info: /node-sass/
  });
});

it('should load node-zopfli', function () {
  expect(zopfli, 'to be a function');
});
