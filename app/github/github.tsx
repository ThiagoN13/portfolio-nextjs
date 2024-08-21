'use client'

import Link from "next/link"
import { useState } from 'react'; 
import './github.css'
import ReactPaginate from  'react-paginate';

const projetos = [
    {name: "app-crudjs", href:'/'},
    {name: "aps-sd", href:'/'},
    {name:"ArquivosC", href:''},
    {name:"bookTip", href:''},
    {name:"Cfiles", href:''},
    {name:"cidades-estados-brasil-json", href:''},
    {name:"covid-statistics",href:''},
    {name:"crud-php-laravel", href:''},
    {name:"crudJS", href:''},
    {name:"CrudPHP",href:''},
    {name:"e-commerce",href:''},
    {name:"framework-frontend-semantic-ui", href:''},
    {name:"Game-Of-Python",href:''},
    {name:"learning-angularjs",href:''},
    {name:"magic-cube", href:''},
    {name:"portfolio", href:''},
    {name:"portfolio-nextJS",href:''},
    {name:"Projeto-Integrador-PHP",href:''},
    {name:"projeto-reino-floral",href:''},
    {name:"projetoIntegradorWEB",href:''},
    {name:"react_cart",href:''},
    {name:"react_insta",href:''},
    {name:"react_relogio",href:''},
    {name:"Rede-Social-PHP", href:''},
    {name:"sgce",href:''},
    {name:"snake-game",href:''},
    {name:"tBook", href:''},
    {name:'treeview',href:''},
    {name:'video-stream-sample',href:''},

]



export default function GitHub() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    }
    const offset = currentPage * itemsPerPage;
    const currentProjects = projetos.slice(offset, offset + itemsPerPage);

    return (
 

        <div id='fundoGit'style={{backgroundImage:"url(/img/fundogit.png)"}}>
            <div className='caixaTitulo'>
                <h1>GitHub</h1>

                <div className={'linhaTitulo'}> </div>
            </div>
            
            <div id='container'>
                {currentProjects.map((projetos, index) => (
                    <div className={'portfolioBox'} key={index}>
                        <Link className={'linkBox'} href={projetos.href} target="_blank">
                            <span className="projetoName">
                                <p className='tituloProjeto'> {projetos.name}</p>
                            </span>
                            <img className={'gitImg'} src="/img/icons8-github-150.png"></img>
                            <img className='gitGif' src="/img/output-onlinegiftools.gif" alt="" />
                        </Link>
                    </div>
                ))}
            </div>
            <ReactPaginate
                previousLabel={<IoArrowUndo />}
                nextLabel={<IoArrowRedo />}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(projetos.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />

        </div>





    )


}