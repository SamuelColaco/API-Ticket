
import { routes } from "../routes.js"
import { Database } from "../database/db.js"

const database = new Database()

export function routeHandler({ req, res}) {

    
    const route = routes.find((route) => {
        return route.method === req.method && route.path === req.url
    })

    if(route){
        return route.controller({req, res, database})
    }

    return res.writeHead(404).end("Não foi possivel achar a rota")
    
}