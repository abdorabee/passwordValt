import fastify from "fastify";

function createServer(){
 
    const app = fastify()

    return app ;
}

export default createServer;