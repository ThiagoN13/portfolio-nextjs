import Link from "next/link"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import './github.css'

export default function GitHub() {
    return (
        <>
            <body>
                <header className='fundoNav'>
                    <Navbar />
                </header>
                <div className='caixaTitulo'>

                    <h1>GitHub</h1>
                    <div className={'linhaTitulo'}> </div>
                </div>
                <div id='container'>
                    <div className={'portfolioBox'}>
                        <Link className='linkBox' href='/'>
                            
                            <span className={'projetoName'}><p className='tituloProjeto'>api-boilerplate </p> </span>
                         
                           
                                <img className={'gitImg'} src="/img/icons8-github-150.png"></img>
                                 <img  className='gitGif'src="/img/output-onlinegiftools.gif" alt="" /> 
                             
                        </Link>
                        
                    </div>
                    <div className={'portfolioBox'}>
                        <Link className='linkBox' href='/'>
                            <span className={'projetoName'}><p className='tituloProjeto' >app-crudjs </p> </span>
                            
                                <img className={'gitImg'} src="/img/icons8-github-150.png"></img>
                                 <img  className='gitGif'src="/img/output-onlinegiftools.gif" alt="" /> 
                            
                        </Link>
                        
                    </div>
                    <div className={'portfolioBox'}>
                        <Link className='linkBox' href='/css'>
                            <span className={'projetoName'}><p className='tituloProjeto' >aps-sd </p></span>
                                <img className={'gitImg'} src="/img/icons8-github-150.png"></img>
                                 <img  className='gitGif'src="/img/output-onlinegiftools.gif" alt="" /> 
                        </Link>
                        
                    </div>
                    <div className={'portfolioBox'}>
                        <Link className='linkBox' href='/css'>
                            <span className={'projetoName'}><p className='tituloProjeto' >ArquivosC </p> </span>
                            
                                <img className={'gitImg'} src="/img/icons8-github-150.png"></img>
                                 <img  className='gitGif'src="/img/output-onlinegiftools.gif" alt="" /> 
                             
                        </Link>
                        
                    </div>
                    <div className={'portfolioBox'}>
                        <Link className='linkBox' href='/css'>
                            <span className={'projetoName'}><p className='tituloProjeto' >bookTip </p></span>
                                <img className={'gitImg'} src="/img/icons8-github-150.png"></img>
                                 <img  className='gitGif'src="/img/output-onlinegiftools.gif" alt="" /> 
                        </Link>
                        
                    </div>
                    <div className={'portfolioBox'}>
                        <Link className='linkBox' href='/css'>
                            <span className={'projetoName'}><p className='tituloProjeto' >Cfiles </p></span>
                                <img className={'gitImg'} src="/img/icons8-github-150.png"></img>
                                 <img  className='gitGif'src="/img/output-onlinegiftools.gif" alt="" /> 
                        </Link>
                        
                    </div>
                    <div className={'portfolioBox'}>
                        <Link className='linkBox' href='/css'>
                            <span className={'projetoName'}><p className='tituloProjeto' >cidades-estados-brasil-json </p></span>
                                <img className={'gitImg'} src="/img/icons8-github-150.png"></img>
                                 <img  className='gitGif'src="/img/output-onlinegiftools.gif" alt="" /> 
                        </Link>
                        
                    </div>
                    <div className={'portfolioBox'}>
                        <Link className='linkBox' href='/css'>
                            <span className={'projetoName'}><p className='tituloProjeto' >covid-statistics </p></span>
                                <img className={'gitImg'} src="/img/icons8-github-150.png"></img>
                                 <img  className='gitGif'src="/img/output-onlinegiftools.gif" alt="" /> 
                        </Link>
                        
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </body >
        </>

    )
}