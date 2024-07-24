
import './globals.css';
import './homequery.css';
import Link from 'next'
import {useEffect} from 'react';
import { GiUfo } from "react-icons/gi";
import { BsFillRocketFill } from "react-icons/bs";
import BotaoScroll from './components/BotaoScroll';
import NavBar from './components/navbar';
import Sobre from './sobre/sobre';
import GitHub from './github/github';
import Contato from './contato/contato';
import Footer from './components/footer';
import next from 'next';





export default function Home() {
  

  return (
    
    <body  >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div id='fundo' style={{backgroundImage:"url(/img/fundoteste2.gif)"}}>
          <header>
            <NavBar></NavBar>
          </header>


          <div className={'textos'}>
           

            <h1> <strong>Thiago Nogueira
            </strong>
            </h1>
            <h3>Software Engineer</h3>
           <BotaoScroll/>

           
          </div>
          
          </div>

         
       

        <section id='sobre' style={{backgroundImage:"url(/img/fundoteste2.gif)"}}>
        
          <Sobre />
        </section>
        <section id='gitHub'>
          <GitHub /> 
        </section>
        <section id='contato' >
          <Contato />
        </section>
        

        <footer>
          <Footer />
        </footer>

      </main>

    </body>

  );
}
