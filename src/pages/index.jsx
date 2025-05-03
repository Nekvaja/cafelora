import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Gallery } from '../components/Gallery/Gallery';
import { Footer } from '../components/Footer/Footer';
import { Menu } from '../components/Menu/Menu';
import { Contact } from '../components/Contact/Contact';

const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();
const drinks = json.data;

console.log(drinks)


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true}/>
    <main>
      <Banner/>
      <Menu drinks={drinks} />
      <Gallery/>
      <Contact/>     
    </main>
    <Footer/>
  </div>
);


// MENU HAMBURGER

document.querySelector('.nav-btn').addEventListener('click', () => (
  document.querySelector('.rollout-nav').classList.toggle('nav-closed')
));

document.querySelector('.rollout-nav').addEventListener('click', () => (
  document.querySelector('.rollout-nav').classList.add('nav-closed')
));

// Objednací tlačítko

const handleSubmit = async (event) => {
 event.preventDefault();
  const id = Number(event.target.dataset.id);

  const drink = drinks.find((drink) => (drink.id === id))
  console.log(drink)
  console.log(id)
  
  const objednano = await fetch(`http://localhost:4000/api/drinks/${id}`, {
  
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([{ op: 'replace', path: '/ordered', value: !drink.ordered }]),
  },
  );

  window.location.reload()


};



document.querySelectorAll('.drink__controls').forEach((btnObjednat) =>( //posluchař události na formulář
  btnObjednat.addEventListener('submit', handleSubmit)
));