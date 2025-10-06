import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Dashboard from './pages/dashboard.jsx'
import Product from './pages/product.jsx'
import NotFound from './pages/notFound.jsx'
import AppLayout from './pages/appLayout.jsx'
import Homepage from './pages/Homepage.jsx'
import Pricing from './pages/Pricing.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="app" element={<AppLayout />}>
          <Route index path="cities"></Route>
          <Route path="cities" element={<p>cities list</p>} />
          <Route path="countries" element={<p>countries list</p>} />
          <Route path="add" element={<p>add</p>} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <h1>hello world</h1>
      <Link to="dashboard">go to dashboard</Link>
    </BrowserRouter>
  )
}

export default App
