import Link from "next/link"
import './contato.css'
import './querycontato.css'




export default function Contato() {
    return (
        <>

            <div id ='fundoContato' style={{backgroundImage:"url(/img/fundogit.png)"}}>
                <div className='caixaTitulo'>
                    <h1>Contato</h1>
                    <div className='linhaTitulo'></div>
                </div>
                <p id='fraseContato'>Quer entrar em contato comigo? Sinta-se à vontade para me escrever a qualquer hora.</p>

                <div id='containerForm'>
                    <form>
                        <input type='text' placeholder='Nome' className="inputForm"></input>
                        <input type='email' placeholder="E-mail" className='inputForm'></input>
                        <textarea  style={{resize:'none'}} placeholder='Mensagem' id='inputMsg' className="inputForm"></textarea>
                        <button  id='inputButton'>Enviar </button>
                    </form>
                </div>
            </div>




        </>
    )
}