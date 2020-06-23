import React from 'react'
import logo from '../../assets/Spotify_Green.svg'
import { Conteiner, Icon, Logo } from './style'

export default function LeftBar() {
    return (
       <Conteiner>
                <Logo src={logo}  />
            <Icon>Iníco</Icon>
            <Icon>Busca</Icon>
            <Icon>Sua Biblioteca</Icon>
       </Conteiner>
    );
}