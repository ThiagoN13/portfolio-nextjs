'use client'

import {Link  as ScrollLink} from 'react-scroll'
import { RiArrowUpDoubleFill } from "react-icons/ri";
import './BotaoInicio.css'

export default function BotaoInicio(){
    return(
        <div id='caseBotaoInicio'>
        <ScrollLink to='fundo' smooth={true} duration={1000}>
        <RiArrowUpDoubleFill id='botaoInicio'/>
        </ScrollLink>
        </div>
    )
}