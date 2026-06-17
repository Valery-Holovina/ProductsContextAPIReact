import { createContext, useState } from "react";


export const ProductContext = createContext();


export const ProductProvider = ({children}) =>{
        const [products, setProducts] = useState(
            [
                {id: 1, name: "iPhone 17", brand: "Apple", type: "Technology", price: 50000, description: "In blue color" },
                {id: 2, name: "iPad 11", brand: "Apple", type: "Technology", price: 17000, description: "In white color" },
                {id: 3, name: "Hairdryer Dyson", brand: "Dyson", type: "Technology", price: 24000, description: "" },

            ]
        )


        const addProduct = (name, brand, type, price, description) =>{
            const newProduct = {
                id: Date.now(),
                name,
                brand,
                type,
                price,
                description
            };
            setProducts((prevProducts) => [...prevProducts, newProduct])
        }

        const removeProduct = (id) =>{
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
        }


        const contextValue = {
            products,
            addProduct,
            removeProduct,
        }

        return (
            <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>
        )
}