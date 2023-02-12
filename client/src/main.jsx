import React from 'react'
import ReactDOM from 'react-dom/client'
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
      <Route path='/' element={<Home />}></Route>
      <Route path='/home-sys' element={<HomeSyS />}></Route>
      <Route path='/clientes-sys' element={<ClientesSyS />}></Route>
      <Route path='/editar-clientesys/:id' element={<EditarClienteS />}></Route>
      <Route path='/añadir-clientesys/' element={<AñadirClienteS />}></Route>
      <Route path='/añadir-citas/' element={<AñadirCitas />}></Route>
      <Route path='/editar-cita/:id' element={<EditarCitas />}></Route>
      <Route path='/citas-sys' element={<CitasSyS />}></Route>
      <Route path='/productos-sys' element={<ProductosSyS />}></Route>
      <Route path='/home-joly' element={<HomeJoly />}></Route>
      <Route path='/clientes-joly' element={<ClientesJoly />}></Route>
      <Route path='/añadir-clientej' element={<AñadirClienteJ />}></Route>
      <Route path='/editar-clientej/:id' element={<EditarCliente />}></Route>
      <Route path='/productos-joly' element={<ProductosJoly />}></Route>
      <Route path='/añadir-productoj' element={<AñadirProductoJ />}></Route>
      <Route path='/editar-productoj/:id' element={<EditarProductoJ />}></Route>
      <Route path='/proveedores-joly' element={<ProveedoresJoly />}></Route>
      <Route path='/añadir-proveedorj' element={<AñadirProveedoresJ />}></Route>
      <Route path='/editar-proveedorj/:id' element={<EditarProveedoresJ />}></Route>
      <Route path='/añadir-producto' element={<AñadirProductoS />}></Route>
      <Route path='/editar-producto/:id' element={<EditarProductoS />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
  </HashRouter>
)