import { useEffect, useState } from 'react';
import './PokemonDetails.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import usePokemon from '../../hooks/usePokemon';
import Pokemon from '../Pokemon/Pokemon';

function PokemonDetails({pokemonName}){


const [pokemon,pokemonListState]=usePokemon(pokemonName);



    return(
        <>
        <h1 className='pokedex-redirect'>
        <Link to='/'>
        Pokedex
        </Link>
        </h1>
        {pokemon&&
        <div className='pokemon-details-wrapper'>
            <div className='pokemon-detail-name'>
                {pokemon.name}
            </div>
            <div className='pokemon-image'>
                <img src={pokemon.image} alt="" />
            </div>
            <div className='pokemon-attr'>
               <div >
               height:{pokemon.height} 
               </div>
               <div>
               weight:{pokemon.weight}
               </div>
            </div>
            <div className='pokemon-types'>
                <h1>Type:</h1>{pokemon.types.map(t=><span className='type' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>}
      <div className='similar-pokemons'>
      <h2>Similar Pokemon</h2>
      <div className='pokemon-similar-boxes'>
            {pokemonListState.pokemonList.length>0&&
           pokemonListState.pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)
            }
           </div>
      </div>
        </>
    )
}
export default PokemonDetails;