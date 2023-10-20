import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import jwt_decode from "jwt-decode";

import { TextField } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css'
import '../styles/General.css'

export default function Login() {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        console.log('hola')
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Realiza una solicitud de inicio de sesión al servidor
    //         const response = await axios.post("https://amddibackend-production-2880.up.railway.app/loginA", {
    //             email,
    //             password, // Aquí enviamos el email y la contraseña en el cuerpo de la solicitud
    //         });

    //         if (response.status === 200) {
    //             // Inicio de sesión exitoso
    //             const data = response.data; // No es necesario usar await ni .json()
    //             console.log(data);
    //             // Almacena el token en el almacenamiento local o en una cookie
    //             localStorage.setItem("token", data.token);
    //             localStorage.setItem('isLoggedIn', true);
    //             // Decodifica el token para obtener el rol
    //             const decodedToken = jwt_decode(data.token);
    //             // console.log("Rol del usuario:", decodedToken.rol);
    //             setIsLoggedIn(true);
    //             // Redirige a la página correspondiente según el rol
    //             if (decodedToken.rol === "admin") {
    //                 navigate("/registrar_asesor");
    //                 window.location.reload();
    //                 // console.log(decodedToken.rol);
    //             } else if (decodedToken.rol === "asesor") {
    //                 console.log("Este es un", decodedToken.rol);
    //                 try {
    //                     const res = await axios.get(`https://amddibackend-production-2880.up.railway.app/asesoress/${email}`);
    //                     if (res.status === 200) {
    //                         // La solicitud fue exitosa (código de estado 200)
    //                         const responseData = res.data.content;
    //                         console.log(responseData);
    //                         // setData(responseData);

    //                         // Opcional: Guardar los datos en el localStorage
    //                         localStorage.setItem('data', JSON.stringify(responseData));
    //                     } else {
    //                         console.log(`La solicitud no fue exitosa. Código de estado: ${res.status}`);
    //                     }
    //                 } catch (e) {
    //                     console.error(e);
    //                 }
    //                 navigate("/asesorado_principal");
    //                 window.location.reload();
    //             }
    //         } else {
    //             // Error en el inicio de sesión
    //             console.error("Error en el inicio de sesión");
    //         }
    //     } catch (error) {
    //         alert("Error al ingresar correo o contraseña");
    //         // alert("La contraseña o el correo es incorrecto");

    //         setIsLoggedIn(false);
    //     }
    // };


    return (
        <div className="login_a_form">
            <div className="titulo_login">
                <h2>Ingresar</h2>
                <span className="linea"></span>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="form_iniciar_sesion">
                <TextField type="email"
                    name="email"
                    label="Email"
                    className="input_ingreso_a"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField type="password"
                    name="pwd_hash"
                    label="Contraseña"
                    className="input_ingreso_a"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button_backend" type="submit">
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
}