import { User } from "../entity/User";

export async function userRoutes(fastify, options) {
  const db = fastify.db
  const userRepo = fastify.db.getRepository(User)

  fastify.get('/api/hello', async (request, reply) => {
    return { hello: 'world', users: await userRepo.find() }
  })
}