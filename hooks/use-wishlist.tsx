import {create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { ProductType } from "@/types/product"
import { toast } from "@/hooks/use-toast"

interface UseWishlistType {
    lovedItems: ProductType[]
    addLovedItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void
}

export const useWishlist = create(persist<UseWishlistType>((set, get) => ({
    lovedItems: [],
    addLovedItem: (data: ProductType) => {
        const currentItems = get().lovedItems
        const existingItem = currentItems.find((item) => item.id === data.id)
        if(existingItem) {
            return toast({
                title: "El producto ya existe en la lista de deseos. 💔",
                variant: "destructive"
            })
        }
        set({
            lovedItems: [...get().lovedItems, data]

        })
        toast({
            title: "Producto agregado a la lista de deseos. ❤️",
        })
    },
    removeItem: (id: number) => {
        set({
            lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]
        })
        toast({
            title: "Producto eliminado de la lista de deseos. 💔"
        })
    },
    removeAll: () => {},
}), {
    name: "cart-storage",    
    storage: createJSONStorage(() => localStorage)
}))