import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";


const ProductItem = ({product}) =>{
    const {addProduct, removeProduct, updateProduct} = useContext(ProductContext)

    return(
        <li>
            <div>
                <span><strong>Name:</strong> {product.name}</span>
                <br />
                <span><strong>Brand:</strong> {product.brand}</span>
                <br />
                <span><strong>Type:</strong> {product.type}</span>
                <br />
                <span><strong>Price:</strong> {product.price}</span>
                <br />
                <span><strong>Description:</strong> {product.description}</span>
                <br />
                <button className="waves-effect red btn" onClick={() => removeProduct(product.id)}>Delete</button>
                <hr style={{ borderColor: "#ede9e979" }} />
            </div>
            


        </li>
    )
}

export default ProductItem