import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarHeader = styled.header`
    height: 5rem;
    background-color: #1f1f1f;
`

const NavbarNav = styled.nav`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    
`

const NavbarHome = styled.div`
    width: 10rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HomeOption = styled(Link)`
    color: #fafafa;
    cursor: pointer;
`

const NavbarUlContainer = styled.div`
    height: 5rem;
    width: 15rem;

`

const NavbarUl = styled.ul`
    display: flex;
    gap: 3rem;
    width: 15rem;
    height: 5rem;
    justify-content: center;
    align-items: center;

`

const NavbarOptions = styled(Link)`
    color: white;
    cursor: pointer;
`


const Navbar = () => {
  return (
    <>
        <NavbarHeader>
            <NavbarNav>

                <NavbarHome>
                    <HomeOption to="/">Home</HomeOption>
                </NavbarHome>


                <NavbarUlContainer>
                    <NavbarUl>
                        <NavbarOptions to="/Todo">Todo</NavbarOptions>
                        <NavbarOptions to="/Pokemon">Pokemon</NavbarOptions>
                    </NavbarUl>
                </NavbarUlContainer>

            </NavbarNav>
        </NavbarHeader>
    
    </>
  )
}

export default Navbar