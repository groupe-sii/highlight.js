/*
 Language: Bash
 Author: VGO
 Category: common
 */

function (hljs) {
  return {
    lexemes: /-{0,2}[a-zA-Z][a-zA-Z0-9\-_]*/,
    keywords: {
      keyword :
        // Both NPM & Yarn
        'update outdated upgrade run test start cache link ' +
        // NPM
        'install uninstall config init config adduser login publish ' +
        // Yarn
        'add remove upgrade-interactive global',
      literal : 'true false',
      built_in: 'npm yarn cd'
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
