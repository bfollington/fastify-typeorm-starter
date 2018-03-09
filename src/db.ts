import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import * as fp from "fastify-plugin"

function plugin(fastify, options) {
    return createConnection().then(async connection => {

        fastify.log.info(`running migrations...`)
        await connection.runMigrations()

        fastify.decorate("db", connection)
    }).catch(error => console.log(error));
}

export const dbPlugin = fp(plugin)