import './globals.css';
import '../../projeto-principal/public/img/estrelas.jpg';
import NavBar from './components/navbar'; 


export default function Home() {

  return (
    <body style={{backgroundImage:`url(/img/estrelas.jpg)`}} >
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header >
      <NavBar/>
      </header>
     

    <div className = {'textos'}>
    <h1> <strong>Thiago Nogueira
      </strong> 
      </h1>
    <h3>Software Engineer</h3>
     </div>
   
     </main>
     
     </body>
    
  );
}
