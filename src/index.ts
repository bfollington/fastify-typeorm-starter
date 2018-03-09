import { dbPlugin } from "./db";
import { User } from "./entity/User";
import { userRoutes } from "./controllers/user";
import { spaRoutes } from "./controllers/spa";

const fastify = require('fastify')({
    logger: true
})

fastify.register(dbPlugin).ready()

fastify.register(userRoutes)
fastify.register(spaRoutes)

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()