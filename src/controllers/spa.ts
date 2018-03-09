import { User } from "../entity/User";
import * as fs from 'fs'

export async function spaRoutes(fastify, options) {
  fastify.get('/*', (request, reply) => {
    const stream = fs.createReadStream('./src/index.html')
    reply.type('text/html').send(stream)
  })
}