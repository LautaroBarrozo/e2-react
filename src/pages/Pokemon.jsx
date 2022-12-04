import axios from 'axios'
import React, { useState } from 'react'
import PokemonCard from '../components/styles/PokemonCard'
import styled from 'styled-components'

const PokemonFormContainer = styled.div`
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
const PokemonForm = styled.form`
    height: 5rem;
    width: 35rem;
    background-color: #1f1f1f;
    gap: 1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PokemonInput = styled.input`
    height: 1.5rem;
    width: 15rem;
    padding-left: 1rem;
    border-radius: 0.5rem;
`

const FormButton = styled.button`
    height: 1.5rem;
    width: 5rem;
    cursor: pointer;
    border-radius: 0.5rem;
`

const PokemonCardContainer = styled.div`
    height: 32rem;
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Pokemon = () => {
    const [pokemon, setPokemon] = useState()
    const [error, setError] = useState()
  
    const pokeInfoSubmit = async(e)=>{
      e.preventDefault()
      if(e.target.poke.value === ""){
        return alert("Ingresa un valor")
      }
      try{
      
        const pokemonInput = e.target.poke.value.toLowerCase().trim()
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
        setError()
        setPokemon(data)
      }
      catch(err){
        setPokemon()
        setError(err)
        
      }
    } 
  return (
    <>
        <PokemonFormContainer>
            <PokemonForm onSubmit={pokeInfoSubmit}>
                <PokemonInput placeholder='Ingrese el id de un pokemon' type="number" name='poke'></PokemonInput>
                <FormButton>Buscar</FormButton>
            </PokemonForm>
        </PokemonFormContainer>

        <PokemonCardContainer>        
                {pokemon && <PokemonCard pokemon={pokemon}/>}
        </PokemonCardContainer>
    </>
  )
}

export default Pokemon