import { Console } from 'console'
import { cpus } from 'os'
import { isMainThread, parentPort, Worker } from 'worker_threads'

const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

if (isMainThread) {
  const workersList: Worker[] = []

  let numWorkers = cpus().length

  for (; numWorkers > 0; numWorkers--) {
    workersList.push(new Worker(__filename))
  }

  for (const worker of workersList) {
    worker.on('message', (msg: any) => logger.log(`ℹ [msg] worker: ${worker.threadId}`, msg))

    worker.on('error', (e: unknown) => logger.warn(`⚠ [error] worker: ${worker.threadId}`, e))

    worker.on('exit', (code: number) => logger.warn(`ℹ Worker exited with code: ${code}`))

    worker.on('online', () => {
      logger.info(`ℹ worker ${worker.threadId} started`)
      worker.postMessage('✉️ Hello the world!')
    })
  }
} else {
  logger.info('ℹ I am a worker', isMainThread)

  parentPort?.on('message', logger.info)

  parentPort?.postMessage('Hello')

  setTimeout(() => {
    throw new Error('Sorry i have a error')
  }, 3000)
}
