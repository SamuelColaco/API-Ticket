

import http from "http"

import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routehandler.js"

const server = http.createServer( async (req, res)=>{

    await jsonHandler({ req, res})
    routeHandler({req, res})
}) 

server.listen(3333)