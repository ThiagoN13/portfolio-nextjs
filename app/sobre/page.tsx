import Navbar from '../components/navbar'
import './sobre.css';
import Link from 'next/link';
import Footer from '../components/footer';


export default function Sobre() {
    return (
        <>



            <body id='fundo'>

                <header className='fundoNav'>
                    <Navbar></Navbar>
                </header>
                <div className={'caixaTitulo'}>
                    <h1>Sobre mim</h1>
                    <div className={'linhaTitulo'}></div>
                </div>
                <h2>
                    Olá, sou <strong>Thiago Nogueira.</strong>
                </h2>
                <p> Sou formado em Ciência da Computação com excelentes habilidades em programação.
                    Trabalho como freelancer localmente na minha cidade natal Salvador - Bahia.
                </p>
                <p>Amo meu trabalho e gosto de cada novo projeto conforme o obtenho.
                    Sinta-se à vontade para dar uma olhada em meu portfólio e não hesite em entrar em contato comigo se achar que posso ajudá-lo.
                </p>
                <p>
                    <strong>Obrigado por aparecer aqui!</strong>
                </p>
                <div className={'container'}>
                    <div className={'linguagens'}>Javascript</div>
                    <div className={'linguagens'}>PHP</div>
                    <div className={'linguagens'}>UI/UX</div>
                    <div className={'linguagens'}>C#</div>
                    <div className={'linguagens'}>VueJS</div>
                    <div className={'linguagens'}>Angular/AngularJS</div>
                </div>
                <div className={'container'}>
                    <div className={'linguagens'}>MySQL</div>
                    <div className={'linguagens'}>CockroachDB</div>
                    <div className={'linguagens'}>PL/SQL</div>
                    <div className={'linguagens'}>PostgreSQl</div>
                    <div className={'linguagens'}>Redis</div>
                    <div className={'linguagens'}>MongoDB</div>
                </div>

                <div className={'caixaTitulo'}>
                    <h1 id='empresa'>Empresas</h1>
                    <Link href='https://tag.mx/' target="_blank" locale={false}>
                        <img className={'logoEmpresa'} src="/img/tag.png" alt="TAG" />
                    </Link>
                    <Link href='https://www.montreal.com.br/' target="_blank" locale={false}>
                        <img className={'logoEmpresa'} src='/img/montreal.png' alt='MONTREAL'></img>
                    </Link>
                    <Link href='https://cubos.io/' target="_blank" locale={false}>
                        <img className={'logoEmpresa'} src="/img/cubos.png" alt="CUBOS" />
                    </Link>
                    <Link href='https://aarin.com.br/' target="_blank" locale={false}>
                        <img className={'logoEmpresa'} src="/img/aarin.png" alt="AARIN" />
                    </Link>
                    <div className={'linhaTitulo'} ></div>
                </div>
                <footer>
                    <Footer></Footer>
                </footer>

            </body>

        </>
    )

}