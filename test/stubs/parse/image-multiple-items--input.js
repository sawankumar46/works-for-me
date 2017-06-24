const {
  IMAGE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants');

module.exports = {
  type: IMAGE_CONTEXT,
  content: [
    { type: WORD_LEXEME, content: 'some' },
    { type: WORD_LEXEME, content: 'image' },
    { type: WORD_LEXEME, content: '(./some-' },
    { type: WORD_LEXEME, content: 'image.jpg)' },
    { type: WORD_LEXEME, content: 'another' },
    { type: WORD_LEXEME, content: 'one' },
    { type: WORD_LEXEME, content: '(http://some.com/another-image.jpg)' }
  ]
}