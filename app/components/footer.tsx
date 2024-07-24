import Link
from "next/link"
import './footer.css'
import './queryfooter.css'
import Navbar from "./navbar";
import {FaGitlab, FaLinkedin,FaGithub} from "react-icons/fa"
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiSolidHeartCircle } from "react-icons/bi";





export default function Footer(){
    return(
        <>
        <div id='caixa' style={{backgroundImage:"url(/img/testandofundo.gif)"}}>
            <Link id='fraseFooter' href='/'>
               Feito com amor  <BiSolidHeartCircle />  Thiago Nogueira 
            </Link>
            <div id='caixaIcon'>
                <Link href='https://gitlab.com/thiago.nogueira187' className={'iconGitLab'} target="_blank" locale={false}>
                <FaGitlab />
                </Link>
                <Link href='https://www.linkedin.com/in/thiago-nogueira-152405163/' className={'iconLinkedin'} target="_blank" locale={false}>
                <FaLinkedin />
                </Link>
                <Link href='https://github.com/ThiagoN13' className={'iconGitHub'}  target="_blank" locale={false}>
                <FaGithub />
                </Link>
                <Link href='thiago.nogueira187@gmail.com' className={'iconMail'} target="_blank" locale={false}>
                <HiOutlineMailOpen />
                </Link>
                   
            </div>
            <p id='copy'>©2020 Thiago N.</p>
            <p id='developed'>Developed by  <Link href='https://github.com/ThiagoN13'  target="_blank" locale={false}><strong id='tnStrong'> Thiago Nogueira </strong></Link> </p>

        </div>
        </>
    )
}