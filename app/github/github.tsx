'use client'

import Link from "next/link"
import { useState } from 'react'; 
import './github.css'
import ReactPaginate from  'react-paginate';
import { IoArrowUndo } from "react-icons/io5";
import { IoArrowRedo } from "react-icons/io5";
import projetos from "./projetos";


export default function GitHub() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    }
    const offset = currentPage * itemsPerPage;
    const currentProjects = projetos.slice(offset, offset + itemsPerPage);

    return (
 

        <div id='fundoGit'>
            <div className='caixaTitulo'>
                <h1>GitHub</h1>
                <div className={'caixaLinha'}>
                     <div className={'linhaTitulo'} id='tituloSobre'></div>
                     </div>
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