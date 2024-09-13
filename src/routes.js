import { create } from "./controller/tickets/create.js";


export const routes = [
    {
        method: "GET",
        path: "/tickets",
        controller({ req, res, database }){
        }
    },

    {
        method: "POST",
        path: "/tickets",
        controller: create,
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