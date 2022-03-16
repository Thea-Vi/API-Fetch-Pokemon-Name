import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Main = () => {

    const [pokemons, setPokemon] = useState([])

    useEffect(() => {
      
    }, [])

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((data) => {

                return data.json()

            })
            .then((data) => {
                console.log(data);
                setPokemon(data.results);
                // remember to look at the structure of the response

            })
            .catch((error) => {
                console.log(error);

            })


    }
// AXIOS
// remeber to use .data
    const axiosPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((res) => {
            setPokemon(res.data.results)
          
        })

        .catch(err => console.log(err))
      
    }

    return (
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <button onClick={axiosPokemon}>Axios Pokemon</button>
            <ul>
                {
                    // JSON.stringify(pokemons)
                    // use this to see if the results come in a diff structure
                    // network
                    pokemons.map((pokemon, idx) => {
                        return (
                            <li key={idx}>{pokemon.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Main