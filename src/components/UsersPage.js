import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersCard from "./UsersCard";
import "./style/usersPage.css";

const UsersPage = () => {
    const URL_USERS = "https://jsonplaceholder.typicode.com/users";
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        getUsuarios();
    }, []);

    const getUsuarios = async () => {
        const users = await axios.get(URL_USERS);
        setUsuarios(users.data);
    };

    return (
        <div className="users">
            <div className="users__container">
                <ul className="users__list-titles">
                    <li className="parameter__id">ID</li>
                    <li className="parameter__large">Nombre</li>
                    <li className="parameter__xlarge">Email</li>
                    <li className="parameter__large">Teléfono</li>
                    <li className="parameter__large">Ciudad</li>
                    <li className="parameter__large">Empresa</li>
                </ul>
                <div className="dataUsers">
                    {!usuarios
                        ? "Loading..."
                        : usuarios.map((usuario, index) => {
                            // console.log(usuario);
                            return (
                                <UsersCard
                                    key={index}
                                    name={usuario.name}
                                    id={usuario.id}
                                    email={usuario.email}
                                    phone={usuario.phone}
                                    address={usuario.address}
                                    company={usuario.company}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
