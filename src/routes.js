import { create } from "./controller/tickets/create.js";
import { deleteTicket } from "./controller/tickets/deleteTicket.js";
import { index } from "./controller/tickets/index.js";
import { update } from "./controller/tickets/update.js";
import { updateStatus } from "./controller/tickets/updateStatus.js";
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
        controller: update,
    },

    
    {
        method: "PATCH",
        path: "/tickets/:id/close",
        controller: updateStatus,
    },

    {
        method: "DELETE",
        path: "/tickets/:id",
        controller: deleteTicket,
    }
].map((route) => ({
    ...route,
    path: routeParams(route.path)
}))