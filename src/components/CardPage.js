import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./style/cardPage.css";

function CardPage() {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});

    const initialurl = "https://rickandmortyapi.com/api/character";

    const fetchCharacters = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results);
                setInfo(data.info);
            })
            .catch((error) => console.log(error));
    };

    const onPrevious = () => {
        fetchCharacters(info.prev);
    };

    const onNext = () => {
        fetchCharacters(info.next);
    };

    useEffect(() => {
        fetchCharacters(initialurl);
    }, []);
    return (
        <section className="dashboard">
            <div className="enc">
                <div className="tarjetas">
                    {characters.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p>Id: {item.id}</p>
                                <p>Species: {item.species}</p>
                                <p>Origin: {item.origin.name}</p>
                                <p>Status: {item.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <Pagination
                        prev={info.prev}
                        next={info.next}
                        onPrevious={onPrevious}
                        onNext={onNext}
                    />
                </div>
            </div>
        </section>
    );
}

export default CardPage;
