const fs = require('fs');
const path = require('path');

const bookmarkletPath = path.join(__dirname, '..', 'bookmarklet.js');

try {
  let code = fs
    .readFileSync(bookmarkletPath, 'utf8')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const bookmarklet =
    'javascript:' + encodeURIComponent(`(function(){${code}})();`);
  console.log(bookmarklet);
} catch (error) {
  console.error('Error generating bookmarklet:', error);
  process.exit(1);
}
