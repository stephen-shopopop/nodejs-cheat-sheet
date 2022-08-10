// Worker

import { Console } from 'console'

const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

// Args
const context = process.argv.slice(2)

logger.log('ℹ [worker] Worker start with context:', context)

// receive message from parent
process.on('message', logger.log)

// Send message to parent
if (process.send != null) {
  process.send(`✉️ Hello my parent ${process.pid}`)
}

// Force exit with error
setTimeout(() => {
  throw new Error('⚠ error, i am sorry')
}, 3000)
