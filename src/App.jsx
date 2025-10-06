import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Dashboard from './pages/dashboard.jsx'
import Product from './pages/product.jsx'
import NotFound from './pages/notFound.jsx'
import AppLayout from './pages/appLayout.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <h1>hello world</h1>
      <Link to="dashboard">go to dashboard</Link>
    </BrowserRouter>
  )
}

export default App
