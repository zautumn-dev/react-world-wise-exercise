import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import { CitiesProvider } from './context/CitiesContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import SpinnerFullPage from './components/SpinnerFullPage.jsx'

/*
 * 懒加载 打包时会被 vite 识别拆分成多个 js 代码块 优化用户体验
 * */

// import NotFound from './pages/notFound.jsx'
// import AppLayout from './pages/appLayout.jsx'
// import Homepage from './pages/Homepage.jsx'
// import Login from './pages/Login.jsx'

// dist/index.html                       0.47 kB │ gzip:   0.30 kB
// dist/assets/index-Dsx4p3fQ.css        0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-B5O0XBJ4.css        0.35 kB │ gzip:   0.22 kB
// dist/assets/Homepage-v7_2aTlD.css     0.49 kB │ gzip:   0.30 kB
// dist/assets/index-CcPXYRy9.css        0.51 kB │ gzip:   0.28 kB
// dist/assets/appLayout-DnCpFJk0.css    1.91 kB │ gzip:   0.70 kB
// dist/assets/index-CgzR08kr.css       26.62 kB │ gzip:   4.38 kB
// dist/assets/notFound-BEfad4ZP.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/index-BjjFroq_.js         0.21 kB │ gzip:   0.19 kB
// dist/assets/index-DafS3HBL.js         0.49 kB │ gzip:   0.28 kB
// dist/assets/Homepage-B1CvBwUM.js      0.66 kB │ gzip:   0.41 kB
// dist/assets/Login-BBd3npl4.js         1.05 kB │ gzip:   0.55 kB
// dist/assets/appLayout-DD8SUfL9.js   157.24 kB │ gzip:  46.40 kB
// dist/assets/index--izennMU.js       409.96 kB │ gzip: 121.35 kB

const NotFound = lazy(() => import('./pages/NotFound'))
const AppLayout = lazy(() => import('./pages/AppLayout'))
const Homepage = lazy(() => import('./pages/Homepage'))
const Login = lazy(() => import('./pages/Login'))

// import CityList from './components/cityList/index.jsx'
// import CountryList from './components/countryList/index.jsx'
// import City from './components/City.jsx'
// import Form from './components/Form.jsx'

// dist/index.html                           0.47 kB │ gzip:  0.30 kB
// dist/assets/index-Dsx4p3fQ.css            0.03 kB │ gzip:  0.05 kB
// dist/assets/Message-D3OFWUR-.css          0.10 kB │ gzip:  0.11 kB
// dist/assets/Login-B5O0XBJ4.css            0.35 kB │ gzip:  0.22 kB
// dist/assets/Spinner-CQ27CIJi.css          0.39 kB │ gzip:  0.28 kB
// dist/assets/index-BKGOWLvM.css            0.48 kB │ gzip:  0.32 kB
// dist/assets/Homepage-v7_2aTlD.css         0.49 kB │ gzip:  0.30 kB
// dist/assets/index-CcPXYRy9.css            0.51 kB │ gzip:  0.28 kB
// dist/assets/index-D_te_WsH.css            0.57 kB │ gzip:  0.31 kB
// dist/assets/City-CxI1Crgd.css             0.59 kB │ gzip:  0.31 kB
// dist/assets/index-BH_90CX9.css            1.02 kB │ gzip:  0.51 kB
// dist/assets/index-Bobq98iX.css            1.03 kB │ gzip:  0.47 kB
// dist/assets/appLayout-DnCpFJk0.css        1.91 kB │ gzip:  0.70 kB
// dist/assets/Form-D_7tcmFs.css            22.45 kB │ gzip:  3.26 kB
// dist/assets/notFound-KgIA8ZZm.js          0.15 kB │ gzip:  0.15 kB
// dist/assets/index-DKLuEO1e.js             0.21 kB │ gzip:  0.19 kB
// dist/assets/BackButton-DjKxyfto.js        0.22 kB │ gzip:  0.20 kB
// dist/assets/Message-C4KVOoX1.js           0.22 kB │ gzip:  0.20 kB
// dist/assets/useUrlPosition-DtOR3aGR.js    0.24 kB │ gzip:  0.20 kB
// dist/assets/Spinner-DdOCBzD9.js           0.25 kB │ gzip:  0.18 kB
// dist/assets/index-6mS0l0Vw.js             0.30 kB │ gzip:  0.24 kB
// dist/assets/index-D73MEqMl.js             0.49 kB │ gzip:  0.28 kB
// dist/assets/Homepage-Bf4oMxgz.js          0.66 kB │ gzip:  0.41 kB
// dist/assets/index-ByyuLUXK.js             0.76 kB │ gzip:  0.44 kB
// dist/assets/Login-Bt_1lfDa.js             1.08 kB │ gzip:  0.56 kB
// dist/assets/City-BJAKGUpt.js              1.10 kB │ gzip:  0.55 kB
// dist/assets/index-4V88Sl2e.js             1.15 kB │ gzip:  0.64 kB
// dist/assets/appLayout-DqJ4PWUw.js       157.32 kB │ gzip: 46.42 kB
// dist/assets/Form-CoRE8ufL.js            172.72 kB │ gzip: 45.09 kB
// dist/assets/index-ad_2CrHd.js           234.15 kB │ gzip: 75.25 kB

const CityList = lazy(() => import('./components/CityList'))
const CountryList = lazy(() => import('./components/CountryList'))
const City = lazy(() => import('./components/City'))
const Form = lazy(() => import('./components/Form'))

// console.log(import.meta.env.DEV, import.meta.env.VITE_BASE_URL)

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        {/*资源还在请求及加载时显示的 loading 效果 配合 lazy 使用*/}
        <Suspense fallback={<SpinnerFullPage />}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="app" element={<AppLayout />}>
                {/* 实现重定向功能 <Navigate> */}
                <Route index element={<Navigate to="cities" replace={false} />}></Route>
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />

                <Route path="countries" element={<CountryList />} />
                <Route path="add" element={<Form />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </CitiesProvider>
    </AuthProvider>
  )
}

export default App
