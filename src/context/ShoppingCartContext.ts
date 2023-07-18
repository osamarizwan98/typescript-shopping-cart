import { ReactNode, createContext, useContext, useState } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number,
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const shoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(shoppingCartContext)
}

const [cartItems, setCartItems] = useState<CartItem[]>([])