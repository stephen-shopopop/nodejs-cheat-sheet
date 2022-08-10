import cluster from 'cluster'
import { Console } from 'console'
import { randomUUID } from 'crypto'
import http from 'http'
import { cpus } from 'os'

const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

if (cluster.isMaster) {
  logger.info(`ℹ Primary ${process.pid} is running`)

  let numWorkers = cpus().length

  for (; numWorkers > 0; numWorkers--) {
    cluster.fork({ uuid: randomUUID() })
  }

  cluster.on('online', (worker) => logger.info(`ℹ Worker ${String(worker.process.pid)} is online`))

  cluster.on('disconnect', (worker) => logger.info(`ℹ Worker ${String(worker.process.pid)} has disconnected`))

  cluster.on('fork', (worker) => {
    logger.info(`ℹ Worker ${String(worker.id)} is started`)

    worker.on('message', (msg) => logger.info('✉️ message', msg))

    worker.send(`hello ${worker.id}`)
  })

  cluster.on('listening', (worker, address) => {
    logger.info(`ℹ A worker ${String(worker.process.pid)} is connected to ${address.address}:${address.port}`)
  })

  cluster.on('exit', (worker, code, signal) => {
    logger.warn(`⚠ Worker ${String(worker.process.pid)} died with code ${code} and signal ${signal}`)
  })
} else {
  http
    .createServer((req, res) => res.end('hello world'))
    .listen(3000, () => logger.info(`＠ Server http started by worker ${process.pid}`))

  logger.info(`ℹ Worker ${process.pid} started with uuid: ${String(process.env.uuid)}`)

  process.on('message', (msg) => logger.info('✉️ Worker received messsage:', msg))

  if (process.send != null) {
    process.send({ cmd: `✉️ I am alive ${process.pid}` })
  }

  const time = Math.floor(Math.random() * 10000)
  setTimeout(() => process.exit(0), time)
}
