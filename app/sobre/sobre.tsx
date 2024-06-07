import './sobre.css';
import Link from 'next/link';


export default function Sobre() {
    return (
        <>




            <div id='fundoSobre'>
                <div className={'caixaTitulo'}>
                    <h1>Prazer, Thiago Nogueira </h1>
                    <div className={'linhaTitulo'}></div>
                </div>

                <div id='caseSobre'>

                    <div id='caseImg'>
                        <img id='th' src='./img/Th edit.png'></img>
                    </div>
                    <div id='tituloEmpresa'>
                        <h2>
                            <strong id='empresa'>Empresas</strong>
                        </h2>
                    </div>
                    <div id='caseEmpresas'>
                        <Link id='caseClick ' href='https://tag.mx/' target="_blank" locale={false}>
                            <img className={'logoEmpresa'} src="/img/tag.png" alt="TAG" />
                        </Link>

                        <Link href='https://www.montreal.com.br/' target="_blank" locale={false}>
                            <img className={'logoEmpresa'} src='/img/montreal.png' alt='MONTREAL'></img>
                        </Link>
                        <br></br>
                        <Link href='https://cubos.io/' target="_blank" locale={false}>
                            <img className={'logoEmpresa'} src="/img/cubos.png" alt="CUBOS" />
                        </Link>
                        <Link href='https://aarin.com.br/' target="_blank" locale={false}>
                            <img className={'logoEmpresa'} src="/img/aarin.png" alt="AARIN" />
                        </Link>



                        <Link href='#gitHub'><button id='botao'>
                            <h3 id='botaoName'>Projetos</h3>
                            </button></Link>


                    </div>



                </div>

            </div>

        </>
    )

}