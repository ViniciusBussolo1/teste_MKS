'use client'

import { ItemsProdutosCarrinho } from '@/types/type'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface HandleProductContextDataProps {
  carrinho: Array<ItemsProdutosCarrinho>
  carrinhoIsOpen: boolean
  setCarrinho: Dispatch<SetStateAction<ItemsProdutosCarrinho[]>>
  setCarrinhoIsOpen: Dispatch<SetStateAction<boolean>>
}

interface HandleProductContextProvidersProps {
  children: ReactNode
}

export const HandleProductContext = createContext(
  {} as HandleProductContextDataProps,
)

export function HandleProductContextProvider({
  children,
}: HandleProductContextProvidersProps) {
  const [carrinho, setCarrinho] = useState<Array<ItemsProdutosCarrinho>>([])
  const [carrinhoIsOpen, setCarrinhoIsOpen] = useState(false)

  return (
    <HandleProductContext.Provider
      value={{
        carrinho,
        carrinhoIsOpen,
        setCarrinho,
        setCarrinhoIsOpen,
      }}
    >
      {children}
    </HandleProductContext.Provider>
  )
}
