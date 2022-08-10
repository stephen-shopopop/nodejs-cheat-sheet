import { ChildProcess, fork, ForkOptions } from 'child_process'
import { Console } from 'console'
import { cpus } from 'os'

const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

export function newWorker (path: string, context: string[] = [], options?: ForkOptions): ChildProcess {
  const worker = fork(path, context, options)

  // listener
  worker.on('disconnect', () => logger.log(`ℹ [disonnect] Worker pid ${String(worker.pid)} disconnect`))
  worker.on('error', (e: unknown) => logger.warn(`⚠ [error] worker pid ${String(worker.pid)} with error:`, e))
  worker.on('close', (code: number) => {
    logger.log(`⚠ [close] worker pid ${String(worker.pid)} - code: ${String(code)}`)

    // kill worker
    worker.removeAllListeners()
    worker.unref()
    worker.kill('SIGINT')

    // Restart a worker
    // setTimeout(() => newWorker(path, context), 3000)
  })

  worker.on('message', (msg: any) => {
    logger.info(`📩 [msg] Receive message from worker pid: ${String(worker.pid)}`, msg)

    worker.send('✉️ Hello the world! i am your parent')
  })

  return worker
}

// Start workers
const maxWorkers = 3
let numWorkers = cpus().length > 2 ? maxWorkers : cpus().length

for (; numWorkers > 0; numWorkers--) {
  newWorker('./worker.ts', ['myFirstArg', 'prod'])
}
