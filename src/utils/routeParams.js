

export function routeParams(path){
    const routeParamsRegex = /:([a-zA-z]+)/g

    const params = path.replaceAll(routeParamsRegex, "(?<$1>[a-z0-9-_]+)")

    const pathRegex = new RegExp(`${params}(?<query>\\?(.*)?$)`)

    return pathRegex
}