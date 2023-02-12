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
import EditarCliente from './components/JOLY/Clientes/EditarClienteJ'
import AñadirClienteJ from './components/JOLY/Clientes/AñadirClienteJ'
import AñadirProductoJ from './components/JOLY/Productos/AñadirProductoJ'
import EditarProductoJ from './components/JOLY/Productos/EditarProductoJ'
import AñadirProveedoresJ from './components/JOLY/Proveedores/AñadirProveedoresJ'
import EditarProveedoresJ from './components/JOLY/Proveedores/EditarProveedoresJ'
import AñadirClienteS from './components/SYS/Clientes/AñadirClienteS'
import EditarClienteS from './components/SYS/Clientes/EditarClienteS'
import AñadirCitas from './components/SYS/Citas/AñadirCitas'
import EditarCitas from './components/SYS/Citas/EditarCitas'
import AñadirProductoS from './components/SYS/productos/AñadirProductoS'
import EditarProductoS from './components/SYS/productos/EditarProductoS'




ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} errorElement={<Error />}></Route>
      <Route path='/home-sys' element={<HomeSyS />} errorElement={<Error />}></Route>
      <Route path='/clientes-sys' element={<ClientesSyS />} errorElement={<Error />}></Route>
      <Route path='/editar-clientesys/:id' element={<EditarClienteS />} errorElement={<Error />}></Route>
      <Route path='/añadir-clientesys/' element={<AñadirClienteS />} errorElement={<Error />}></Route>
      <Route path='/añadir-citas/' element={<AñadirCitas />} errorElement={<Error />}></Route>
      <Route path='/editar-cita/:id' element={<EditarCitas />} errorElement={<Error />}></Route>
      <Route path='/citas-sys' element={<CitasSyS />} errorElement={<Error />}></Route>
      <Route path='/productos-sys' element={<ProductosSyS />} errorElement={<Error />}></Route>
      <Route path='/home-joly' element={<HomeJoly />} errorElement={<Error />}></Route>
      <Route path='/clientes-joly' element={<ClientesJoly />} errorElement={<Error />}></Route>
      <Route path='/añadir-clientej' element={<AñadirClienteJ />}></Route>
      <Route path='/editar-clientej/:id' element={<EditarCliente />}></Route>
      <Route path='/productos-joly' element={<ProductosJoly />} errorElement={<Error />}></Route>
      <Route path='/añadir-productoj' element={<AñadirProductoJ />} errorElement={<Error />}></Route>
      <Route path='/editar-productoj/:id' element={<EditarProductoJ />} errorElement={<Error />}></Route>
      <Route path='/proveedores-joly' element={<ProveedoresJoly />} errorElement={<Error />}></Route>
      <Route path='/añadir-proveedorj' element={<AñadirProveedoresJ />} errorElement={<Error />}></Route>
      <Route path='/editar-proveedorj/:id' element={<EditarProveedoresJ />} errorElement={<Error />}></Route>
      <Route path='/añadir-producto' element={<AñadirProductoS />} errorElement={<Error />}></Route>
      <Route path='/editar-producto/:id' element={<EditarProductoS />} errorElement={<Error />}></Route>
      <Route path='*' element={<Error />} errorElement={<Error />}></Route>
      
    </Routes>
  </HashRouter>
)