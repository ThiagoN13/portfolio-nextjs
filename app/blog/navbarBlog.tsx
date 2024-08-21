import { ImMenu3 } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import './navbarBlog.css'
import Link from "next/link";


export default function NavbarBlog(){
return(
    <>
    <nav id='navBlog'>
            <ul id='ulBlog'>
              
                <li className={'marca'}>
                    <Link href="/blog" id="textMarca">
                        <img id='logo' src='/img/logo.png' alt="" />
                        THIAGO N.
                    </Link>
                </li>
                <input type='search' placeholder= 'O que você procura?' id='procura'></input>
                <li className="secaoBlog"> Notícias <IoMdArrowDropdown /> </li>
                <li className="secaoBlog"> Últimas Notícias</li>
                <li className="secaoBlog"> Mais Lidas </li>
                <li className="secaoBlog"> Tutoriais </li>
                </ul>
                
                </nav>
    </>
)
    
}