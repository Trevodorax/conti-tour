import { createRootRoute, Link, Outlet, createRoute, createRouter } from "@tanstack/react-router"
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


const rootRoute = createRootRoute({
    component: () => (
      <>
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    ),
  })
  
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: function Index() {
      return (
        <div className="p-2">
          <h3>Welcome Home!</h3>
        </div>
      )
    },
  })
  
  const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: function About() {
      return <div className="p-2">Hello from About!</div>
    },
  })
  
  const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])
  
  export const router = createRouter({ routeTree })
