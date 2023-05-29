const path = require('node:path')
const fastify = require('fastify')({logger: true})
const {readFile, writeFileSync} = require('node:fs')


fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'DNK')
})

fastify.get('/', (req, reply) => {
    reply.sendFile('index.html') 
})

fastify.post('/post-data', async (req, reply) => {
    readFile('./counter.txt', {encoding: 'utf-8'}, (err, data) => {
        // console.log(data)
        writeFileSync('./counter.txt', String(+data + 1))
    })
    reply.code(200)
})
const start = async () => {
    try {
        await fastify.listen({port: 3000})
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()