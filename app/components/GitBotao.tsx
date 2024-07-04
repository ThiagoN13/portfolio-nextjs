'use client'

import {Link as ScrollLink } from 'react-scroll';

export default function GitBotao (){
    return(
        <ScrollLink to='gitHub' smooth={true} duration={1000}>
            <button id='botao'>
        <h3 id='botaoName'>Projetos</h3>
        </button></ScrollLink>
    )


}