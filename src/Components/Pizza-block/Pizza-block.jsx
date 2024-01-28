import './pizza-block.scss';
import {Button} from "../Button/Button";
import {useState} from "react";

export const PizzaBlock = ({data}) => {
  const [typeNameActive, setTypeNameActive] = useState(0);
  const [sizePizza, setSizePizza] = useState(0);


  const typeNames = ['тонкое', 'традиционное']
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={data.imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{data.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {
            data.types.map((elem, index) => {
              return <li key={index}
                         onClick={() => setTypeNameActive(index)}
                         className={typeNameActive === index ? 'active' : ''}
              >{typeNames[elem]}</li>
            })
          }
        </ul>
        <ul>
          {
            data.sizes.map((size, index) => {
              return <li key={index}
                         onClick={() => setSizePizza(index)}
                         className={sizePizza === index ? 'active' : ''}
              >{size}</li>
            })
          }
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {data.price} ₽</div>
        <Button/>
      </div>
    </div>
  )
}