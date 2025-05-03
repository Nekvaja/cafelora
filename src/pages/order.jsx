import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header/Header';
import { Order } from '../components/Order/Order';


const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image')
const json = await response.json();
const data = json.data; 
 
   console.log(data);
   


document.querySelector('#root').innerHTML = render(
      <div className="page">
      
      <Header showMenu={false}/>
      <Order items={data}/>

      

      <footer>
        <div className="container">
          <div className="footer__content">
            Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
          </div>
        </div>
      </footer>
    </div>
);
