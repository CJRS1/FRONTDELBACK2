import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import jwt_decode from "jwt-decode";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBarLat.css'
import '../styles/General.css'

export default function NavBarLat() {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [navClass, setNavClass] = useState('navbar_header_container minimized');
    const [opcionesClass, setOpcionesClass] = useState('opciones_backend hidden');
    const [imgClass, setImgClass] = useState('img_navlat hidden');
    const [imgClass1, setImgClass1] = useState('img_navlat block');
    const [nameClass, setNameClass] = useState('name_text block');
    const [imgNext, setImgNext] = useState('btn_left_right block');
    const [imgPrev, setImgPrev] = useState('btn_left_right hidden ');
    const [linkClass, setLinkClass] = useState('Link_anc center');
    const [dropdownClass, setDropdownClass] = useState('dropdown_svg');
    const [dropdownClass2, setDropdownClass2] = useState('hidden');
    const [dropdownClass3, setDropdownClass3] = useState('hidden');
    const [dropdownClass4, setDropdownClass4] = useState('hidden');

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

    const handleToggleNav = () => {
        if (navClass === 'navbar_header_container minimized') {
            setNavClass('navbar_header_container');
            setOpcionesClass('opciones_backend');
            setImgClass('img_navlat');
            setImgClass1('img_navlat1');
            setNameClass('name_text');
            setImgPrev('btn_left_right')
            setImgNext('btn_left_right hidden');
            setLinkClass('Link_anc');
            setDropdownClass('dropdown_svg hidden');
            setDropdownClass2('hidden');
            setDropdownClass3('dropdown_svg');
            setDropdownClass4('hidden');
        } else {
            setNavClass('navbar_header_container minimized');
            setOpcionesClass('opciones_backend hidden');
            setImgClass('img_navlat hidden');
            setImgClass1('img_navlat block');
            setNameClass('name_text block');
            setImgPrev('btn_left_right hidden');
            setImgNext('btn_left_right block');
            setLinkClass('Link_anc center');
            setDropdownClass('dropdown_svg');
            setDropdownClass2('hidden');
            setDropdownClass3('hidden');
            setDropdownClass4('hidden');
        }
    };

    const [showItems, setShowItems] = useState(false);

    const toggleVisibility = () => {
        setShowItems(!showItems);
        setDropdownClass2('dropdown_svg');
        setDropdownClass('hidden');
        if ((showItems) && (navClass === 'navbar_header_container minimized')) {
            console.log('hola2')
            setDropdownClass('dropdown_svg');
            setDropdownClass2('hidden');
        }
        if (navClass === 'navbar_header_container') {
            console.log('hola')
            setDropdownClass('hidden');
            setDropdownClass2('hidden');
        }
        if ((showItems) && (navClass === 'navbar_header_container')) {
            console.log('hola2')
            setDropdownClass3('dropdown_svg');
            setDropdownClass4('hidden');
        }
        if ((!showItems) && (navClass === 'navbar_header_container')) {
            console.log('hola2')
            setDropdownClass4('dropdown_svg');
            setDropdownClass3('hidden');
        }

    };

    return (
        <div className={navClass}>
            <div className="datos_backend_card">
                <img className={imgClass} src={require('../images/Logo_plomo.png')} alt='logo' />
                <img className={imgClass1} src={require('../images/Logo_plomo_solo.png')} alt='logo' />
                {/* <h3 className={opcionesClass}>{parsedData ? `${parsedData.nombre} ${parsedData.apePat}` : ''} </h3> */}
                {/* <h3 className={opcionesClass}>{userData ? `${userData.nombre} ${userData.apePat}` : (parsedData ? `${parsedData.nombre} ${parsedData.apePat}` : '')}</h3> */}
                <h3 className={opcionesClass}>Christian Reyes</h3>

                {/* <h3 className={nameClass} >{primeraLetraN}{primeraLetraA} </h3> */}
                <h3 className={nameClass} >CR </h3>
                {/* <h4 className={opcionesClass}>{email} </h4> */}
                <h4 className={opcionesClass}>reyes.christian@pucp.pe </h4>
                <button className={imgPrev} onClick={handleToggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fillRule="#666666" className="bi bi-arrow-left-circle-fill btn_ho" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                </button>
                <button className={imgNext} onClick={handleToggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fillRule="#666666" className="bi bi-arrow-right-circle-fill btn_ho" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </button>
            </div>
            <hr />
            <nav className="navlat_container">
                <ul className="navlat_list">
                    {/* {isAdmin && (
                        <> */}
                    <li>
                        <Link to="/registrar_asesor" className={linkClass}>
                            <svg className="icon bi bi-person-fill-add" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="currentColor" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                            </svg>
                            <h5 className={opcionesClass} >Registrar Asesor de Ventas</h5>
                        </Link>
                    </li>
                    <li>
                        <Link to="/asesores_ventas" className={linkClass}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                            </svg>
                            <h5 className={opcionesClass} >Asesores de Ventas</h5>
                        </Link>
                    </li>
                    {/* </>
                    )} */}
                    <li onClick={toggleVisibility}>
                        <Link to="/clientes_potenciales" className={linkClass}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                            </svg>
                            <div className={dropdownClass}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-caret-down-fill " viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                            </div>
                            <div className={dropdownClass2}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg>
                            </div>
                            <h5 className={opcionesClass} >Clientes
                            </h5>
                            <div className={dropdownClass3}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-caret-down-fill " viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                            </div>
                            <div className={dropdownClass4}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg>
                            </div>
                        </Link>
                    </li>
                    {showItems && (
                        <>
                            <li>
                                <Link to="/clientes_potenciales" className={linkClass}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-globe2" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                    </svg>
                                    <h5 className={opcionesClass} >Todos</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/referidos_mail" className={linkClass}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                    </svg>
                                    <h5 className={opcionesClass} >Referido por Email</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/referidos_facebook" className={linkClass}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    <h5 className={opcionesClass} >Referido por Facebook</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/referidos_instagram" className={linkClass}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                    <h5 className={opcionesClass} >Referido por Instagram</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/referidos_whatsapp" className={linkClass}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                    <h5 className={opcionesClass} > Referido por Whatsapp</h5>
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link to="/clientes_concretados" className={linkClass}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-person-fill-check" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                            </svg>
                            <h5 className={opcionesClass} >Concretados</h5>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendario" className={linkClass}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                            </svg>
                            <h5 className={opcionesClass} >Calendario</h5>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cotizar" className={linkClass}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-person-raised-hand" viewBox="0 0 16 16">
                                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z" />
                                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                            </svg>
                            <h5 className={opcionesClass} >Cotizar</h5>
                        </Link>
                    </li>
                    <li>
                        <Link to="/asesorado_secundario" className={linkClass}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-file-bar-graph-fill" viewBox="0 0 16 16">
                                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
                            </svg>
                            <h5 className={opcionesClass} >Reporte</h5>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login_v" className={linkClass}
                        // onClick={handleLogout}
                        >
                            <svg className="icon bi bi-door-open-fill" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="currentColor" viewBox="0 0 16 16">
                                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                            </svg>
                            <h5 className={opcionesClass} >Cerrar Sesión</h5>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}