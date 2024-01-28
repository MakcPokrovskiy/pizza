//styles
import './App.scss';

//Components
import {Header} from "./Components/Header/Header";
import {Categories} from "./Components/Categories/Categories";
import {Sort} from "./Components/Sort/Sort";
import {PizzaBlock} from "./Components/Pizza-block/Pizza-block";

//data
import data from "../src/Data/data.json";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              data.pizzas.map((elem, id) => {
                return <PizzaBlock key={id} data={elem}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
<PizzaBlock data={data}/>