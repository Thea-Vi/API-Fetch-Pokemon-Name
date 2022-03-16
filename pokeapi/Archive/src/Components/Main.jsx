import React, { useState } from 'react'

const Main = () => {

    const [pokemons, setPokemon] = useState([])


    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((data) => {

                return data.json()

            })
            .then((data) => {
                console.log(data);
                setPokemon(data.results);

            })
            .catch((error) => {
                console.log(error);

            })


    }

    return (
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>
                {
                    JSON.stringify(pokemons)
                    // pokemons.map((pokemon, idx) => {
                    //     return (
                    //         <li key={idx}>{pokemon.name}</li>
                    //     )
                    // })
                }
            </ul>
        </div>
    )
}

export default Main