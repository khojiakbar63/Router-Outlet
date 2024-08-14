export function filterNavlist (navList){
    return navList.filter((item)=>item.title)
}

export function filterRouting(routers){
    return routers.map((item)=>({
        path: item.path,
        element: item.element
    }))
}