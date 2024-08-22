import './sobre.css';
import Link from 'next/link';


export default function Sobre() {
    return (
        <>




            <div id='fundoSobre'>
                <div className={'caixaTitulo'} id='caixaTituloSobre'>
                    <h1 id='titulo'>Prazer, Thiago Nogueira </h1>
                    <div className={'caixaLinha'}>
                     <div className={'linhaTitulo'} id='tituloSobre'></div>
                     </div>
                </div> 
                <div id='caseTextSobre'>
                    <h2 id='sobreMim'> Sobre Mim</h2>

                    <p id='textSobre'><strong>Olá, sou Thiago Nogueira.<br/></strong>
                        Formado em Ciência da Computação com excelentes habilidades em programação.<br/>
                        Trabalho como freelancer localmente na minha cidade natal Salvador - Bahia.<br/>
                        Amo meu trabalho  e gosto de cada novo projeto conforme o obtenho. <br/>
                        Sinta-se à vontade para dar uma olhada em meu portfólio  <br/> e não hesite em entrar em contato comigo se achar que posso ajudá-lo.
                        <br/><strong>Obrigado por aparecer aqui! </strong></p>
                        
                </div>
                <div id='caseEmpresas'>

                    <Link id='caseClick ' href='https://tag.mx/' target="_blank" locale={false}>
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

                </div>


                




            </div>



        </>
    )

}