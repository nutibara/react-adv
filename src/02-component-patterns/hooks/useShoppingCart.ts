import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

type cart = { [key: string | number]: ProductInCart }


export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<cart>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
            // if (count === 0) {
            //     // const { [product.id]: toDelete, ...rest} = oldShoppingCart;
            //     // return rest;
            //     const shoppingCart = { ...oldShoppingCart };
            //     delete shoppingCart[product.id];
            //     return shoppingCart;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: { ...product, count }
            // }

        })

    }
  
  
    return {
        shoppingCart,
        onProductCountChange,
  }
}
