const {
  ROOT_CONTEXT,
  HEAD_CONTEXT,
  BODY_CONTEXT,
  HEAD_TITLE_CONTEXT,
  HEAD_DESCRIPTION_CONTEXT,
  BIO_CONTEXT,
  BIO_LINE_CONTEXT,
  WORD_LEXEME
} = require('../../../lib/constants')

module.exports = {
  setupsMetadata: [
    {
      initial: { date: '2016-11-14T12:23:03+01:00' }
    },
    {
      initial: { date: '2016-12-29T17:54:01+02:00' }
    }
  ],
  setupsAst: [
    {
      name: 'first-guy',
      content: {
        type: ROOT_CONTEXT,
        content: [
          {
            type: HEAD_CONTEXT,
            content: [
              {
                type: HEAD_TITLE_CONTEXT,
                content: 'First Guy'
              },
              {
                type: HEAD_DESCRIPTION_CONTEXT,
                content: 'First Guy\'s software setup'
              }
            ]
          },
          {
            type: BODY_CONTEXT,
            content: [
              {
                type: BIO_CONTEXT,
                content: [
                  {
                    type: BIO_LINE_CONTEXT,
                    content: [
                      {
                        type: WORD_LEXEME,
                        content: 'name:'
                      },
                      {
                        type: WORD_LEXEME,
                        content: 'First'
                      },
                      {
                        type: WORD_LEXEME,
                        content: 'Guy'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      name: 'second-guy',
      content: {
        type: ROOT_CONTEXT,
        content: [
          {
            type: HEAD_CONTEXT,
            content: [
              {
                type: HEAD_TITLE_CONTEXT,
                content: 'Second Guy'
              },
              {
                type: HEAD_DESCRIPTION_CONTEXT,
                content: 'Second Guy\'s software setup'
              }
            ]
          },
          {
            type: BODY_CONTEXT,
            content: [
              {
                type: BIO_CONTEXT,
                content: [
                  {
                    type: BIO_LINE_CONTEXT,
                    content: [
                      {
                        type: WORD_LEXEME,
                        content: 'name:'
                      },
                      {
                        type: WORD_LEXEME,
                        content: 'Second'
                      },
                      {
                        type: WORD_LEXEME,
                        content: 'Guy'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
