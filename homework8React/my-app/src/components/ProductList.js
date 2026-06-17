import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductItem from "./ProductItem";


const ProductList = () =>{
    const {products} = useContext(ProductContext);

    return(
        <ul className="collection">
            {products.map(product => (<ProductItem key={product.id} product={product} />))}
        </ul>
    )
}

export default ProductList;