import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login'
import NavBarLat from './components/NavBarLat'
import Registrar from './components/RegistrarAsesorVentas'
// import Calendario from './components/Calendrio'
import Cotizar from './components/Cotizar'
import Reportes from './components/Reportes'
import ReferidoFb from './components/ReferidoFb'
import ReferidoWhat from './components/ReferidoWhat'
import ReferidoInsta from './components/ReferidoInsta'
import ReferidoEmail from './components/ReferidoEmail'
import TablaAsesores from './components/TablaAsesores'
import TablaClientesConcretados from './components/TablaClientesConcretados'
import TablaClientesPotenciales from './components/TablaClientesPotenciales'

import './App.css';

function App() {
  return (
    <Router>
      <NavBarLat/>
      <Routes>
        <Route path='/login_v' element={<Login />}/>
        <Route path='/registrar_asesor' element={<Registrar />}/>
        <Route path='/asesores_ventas' element={<TablaAsesores />}/>

        <Route path='/tabla_asesores' element={<TablaAsesores />}/>
        {/* <Route path='/calendario' element={<Calendario />}/> */}
        <Route path='/cotizar' element={<Cotizar />}/>
        <Route path='/reportes' element={<Reportes/>}/>
        <Route path='/referidos_facebook' element={<ReferidoFb/>}/>
        <Route path='/referidos_whatsapp' element={<ReferidoWhat/>}/>
        <Route path='/referidos_instagram' element={<ReferidoInsta/>}/>
        <Route path='/referidos_mail' element={<ReferidoEmail/>}/>
        <Route path='/clientes_concretados' element={<TablaClientesConcretados />}/>
        <Route path='/clientes_potenciales' element={<TablaClientesPotenciales />}/>
      </Routes>
    </Router>
  );
}

export default App;
