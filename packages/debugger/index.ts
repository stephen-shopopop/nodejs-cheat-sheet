import { debuglog } from 'node:util'

debuglog('foo')('%s hello from foo [%d]', 123)

debuglog('foo-bar')('hi there, it\'s foo-bar [%d]', 2333)
