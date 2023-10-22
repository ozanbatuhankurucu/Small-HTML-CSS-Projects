import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routerConfig/Router'
import { QueryClientProvider, queryClient } from './queries/queryClient'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </QueryClientProvider>
)
