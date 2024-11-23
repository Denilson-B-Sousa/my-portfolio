import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from "router.tsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient({})

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </QueryClientProvider>,
)
