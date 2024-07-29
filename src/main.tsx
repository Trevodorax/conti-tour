import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './styles/root.css'
import { ContextsWrapper } from './contexts/contextsWrapper'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  <React.StrictMode>
    <ContextsWrapper>
      <RouterProvider router={router} />
    </ContextsWrapper>
  </React.StrictMode>,
);
