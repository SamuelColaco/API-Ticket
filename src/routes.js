

export const routes = [
    {
        method: "GET",
        path: "/tickets",
        controller({ req, res }){
        }
    },

    {
        method: "POST",
        path: "/tickets",
        controller({ req, res }){
            res.writeHead(201).end(JSON.stringify(req.body))
        }
    },

    {
        method: "PUT",
        path: "/tickets/:id",
        controller({ req, res }){
        }
    },

    {
        method: "PATCH",
        path: "/tickets/:id/status",
        controller({ req, res }){
        }
    },

    {
        method: "DELETE",
        path: "/tickets/:id",
        controller({ req, res }){
        }
    }
]