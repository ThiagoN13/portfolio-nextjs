'use client'
import { url } from 'inspector';
import './navbar.css';
import { useState } from 'react';
import './querynavbar.css'
import Link from 'next/link';
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
                    <Link href='/'>
                        <img src='/img/logo.png' alt="" />

                        THIAGO N.
                    </Link>


                </li>

                



                <li className={'links'}>
                    <Link href='/'> Início</Link>
                </li>
                <li className={'links'}>

                    <Link href='#sobre'>
                        Sobre
                    </Link>

                </li>
                <li className={'links'}>

                    <Link href='#gitHub'>
                        GitHub
                    </Link>

                </li >
                <li className={'links'}>

                    <Link href='#contato'>
                        Contato
                    </Link>

                </li>
                <li className={'links'}>

                    <Link href='#blog'>
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

