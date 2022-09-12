import React from "react";
import "./style/usersPage.css";

const UsersCard = ({ name, id, email, phone, address, company }) => {
    return (
        <ul
            className={
                id % 2 === 0 ? "users__list-parameters" : "users__list-parameters2"
            }
        >
            <li className="parameter__id">{id}</li>
            <li className="parameter__large">{name}</li>
            <li className="parameter__xlarge">{email}</li>
            <li className="parameter__large">{phone}</li>
            <li className="parameter__large">{address.city}</li>
            <li className="parameter__large">{company.name}</li>
        </ul>
    );
};

export default UsersCard;
