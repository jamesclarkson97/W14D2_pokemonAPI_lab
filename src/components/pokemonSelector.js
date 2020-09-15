import React from 'react';

const PokemonSelector = (props) => {
    const options = props.pokemons.map((pokemon) => {
        return (
            <option key={pokemon.id} value={pokemon.id}>{pokemon.name}</option>
        );
    });


    function handleChange(event) {
        props.handlePokemonSelected(event.target.value);
    }


    return (
        <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">Select a Pokemon!</option>
            {options}
        </select>
    )
}

export default PokemonSelector;