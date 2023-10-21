import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import jwt_decode from "jwt-decode";

import Login from './components/Login'
import NavBarLat from './components/NavBarLat'
import Registrar from './components/RegistrarAsesorVentas'
// import Calendario from './components/Calendrio'
import Cotizar from './components/Cotizar'
// import Reportes from './components/Reportes'
import ReferidoFb from './components/ReferidoFb'
import ReferidoWhat from './components/ReferidoWhat'
import ReferidoInsta from './components/ReferidoInsta'
import ReferidoEmail from './components/ReferidoEmail'
import TablaAsesores from './components/TablaAsesores'
import TablaClientesConcretados from './components/TablaClientesConcretados'
import TablaClientesPotenciales from './components/TablaClientesPotenciales'

import AuthGuard from './components/AuthGuard';

import './App.css';

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAsesorA, setIsAsesorA] = useState(false);
  const [isAsesorN, setIsAsesorN] = useState(false);

  function tokenExpirado(decodedToken) {
    if (!decodedToken.exp) {
      return false; // Si no hay una fecha de expiración en el token, considerarlo como no expirado
    }

    const expirationTime = decodedToken.exp * 1000; // Convertir la fecha de expiración a milisegundos
    const currentTime = new Date().getTime(); // Obtener la fecha actual en milisegundos

    return currentTime > expirationTime; // Comparar la fecha actual con la fecha de expiración
  }

  useEffect(() => {
    // Primera capa de autenticación (variable en localStorage)
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedIsLoggedIn === 'true') {
      // Segunda capa de autenticación (verificar el token JWT)
      const token = localStorage.getItem('token');
      // console.log(token);
      if (token) {
        // Decodifica el token para verificar su validez
        try {
          const decodedToken = jwt_decode(token);
          // console.log("elrol",decodedToken.rol);
          if (decodedToken.rol === "asesor") {
            setIsAsesorA(true);
          }
          if (decodedToken.rol === "normal") {
            setIsAsesorA(true);
          }
          // Puedes realizar más comprobaciones aquí según tus necesidades
          // Por ejemplo, verificar si el token ha expirado
          if (!tokenExpirado(decodedToken)) {
            setIsLoggedIn(true);
          }
        } catch (error) {
          console.error('Error al decodificar el token:', error);
        }
      }
    }
  }, []);

  return (
    <Router>
      {isLoggedIn && <NavBarLat setIsLoggedIn={setIsLoggedIn} isAsesorA={isAsesorA} isAsesorN={isAsesorN} setIsAsesorA={setIsAsesorA} setIsAsesorN={setIsAsesorN} />}
      <AuthGuard>
        <Routes>
          <Route path='/login_v' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {isLoggedIn && (
            <>
              {isAsesorA && (
                <>
                  <Route path='/registrar_asesor' element={<Registrar />} />
                  <Route path='/asesores_ventas' element={<TablaAsesores />} />
                  {isAsesorN && (
                    <>
                      {/* <Route path='/calendario' element={<Calendario />}/> */}
                      <Route path='/cotizar' element={<Cotizar />} />
                      {/* <Route path='/reportes' element={<Reportes/>}/> */}
                      <Route path='/referidos_facebook' element={<ReferidoFb />} />
                      <Route path='/referidos_whatsapp' element={<ReferidoWhat />} />
                      <Route path='/referidos_instagram' element={<ReferidoInsta />} />
                      <Route path='/referidos_mail' element={<ReferidoEmail />} />
                      <Route path='/clientes_concretados' element={<TablaClientesConcretados />} />
                      <Route path='/clientes_potenciales' element={<TablaClientesPotenciales />} />
                    </>
                  )}
                </>
              )}
            </>
          )}

        </Routes>
      </AuthGuard>
    </Router>
  );
}

export default App;
