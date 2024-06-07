import './globals.css';
import './homequery.css';
import '../../projeto-principal/public/img/estrelas.jpg';
import Link from 'next/link';
import { GiUfo } from "react-icons/gi";
import { BsFillRocketFill } from "react-icons/bs";
import NavBar from './components/navbar';
import Sobre from './sobre/sobre';
import GitHub from './github/github';
import Contato from './contato/contato';
import Blog from './blog/blog';
import Footer from './components/footer';





export default function Home() {
  
  return (
    
    <body  >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div id='fundo'>
          <header>
            <NavBar></NavBar>
          </header>

          <div className={'estrelas'} style={{backgroundImage:"url(/img/transferir.gif)"}}>

          <div className={'textos'}>
           

            <h1> <strong>Thiago Nogueira
            </strong>
            </h1>

            <h3>Software Engineer</h3>

          </div>
          </div>

          <div id='caixaFoguete'>
            <BsFillRocketFill id='foguete' />
          </div>

        </div>

        <div id='sobre'>
        <div id='caseOvni'>
          <GiUfo id='ovni' />
          </div>
          <Sobre />
        </div>
        <div id='gitHub'>
          <GitHub /> 
        </div>
        <div id='contato'>
          <Contato />
        </div>
        <footer>
          <Footer />
        </footer>

      </main>

    </body>

  );
}
