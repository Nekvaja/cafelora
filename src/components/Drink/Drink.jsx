import { Layer } from '../Layer/Layer';
import './Drink.css';

export const Drink = ({id, name, ordered, image, layers}) => (

<div className="drink">
    <div className="drink__product">
        <div className="drink__cup">
            <img src={image}/>
        </div>
        <div className="drink__info">
            <h3>{name}</h3>

            {
            layers.map((layer) => (
            <Layer 
            key={`${id}}`}
            color={layer.color} 
            label={layer.label}/>       
        ))}

        </div>
    </div>
    <form data-id={id} className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        {ordered ? (
            <button className="order-btn order-btn--ordered">Zrušit</button>
        ) :(
            <button className="order-btn">Objednat</button>
        )}       
     
    </form>
</div>
)
