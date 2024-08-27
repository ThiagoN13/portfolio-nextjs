'use client'
'use client'
import { url } from 'inspector';
import './navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { ImMenu3 } from "react-icons/im";
import { get } from 'http';





export default function Navbar() {
    const [linksDisplay, setLinksDisplay] = useState('none');




    return (

        <nav>
            <ul>
                <div id='menu'>
                    <ImMenu3 id='iconMenu' onClick={clickMenu} />
                </div>
                <li className={'marca'}>
                    <ScrollLink to='fundo' smooth={true} duration={500}>
                        <img id='logo' src='/img/logo.png' alt="" />

                        THIAGO N.
                    </ScrollLink>


                </li>

                <li className={'links'}>
                    <ScrollLink to='fundo' smooth={true} duration={1000}>Início</ScrollLink>
                </li>
                <li className={'links'}>

                    <ScrollLink to='titulo' smooth={true} duration={1000}>
                        Sobre
                    </ScrollLink>

                </li>
                <li className={'links'}>

                    <ScrollLink to='container' smooth={true} duration={1000}>
                        GitHub
                    </ScrollLink>

                </li >
                <li className={'links'}>

                    <ScrollLink to='fraseContato' smooth={true} duration={1000}>
                        Contato
                    </ScrollLink>

                </li>
                <li className={'links'}>

                    <Link href='/blog' id='linkBlog'>
                        Blog
                    </Link>

                </li>
            </ul>


        </nav>



    )

    function clickMenu() {
        const links = document.querySelectorAll('.links') as NodeListOf<HTMLElement>
        const newDisplay = linksDisplay === 'none' ? 'block' : 'none'
        links.forEach(link => {
            link.style.display = newDisplay;
        })
        setLinksDisplay(newDisplay)
    }
}

