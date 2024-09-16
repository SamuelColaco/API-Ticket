
import { routes } from "../routes.js"
import { Database } from "../database/db.js"
import { extractQueryParams } from "../utils/extractQueryParams.js"


const database = new Database()

export function routeHandler({ req, res}) {
    
    
    const route = routes.find((route) => {
        return route.method === req.method && route.path.test(req.url)
    })

    console.log(route)
    if(route){
        
        const routeQueryParams = req.url.match(route.path)
        if(routeQueryParams){
            const { query, ...params } = routeQueryParams.groups
            req.params = params
            req.query = query ? extractQueryParams(query) : {}
        }


        return route.controller({req, res, database})
    }
    
    return res.writeHead(404).end("Não foi possivel achar a rota")
    
}