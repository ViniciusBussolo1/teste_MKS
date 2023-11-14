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
  setCarrinho: Dispatch<SetStateAction<ItemsProdutosCarrinho[]>>
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

  return (
    <HandleProductContext.Provider
      value={{
        carrinho,
        setCarrinho,
      }}
    >
      {children}
    </HandleProductContext.Provider>
  )
}
