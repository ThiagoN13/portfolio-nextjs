

import './globals.css';

import Link from 'next/link';
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
        <div id='fundo' style={{ backgroundImage: `url(/img/fundotest.png)` }}>

          <header>
            <NavBar></NavBar>
          </header>


          <div className={'textos'}>
           

            <h1> <strong>Thiago Nogueira
            </strong>
            </h1>
            <h3>Software Engineer</h3>

          </div>


        <section id='sobre'>        
          <Sobre />
        </section>
        </div>
        
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
