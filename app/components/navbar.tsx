import { url } from 'inspector';
import './navbar.css';
import Link from 'next/link';

export default function Navbar(){
    return(
       
       <nav>
        <ul>
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
              
                <Link href="/sobre">
                       Sobre
                    </Link>
                    
            </li>
            <li className={'links'}>
              
                <Link href='/github'>
                    GitHub
                </Link>
                
            </li >
            <li className={'links'}>
              
                <Link href= '/contato'>
                    Contato
                </Link>
                
            </li>
            <li className={'links'}>
          
            <Link href='/blog'>
                Blog
            </Link>
            
            </li>
        </ul>


       </nav>

    
        
    
    )
}