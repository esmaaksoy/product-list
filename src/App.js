import "./style.css"
import Header from "./Header";
import { categories, products } from "./Data";
import Product from "./Product";
function App() {
  return (
    <div>
     <Header categories={categories}/>
     <div className="image-container">
     <Product products={products}/>
     </div>
    </div>
  );
}

export default App;
