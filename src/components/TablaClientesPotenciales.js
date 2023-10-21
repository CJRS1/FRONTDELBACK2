import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TablaAsesores.css'


export default function TablaUsuarios() {
    const location = useLocation();

    const [asesoresVentas, setAsesoresVentas ] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    console.log(asesoresVentas);

    useEffect(() => {
        const obtenerAsesoresVentas = async() => {
            try{
                const response = await axios.get('http://localhost:5000/asesor_ventas');
                if(response.status === 200) {
                    setAsesoresVentas(response.content);
                }
            } catch (err){
                console.log(err);
            }
        };
        obtenerAsesoresVentas();
    },[]);

    return (
        <div className="tabla_usuarios">
            <div className="franja_verd">
                <h1>Lista de Clientes Potenciales</h1>
            </div>
            <div className="tabla_usuario_container">
                {/* <div className="filtro_container filtro_usuarios">
                    <input
                        type="text"
                        className="input_filtro input_usuario_filtro"
                        placeholder="Filtrar por Id Usuario, DNI, Mes, Email, Nombre Asesor o Urgencia(1,2,3,FINALIZADO)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="button_backend_filtro" onClick={handleSearch}>Buscar</button>
                    <button className="button_backend_filtro" onClick={clearSearch}>Limpiar</button>
                </div> */}
                <table className="table">
                    <thead>
                        <tr className="fondo_header">
                            <th>Nº</th>
                            <th>Id Usuario</th>
                            <th>Categoria</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>País</th>
                            <th>Departamento</th>
                            <th>Profesión</th>
                            <th>Institución Educativa</th>
                            <th>Email</th>
                            <th>DNI</th>
                            <th>Celular</th>
                            <th>Mes</th>
                            <th># Potenciales</th>
                            <th>Urgencia</th>
                            <th># Concretados</th>
                            {/* <th>PDF_URL</th>
                            <th>Precio de Contrato</th>
                            <th>Pago 1era cuota</th>
                            <th>Pago 2da cuota</th>
                            <th>Pago 3ra cuota</th>
                            <th>Pago 4ta cuota</th>
                            <th>Pago Restante</th>
                            <th>Servicio</th>
                            <th>Tema</th>
                            <th>Urgencia</th>
                            <th>Asesor de Ventas</th>
                            <th>Editar</th>
                            <th>Concretado</th>
                            <th>Fecha de Entrega</th>
                            <th></th>
                            <th></th> */}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>

                            </td>
                        </tr>

                    </tbody>
                </table>
                {/* <ReactPaginate
                    activePage={currentPage}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={itemsCount}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                /> */}
            </div>
        </div>
    );
}