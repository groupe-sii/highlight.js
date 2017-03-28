/*
 Language: Clea
 Author: VGO
 Category: common
 */

function (hljs) {
  return {
    lexemes: /-{0,2}[a-zA-Z][a-zA-Z0-9\-_]*/,
    keywords: {
      keyword : 'new init generate serve build test lint help component directive filter service module',
      literal : 'true false',
      built_in: 'clea cd'
    },
    contains: [
      {
        className: 'meta',
        begin: /^#![^\n]+sh\s*$/,
        relevance: 10
      },
      hljs.HASH_COMMENT_MODE
    ]
  };
}
