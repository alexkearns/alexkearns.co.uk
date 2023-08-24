/*
 * highlight.js terraform syntax highlighting definition
 *
 * @see https://github.com/highlightjs/highlight.js
 */

export default function highlightTerraform(hljs) {
  const NUMBERS = {
    className: 'number',
    begin: '\\b\\d+(\\.\\d+)?',
    relevance: 0,
  }
  const STRINGS = {
    className: 'string',
    begin: '"',
    end: '"',
    contains: [
      {
        className: 'variable',
        begin: '\\${',
        end: '\\}',
        relevance: 9,
        contains: [
          {
            className: 'string',
            begin: '"',
            end: '"',
          },
          {
            className: 'meta',
            begin: '[A-Za-z_0-9]*' + '\\(',
            end: '\\)',
            contains: [
              NUMBERS,
              {
                className: 'string',
                begin: '"',
                end: '"',
                contains: [
                  {
                    className: 'variable',
                    begin: '\\${',
                    end: '\\}',
                    contains: [
                      {
                        className: 'string',
                        begin: '"',
                        end: '"',
                        contains: [
                          {
                            className: 'variable',
                            begin: '\\${',
                            end: '\\}',
                          },
                        ],
                      },
                      {
                        className: 'meta',
                        begin: '[A-Za-z_0-9]*' + '\\(',
                        end: '\\)',
                      },
                    ],
                  },
                ],
              },
              'self',
            ],
          },
        ],
      },
    ],
  }

  return {
    name: 'tf',
    aliases: ['terraform'],
    keywords: {
      keyword:
        'resource variable provider output locals module data terraform|10 backend var local',
      type: 'string number object map list set',
      literal: 'false true null',
    },
    literal: 'false true null',
    contains: [hljs.COMMENT('\\#', '$'), NUMBERS, STRINGS],
  }
}
