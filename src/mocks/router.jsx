import { About, Location, Careers, Team, Error } from "../views"


export const routerLinks = [
    {
        id: 1,
        path: '/about',
        element: <About/> ,
        title: "About"
    },
    {
        id: 2,
        path: '/location',
        element: <Location/> ,
        title: "Location"
    },
    {
        id: 3,
        path: '/careers',
        element: <Careers/> ,
        title: "Careers"
    },
    {
        id: 4,
        path: '/team',
        element: <Team/> ,
        title: "Team"
    },
    {
        id: 5,
        path: '*',
        element: <Error/> 
    }
]