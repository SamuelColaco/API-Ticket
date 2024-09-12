
import { routes } from "../routes.js"

export async function routeHandler({ req, res}) {

    
    const route = routes.find((route) => {
        return route.method === req.method && route.path === req.url
    })

    if(route){
        route.controller({req, res})
    }

    return res.writeHead(404).end("Não foi possivel achar a rota")

    
}