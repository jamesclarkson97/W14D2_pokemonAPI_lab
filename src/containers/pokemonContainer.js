import React from 'react';
import PokemonSelector from '../components/pokemonSelector';
import PokemonDetail from '../components/pokemonDetails';

class PokemonContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemons: [],
            selectedPokemon: '',
            pokemonDetails: ''
        };

        this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    }

    componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        fetch(url)
        .then(res => res.json())
        .then(pokemons => this.setState({pokemons: pokemons.results}))
        .catch(err => console.log(err));
    }

    fetchPokemonDetail(name) {
        // if(!selectedPokemon) {
        //     return null;
        // }
        const url = 'https://pokeapi.co/api/v2/pokemon/' + name;
        fetch(url)
        .then(res => res.json())
        .then(pokemon => this.setState({pokemonDetails: pokemon}))
        .catch(err => console.log(err));
    }

    handlePokemonSelected(name) {
        this.setState({selectedPokemon: name});
        this.fetchPokemonDetail(name);
    }

    render() {
        const selectedPokemon = this.state.pokemons.find((pokemon) => {
            return pokemon.name === this.state.selectedPokemon;
        });
        return (
            <div>
                <h2>Pokemon Container</h2>
                <PokemonSelector pokemons={this.state.pokemons} handlePokemonSelected={this.handlePokemonSelected}/>
                <PokemonDetail pokemon={selectedPokemon} pokemonDetails={this.state.pokemonDetails}/>
            </div>
        )
    }
}

export default PokemonContainer;