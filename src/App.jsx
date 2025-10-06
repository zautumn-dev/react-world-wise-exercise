import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router'
import Dashboard from './pages/dashboard.jsx'
import Product from './pages/product.jsx'
import NotFound from './pages/notFound.jsx'
import AppLayout from './pages/appLayout.jsx'
import Homepage from './pages/Homepage.jsx'
import Pricing from './pages/Pricing.jsx'
import Login from './pages/Login.jsx'
import CityList from './components/cityList/index.jsx'
import { useEffect, useState } from 'react'
import { asyncHandler } from './lib/utils.js'
import CountryList from './components/countryList/index.jsx'
import City from './components/City.jsx'
import Form from './components/Form.jsx'

console.log(import.meta.env.DEV, import.meta.env.VITE_BASE_URL)

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    async function fetchCityList() {
      const [err, response] = await asyncHandler(fetch(`${import.meta.env.VITE_BASE_URL}/cities`))

      setIsLoading(false)

      if (err) {
        return console.error(err.message)
      }

      const result = await response.json()
      setCities(result)
    }

    fetchCityList()
  }, [])

  useEffect(() => {})
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="app" element={<AppLayout />}>
          {/* 实现重定向功能 <Navigate> */}
          <Route index element={<Navigate to="cities" />}></Route>
          <Route path="cities" element={<CityList isLoading={isLoading} cityList={cities} />} />
          <Route path="cities/:id" element={<City />} />

          <Route path="countries" element={<CountryList isLoading={isLoading} cityList={cities} />} />
          <Route path="add" element={<Form />} />
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
