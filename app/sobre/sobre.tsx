import './sobre.css';
import './querysobre.css'
import Link from 'next/link';
import GitBotao from '../components/GitBotao';

export default function Sobre() {
    return (
        <>




            <div id='fundoSobre'>
                <div className={'caixaTitulo'}>
                    <h1 id='titulo'>Prazer, Thiago Nogueira </h1>
                    <div className={'linhaTitulo'}></div>
                </div>

                <div id='caseSobre'>

                    <div id='caseImg'>
                        <img id='threspo2' src='./img/threspo2.gif'></img>
                        <img id='th' src='./img/Th edit2.gif'></img>
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

                        <GitBotao />




                    </div>



                </div>

            </div>

        </>
    )

}