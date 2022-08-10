/**
 * Worker
 */

// Args
const args = process.argv.slice(2)

console.log('[worker] Worker start with args:', args)

// receive message from parent
process.on('message', console.log)

// Send message to parent
if (process.send != null) {
  process.send('Hello my parent')
}

// Force exit with error
setTimeout(() => {
  throw new Error('error, i am sorry')
}, 3000)
