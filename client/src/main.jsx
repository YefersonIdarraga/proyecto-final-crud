import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Error from './layout/Error'
import Home from './layout/Home'
import HomeSyS from './layout/SyS/HomeSyS'
import HomeJoly from './layout/Joly/HomeJoly'
import ClientesSyS from './layout/SyS/ClientesSyS'
import CitasSyS from './layout/SyS/CitasSyS'
import ProductosSyS from './layout/SyS/ProductosSyS'
import ClientesJoly from './layout/Joly/ClientesJoly'
import ProveedoresJoly from './layout/Joly/ProveedoresJoly'
import ProductosJoly from './layout/Joly/ProductosJoly'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} errorElement={<Error />}></Route>
      <Route path='/home-sys' element={<HomeSyS />} errorElement={<Error />}></Route>
      <Route path='/clientes-sys' element={<ClientesSyS />} errorElement={<Error />}></Route>
      <Route path='/citas-sys' element={<CitasSyS />} errorElement={<Error />}></Route>
      <Route path='/productos-sys' element={<ProductosSyS />} errorElement={<Error />}></Route>
      <Route path='/home-joly' element={<HomeJoly />} errorElement={<Error />}></Route>
      <Route path='/clientes-joly' element={<ClientesJoly />} errorElement={<Error />}></Route>
      <Route path='/proveedores-joly' element={<ProveedoresJoly />} errorElement={<Error />}></Route>
      <Route path='/productos-joly' element={<ProductosJoly />} errorElement={<Error />}></Route>
    </Routes>
  </HashRouter>
)