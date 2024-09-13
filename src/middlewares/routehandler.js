
import { routes } from "../routes.js"
import { Database } from "../database/db.js"
import { extractQueryParams } from "../utils/extractQueryParams.js"


const database = new Database()

export function routeHandler({ req, res}) {
    console.log(routes)
    const route = routes.find((route) => {
        return route.method === req.method && route.path.test(req.url)
    })
    
    if(route){
        
        const routeQueryParams = req.url.match(route.path)
        const { query } = routeQueryParams.group
        
        extractQueryParams(query)
        return route.controller({req, res, database})
        
    }

    return res.writeHead(404).end("Não foi possivel achar a rota")
    
}