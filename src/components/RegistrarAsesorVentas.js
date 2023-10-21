import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/RegistrarAV.css'
import '../styles/General.css'


export default function RegistrarAsesor() {

    const location = useLocation();
    const [departamentos, setDepartamentos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [formData, setFormData] = useState({
        nombre: "",
        apePat: "",
        apeMat: "",
        dni: "",
        email: "",
        celular: "",
        pais: "",
        departamento: "",
        pwd_hash: "",
        confirma_pwd_hash: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Verificar si el campo es nombre, apellido paterno o apellido materno
        if (name === "nombre" || name === "apePat" || name === "apeMat") {
            // Si es uno de estos campos y contiene números, mostrar una alerta
            if (/\d/.test(value)) {
                alert("El campo no debe contener números");
                return;
            }
        }

        if (name === "dni") {
            // Si es el campo DNI y contiene algo que no sea número, mostrar una alerta
            if (value !== "" && (!/^\d+$/.test(value))) {
                alert("El campo DNI debe tener exactamente 8 dígitos numéricos");
                return;
            }
        }

        // Actualizar el estado solo si no contiene números
        setFormData({ ...formData, [name]: value });
    };

    const handleRegistrationSuccess = () => {
        // Limpiar los campos del formulario después del registro exitoso
        setFormData({
            nombre: "",
            apePat: "",
            apeMat: "",
            dni: "",
            email: "",
            celular: "",
            pais: "",
            departamento: "",
            pwd_hash: "",
            confirma_pwd_hash: ""
        });
    };

    const [formErrors, setFormErrors] = useState({
        nombre: "",
        apePat: "",
        apeMat: "",
        dni: "",
        celular: "",
        email: "",
        pais: "",
        departamento: "",
        pwd_hash: "",
        confirma_pwd_hash: ""
    });

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        for (const [key, value] of Object.entries(formData)) {
            if (!value) {
                errors[key] = "Campo obligatorio";
                isValid = false;
            }
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        console.log('hola soy el formData', formData);

        try {
            event.preventDefault();

            if (!validateForm()) {
                return;
            }

            if (
                formData.nombre &&
                formData.apePat &&
                formData.apeMat &&
                formData.dni &&
                formData.celular &&
                formData.pais &&
                formData.departamento
            ) {
                // Verificar si formData.dni contiene solo dígitos y tiene la longitud adecuada
                const validDniRegex = /^[0-9]+$/; // Expresión regular que verifica que solo contiene dígitos

                if (!validDniRegex.test(formData.dni)) {
                    // Si no contiene solo dígitos, muestra una alerta
                    alert('El campo DNI debe contener solo dígitos.');
                    return; // Detener el avance si no contiene solo dígitos
                }

                let validLength = false;

                // Verificar la longitud del DNI o INE según el país seleccionado
                switch (formData.pais) {
                    case 'México':
                        validLength = formData.dni.length === 18;
                        break;
                    case 'Perú':
                        validLength = formData.dni.length === 8 || formData.dni.length === 9;
                        break;
                    case 'Bolivia':
                        validLength = formData.dni.length === 11;
                        break;
                    case 'Colombia':
                        validLength = formData.dni.length === 10;
                        break;
                    case 'Costa Rica':
                        validLength = formData.dni.length === 9;
                        break;
                    case 'Cuba':
                        validLength = formData.dni.length === 11;
                        break;
                    case 'Ecuador':
                        validLength = formData.dni.length === 10;
                        break;
                    case 'Venezuela':
                        validLength = formData.dni.length === 8;
                        break;
                    default:
                        validLength = true; // No se aplica verificación de longitud para otros países
                        break;
                }

                if (!validLength) {
                    alert('La longitud del documento de identificación no es la adecuada para el país seleccionado.');
                    return; // Detener el avance si la longitud no es la adecuada
                }

                // Al menos uno de los campos obligatorios está lleno, DNI es válido y tiene la longitud adecuada
                console.log(formData);
            } else {
                // Mostrar una alerta en JavaScript si todos los campos están vacíos
                alert('Completa todos los campos antes de avanzar.');
            }

            if (!formData.pwd_hash || !formData.confirma_pwd_hash) {
                console.error("Por favor, completa ambos campos de contraseña");
                window.alert("Por favor, completa ambos campos de contraseña");
                return;
            }

            if (formData.pwd_hash !== formData.confirma_pwd_hash) {
                console.error("Las contraseñas no coinciden");
                window.alert("Las contraseñas no coinciden");
                return;
            }

            const response = await axios.post("http://localhost:5000/asesor_ventas", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            if (response.status === 200) {
                console.log("La respuesta es 200");
                handleRegistrationSuccess();
            }
        } catch (error) {
            console.error(error);
            // Manejo de errores
        }
    };

    useEffect(() => {

        // Hacer una solicitud para obtener datos de los departamentos cuando se cambie el país seleccionado
        if (formData.pais) {
            // Aquí deberías realizar una solicitud a la API adecuada para obtener los departamentos del país seleccionado
            // y luego actualizar el estado "departments" con la respuesta del servidor.
            // Esto dependerá de cómo esté estructurada tu base de datos y tu servidor.
            // Por ahora, simularemos los departamentos de forma estática.

            // Simulación de los departamentos
            const departmentsForCountry = getDepartmentsForCountry(formData.pais);
            setDepartamentos(departmentsForCountry);
        } else {
            setDepartamentos([]); // Limpiar los departamentos si no hay un país seleccionado.
        }
    }, [formData.pais]);


    const getDepartmentsForCountry = (country) => {
        switch (country) {
            case 'Perú':
                return ['Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'];
            case 'Bolivia':
                return ['La Paz', 'Santa Cruz', 'Cochabamba', 'Potosí', 'Oruro', 'Tarija', 'Chuquisaca', 'Beni', 'Pando'];
            case 'Colombia':
                return ['Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bogotá D.C.', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'];
            case 'Costa Rica':
                return ['San José', 'Alajuela', 'Heredia', 'Cartago', 'Guanacaste', 'Puntarenas', 'Limón'];
            case 'Cuba':
                return ['La Habana', 'Pinar del Río', 'Artemisa', 'Mayabeque', 'Isla de la Juventud', 'Matanzas', 'Cienfuegos', 'Villa Clara', 'Sancti Spíritus', 'Ciego de Ávila', 'Camagüey', 'Las Tunas', 'Granma', 'Holguín', 'Santiago de Cuba', 'Guantánamo'];
            case 'Ecuador':
                return ['Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro', 'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí', 'Morona Santiago', 'Napo', 'Orellana', 'Pastaza', 'Pichincha', 'Santa Elena', 'Santo Domingo de los Tsáchilas', 'Sucumbíos', 'Tungurahua', 'Zamora-Chinchipe'];
            case 'Venezuela':
                return ['Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'];
            case 'México':
                return ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'];
            default:
                return [];
        }
    };



    return (
        <section className="resiasesor">
            <div className="franja_verd">
                <h1>Registre un Asesor de Ventas</h1>
            </div>
            <div className="regisasesor_container_a">
                <div className="registro_asesor_container">
                    <div className="regisasesor_container" >
                        <form className="form_registro_asesor"
                            onSubmit={handleSubmit}
                        >
                            <input className="input_registro_asesor"
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                onChange={handleInputChange}
                                value={formData.nombre}
                            />
                            {formErrors.nombre && <span className="error-message">{formErrors.nombre}</span>}
                            <input className="input_registro_asesor"
                                type="text"
                                name="apePat"
                                placeholder="Apellido Paterno"
                                onChange={handleInputChange}
                                value={formData.apePat}
                            />
                            {formErrors.apePat && <span className="error-message">{formErrors.apePat}</span>}
                            <input className="input_registro_asesor"
                                type="text"
                                name="apeMat"
                                placeholder="Apellido Materno"
                                onChange={handleInputChange}
                                value={formData.apeMat}
                            />
                            <select
                                className="form-control my-input input_registro_asesor"
                                name="pais"
                                value={formData.pais}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="" disabled>
                                    Seleccione un país
                                </option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="México">México</option>
                                <option value="Perú">Perú</option>
                                <option value="Venezuela">Venezuela</option>
                            </select>

                            <select
                                className="form-control my-input input_registro_asesor"
                                name="departamento"
                                value={formData.departamento}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="" disabled>
                                    Seleccione un departamento
                                </option>
                                {departamentos.map((departamento) => (
                                    <option key={departamento} value={departamento}>
                                        {departamento}
                                    </option>
                                ))}
                            </select>

                            {formErrors.apeMat && <span className="error-message">{formErrors.apeMat}</span>}
                            <input className="input_registro_asesor"
                                type="text"
                                name="dni"
                                placeholder="DNI"
                                onChange={handleInputChange}
                                value={formData.dni}
                            />
                            {formErrors.dni && <span className="error-message">{formErrors.dni}</span>}
                            <input className="input_registro_asesor"
                                type="text"
                                name="celular"
                                placeholder="Celular"
                                onChange={handleInputChange}
                                value={formData.celular}
                            />
                            {formErrors.celular && <span className="error-message">{formErrors.celular}</span>}
                            <input className="input_registro_asesor"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleInputChange}
                                value={formData.email}
                            />
                            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                            <input className="input_registro_asesor"
                                type="password"
                                name="pwd_hash"
                                placeholder="Contraseña"
                                onChange={handleInputChange}
                                value={formData.pwd_hash}
                            />
                            {formErrors.pwd_hash && <span className="error-message">{formErrors.pwd_hash}</span>}
                            <input className="input_registro_asesor"
                                type="password"
                                name="confirma_pwd_hash"
                                placeholder="Confirmar Contraseña"
                                onChange={handleInputChange}
                                value={formData.confirma_pwd_hash}
                            />
                            {formErrors.confirma_pwd_hash && <span className="error-message">{formErrors.confirma_pwd_hash}</span>}


                            <button type="submit" className="button_backend">Registrar Asesor</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}