import fastify from 'fastify'

import 'dotenv/config'

const app = fastify()

app.get('/hello2', async (request, reply) => {
    return { msg: 'oiiiiii'}
})

app.listen({ port: Number(process.env.PORT) }).then(() => {
    console.log('Rodando na porta: ${Process.env.PORT}')
})

