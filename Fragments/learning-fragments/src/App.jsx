import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = ["chana dal", "Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // if(foodItems.length === 0){
  //   return <h2>I am still hungry</h2>
  // }

  // let emptyMessage = foodItems.length === 0 ? <h2>I am still hungry</h2> : null;
  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>;{/* {emptyMessage} */}
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
