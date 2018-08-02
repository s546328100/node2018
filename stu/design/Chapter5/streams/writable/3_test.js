'use strict';

const ToFileStream = require('./3');
const tfs = new ToFileStream();

tfs.write({path: 'file1.txt', content: 'Hello'});
tfs.write({path: 'file2.txt', content: 'Node.js'});
tfs.write({path: 'file3.txt', content: 'Streams'});
tfs.end(() => console.log('All files created'));