'use client'
import { url } from 'inspector';
import './navbar.css';
import { useState } from 'react';
import './querynavbar.css'
import { Link as ScrollLink } from 'react-scroll';
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
                    <ScrollLink to='fundo' smooth={true} duration={1000}> Início</ScrollLink>
                </li>
                <li className={'links'}>

                    <ScrollLink to='caixaTituloSobre' smooth={true} duration={1000}>
                        Sobre
                    </ScrollLink>

                </li>
                <li className={'links'}>

<<<<<<< HEAD
                    <ScrollLink to='container' smooth={true} duration={1000}>
=======
                    <ScrollLink to='linha' smooth={true} duration={1000}>
>>>>>>> ee6535e8ef94df94c7052a168b307e96ea5f6c0a
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

