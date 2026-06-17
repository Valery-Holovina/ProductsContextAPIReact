import './App.css';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <ProductProvider>
  <div className="App">
      <h4>Products: </h4>
      <div className='row'>
      <div className='col s12 m6'>
          <div class="card blue-grey lighten-5">
          <div class="card-content black-text">
              <ProductForm />
          </div>
     
        </div>
      </div>
      <div className='col s12 m6'>
        <div class="card blue-grey lighten-5">
          <div class="card-content black-text">
              <ProductList />
          </div>
     
        </div>
        </div>
      </div>
    </div>

    </ProductProvider>
  );
}

export default App;
