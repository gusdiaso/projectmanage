import { FastifyInstance } from "fastify";

export const clientes = (app: FastifyInstance) => {

    app.get("/cliente", async (request, reply) =>  {
        return "Voce acessou clientes" 
    })

    app.post("/cliente", async () => {
        return "Voce esta criando cliente"
    } )

    app.put("/cliente", async () => {
        return "Voce esta atualizando cliente"
    })

    app.delete("/cliente", async () => {
        return "Voce esta deletando cliente"
    })

}