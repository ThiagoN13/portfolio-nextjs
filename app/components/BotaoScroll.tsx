'use client'

import {Link  as ScrollLink} from 'react-scroll'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import './BotaoScroll.css'

export default function BotaoScroll(){
    return(
        <div id='caseBotaoScroll'>
        <ScrollLink to="th" smooth={true} duration={1000}>
        <MdOutlineKeyboardDoubleArrowDown id='botaoScroll' />
        </ScrollLink>
        </div>
    )
}