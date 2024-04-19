import Link from "next/link"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import './contato.css'


export default function Contato() {
    return (
        <>
            <body>

                <header className="fundoNav">
                    <Navbar />
                </header>
                <div className='caixaTitulo'>
                <h1>Contato</h1>
                <div className='linhaTitulo'></div>
                </div>
                <p>Quer entrar em contato comigo? Sinta-se à vontade para me escrever a qualquer hora.</p>
                
                <div id='containerForm'>
                    <form>
                        <input type='text' placeholder='Nome'className="inputForm"></input>
                        <input type='email' placeholder="E-mail" className='inputForm'></input>
                        <input type='text' placeholder='Mensagem' id='inputMsg' className="inputForm"></input>
                        <input type='button' value='Enviar Mensagem' id='inputButton'></input>
                    </form>
                </div>



                <footer>
                    <Footer></Footer>
                </footer>
            </body>

        </>
    )
}