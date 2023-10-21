import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import ReactPaginate from 'react-js-pagination';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TablaAsesores.css'


export default function TablaUsuarios() {
    const location = useLocation();


    const [asesoresVentas, setAsesoresVentas] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    console.log("Los asesores de ventas",asesoresVentas);

    useEffect(() => {
        const obtenerAsesoresVentas = async () => {
            try {
                const response = await axios.get('http://localhost:5000/asesor_ventas');
                console.log(response)
                if (response.status === 200) {
                    setAsesoresVentas(response.data.content);
                }
            } catch (err) {
                console.log(err);
            }
        };
        obtenerAsesoresVentas();
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    // const handleSearch = () => {
    //     const searchTerms1 = searchTerm.trim().replace(/\s+/g, ' ');
    //     let cleanedSearchTerm = searchTerm.replace(/\s/g, "");

    //     console.log(searchTerms1);
    //     const foundUser = usuariosConServicios.map(usuario => {
    //         const urgencia = usuario.fecha_estimada ? getColor(usuario.fecha_estimada) : null;
    //         const mes = usuario.monto_pagado[0]?.fecha_pago ? obtenerNombreMes(usuario.monto_pagado[0].fecha_pago) : null;
    //         if (cleanedSearchTerm === '1') {
    //             cleanedSearchTerm = 'red'
    //         }
    //         if (cleanedSearchTerm === '2') {
    //             cleanedSearchTerm = '#ffd700'
    //         }
    //         if (cleanedSearchTerm === '3') {
    //             cleanedSearchTerm = '#00d799'
    //         }
    //         if (cleanedSearchTerm === 'FINALIZADO') {
    //             cleanedSearchTerm = 'black'
    //         }
    //         const idAmddiMatches = usuario.id_amddi && usuario.id_amddi.startsWith(cleanedSearchTerm);

    //         return {
    //             ...usuario,
    //             urgencia,
    //             mes,
    //             idAmddiMatches
    //         };

    //     }).filter(usuario => {
    //         return (
    //             usuario.urgencia.includes(cleanedSearchTerm) ||
    //             usuario.mes.includes(cleanedSearchTerm) ||
    //             usuario.departamento.includes(cleanedSearchTerm) ||
    //             (usuario.asesor_ventas && usuario.asesor_ventas.includes(searchTerms1)) ||
    //             usuario.pais.includes(cleanedSearchTerm) ||
    //             // usuario.nombre.includes(cleanedSearchTerm) ||
    //             usuario.dni.includes(cleanedSearchTerm) ||
    //             usuario.email.includes(cleanedSearchTerm) ||
    //             (usuario.id_amddi && usuario.id_amddi.toString().includes(cleanedSearchTerm)) || usuario.idAmddiMatches
    //         );
    //     });
    //     console.log(foundUser);
    //     setFilteredUser(foundUser);
    // };


    // const clearSearch = () => {
    //     setSearchTerm("");
    //     setFilteredUser(null);
    // };

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const itemsCount = asesoresVentas.length;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = asesoresVentas.slice(startIndex, endIndex);
    

    return (
        <div className="tabla_usuarios">
            <div className="franja_verd">
                <h1>Lista de Asesores de Ventas</h1>
            </div>
            <div className="tabla_usuario_container">
                <div className="filtro_container filtro_usuarios">
                    <input
                        type="text"
                        className="input_filtro input_usuario_filtro"
                        placeholder="Filtrar por Id, DNI, Email, Nombre Asesor)"
                        value={searchTerm}
                        // onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* <button className="button_backend_filtro" onClick={handleSearch}>Buscar</button>
                    <button className="button_backend_filtro" onClick={clearSearch}>Limpiar</button> */}
                </div>
                <table className="table">
                    <thead>
                        <tr className="fondo_header">
                            <th>Nº</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>País</th>
                            <th>Departamento</th>
                            <th>Email</th>
                            <th>DNI</th>
                            <th>Celular</th>
                            <th>Rol</th>
                            <th>Editar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentData.length > 0 ? (
                                currentData.map( (asesor,index) => (
                                    <tr>
                                        <td>
                                            {asesor.id}
                                        </td>
                                        <td>
                                            {asesor.nombre}
                                        </td>
                                        <td>
                                            {asesor.apeMat}
                                            <br />
                                            {asesor.apePat}
                                        </td>
                                        <td>
                                            {asesor.pais}
                                        </td>
                                        <td>
                                            {asesor.departamento}
                                        </td>
                                        <td>
                                            {asesor.email}
                                        </td>
                                        <td>
                                            {asesor.dni}
                                        </td>
                                        <td>
                                            {asesor.celular}
                                        </td>
                                        <td>
                                            {asesor.rol}
                                        </td>
                                        <td>
                                            <button>Editar</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <div>
                                    No hay asesores de ventas probable error en la base de datos
                                </div>
                            )

                        }
                    </tbody>
                </table>
                <ReactPaginate
                    activePage={currentPage}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={itemsCount}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </div>
        </div>
    );
}