import React from 'react'
import styled from 'styled-components'

const PokemonCardMain = styled.div`
    height: 32rem;
    width: 35rem;
    background-color: #1f1f1f;
    border-radius: 1rem;
`

const PokemonImageContainer = styled.div`
    width: 35rem;
    height: 25rem;

    & img{
        width: 35rem;
        height: 25rem;
    }
`

const PokemonNameContainer = styled.div`
    width: 35rem;
    height: 5rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PokemonName = styled.h2`
    color: #fafafa;
`


const PokemonCard = ({pokemon}) => {
    const {name, sprites} = pokemon
  return (
    <>

        <PokemonCardMain>
            <PokemonImageContainer>
                <img src={sprites.front_default} alt={name}/>
            </PokemonImageContainer>

            <PokemonNameContainer>
                <PokemonName>{name}</PokemonName>
            </PokemonNameContainer>
        </PokemonCardMain>    
    
    </>
  )
}

export default PokemonCard