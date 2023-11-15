'use client'

import { X } from 'lucide-react'

import { useContext } from 'react'
import { HandleProductContext } from '@/context/HandleProductContext'
import { ItemCarrinho } from '../itemCarrinho/ItemCarrinho'
import { ItemsProdutosCarrinho } from '@/types/type'

export function Carrinho() {
  const { carrinho, carrinhoIsOpen, setCarrinhoIsOpen } =
    useContext(HandleProductContext)

  const calcularTotal = () => {
    const total = carrinho.reduce((acc, product) => {
      return acc + parseInt(product.price) * product.qtd
    }, 0)

    return total
  }

  return (
    <>
      {carrinhoIsOpen === true && (
        <aside className="max-w-[30.375rem] w-full h-full flex justify-start absolute top-0 right-0 bg-[#0F52BA] shadow-shadow-carrinho flex-col ">
          <div className="w-full pl-12 pt-9 pr-[1.375rem] flex flex-col flex-1">
            <div className="w-full flex justify-between items-center">
              <h1 className="max-w-[11.25rem] w-full text-[1.688rem] leading-normal font-bold text-white">
                Carrinho de compras
              </h1>
              <div
                className="h-[2.375rem] w-[2.375rem] bg-black rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => setCarrinhoIsOpen(false)}
              >
                <X color="white" />
              </div>
            </div>

            <div className="w-full mt-[4.375rem] flex flex-col justify-between flex-1 pb-10">
              <div className="w-full space-y-5 ">
                {carrinho.map((item: ItemsProdutosCarrinho) => {
                  return (
                    <ItemCarrinho
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      photo={item.photo}
                      price={item.price}
                      qtd={item.qtd}
                    />
                  )
                })}
              </div>

              <div className="flex items-center justify-between pr-6">
                <span className="text-[1.75rem] leading-[0.938rem] font-bold text-white">
                  Total
                </span>
                <span className="text-[1.75rem] leading-[0.938rem] font-bold text-white">
                  R${calcularTotal()}
                </span>
              </div>
            </div>
          </div>
          <button className="h-[6.063rem] w-full bg-black hover:bg-gray-900 text-[1.75rem] leading-[0.938rem] font-bold text-white">
            Finalizar Compra
          </button>
        </aside>
      )}
    </>
  )
}
