import { create } from "./controller/tickets/create.js";
import { index } from "./controller/tickets/index.js";
import { routeParams } from "./utils/routeParams.js";

export const routes = [
    {
        method: "GET",
        path: "/tickets",
        controller: index,
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
].map((route) => ({
    ...route,
    path: routeParams(route.path)
}))