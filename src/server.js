

import http from "http"

const server = http.createServer((req, res)=>{
    console.log("Energizado")
})

server.listen(3333)