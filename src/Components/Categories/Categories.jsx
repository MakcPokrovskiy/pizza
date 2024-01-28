import './categories.scss';
import {useState} from "react";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
export const Categories = () => {
  const [activeCategories, setActiveCategories] = useState(0);
  return (
    <div className="categories">
      <ul>
        {
          categories.map((elem, index) => {
            return <li key={index} onClick={() => setActiveCategories(index)}
                       className={activeCategories === index ? 'active' : ''}>{elem}
                  </li>
          })
        }
      </ul>
    </div>
  )
}