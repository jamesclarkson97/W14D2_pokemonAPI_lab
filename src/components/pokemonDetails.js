import React from 'react';

const PokemonDetail = (props) => {
    if(!props.pokemon) {
        return <p>Select a Pokemon from the dropdown</p>
    }

    return (
        <>
        <h2>{props.pokemon.name}</h2>
        <h3>{props.pokemonDetails.weight}</h3>
        <h3>{props.pokemonDetails.height}</h3>
        </>
    );
}

export default PokemonDetail;