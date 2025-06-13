import Fastify from "fastify";
import cors from '@fastify/cors'
import { clientes } from "./routes/clientes";


const server = async () => {

    const app = Fastify({})
    
    await app.register(cors, {
        origin: 'true',
        methods: ['GET', 'POST', 'PUT', 'DELETE' ]
    })
    
    await app.register(clientes)
    
    app.listen({ port: 3333 }, ()=>{
        console.log("Rodando API")
    })
}

server();