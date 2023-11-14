'use client'

import { useContext } from 'react'
import Image from 'next/image'

import { HandleProductContext } from '@/context/HandleProductContext'
import { ItemProps, ItemsProdutosCarrinho } from '@/types/type'

import Sacola from '../../../public/Sacola.svg'

export function Item({ id, description, name, photo, price }: ItemProps) {
  const { carrinho, setCarrinho } = useContext(HandleProductContext)

  const converterNumeroSemCasaDecimais = (price: string) => {
    const ParceInt = parseInt(price)
    const numeroSemCasasDecimais = Math.floor(ParceInt)
    const newPrice = numeroSemCasasDecimais
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    return newPrice
  }

  const inserirNoCarrinho = (
    id: number,
    photo: string,
    name: string,
    price: string,
  ) => {
    const newItem: ItemsProdutosCarrinho = { id, photo, name, price, qtd: 1 }
    const novoCarrinho = [...carrinho, newItem]

    setCarrinho(novoCarrinho)
  }

  return (
    <div className="max-w-[13.625rem] w-full pt-[1.125rem] flex flex-col items-center justify-end cursor-pointer">
      <Image src={photo} alt={name} width={147} height={120} />
      <div className="w-full flex items-center justify-between mt-[0.875rem] pr-3 pl-[0.875rem]">
        <h3 className="text-base leading-[1.188rem] font-normal text-[#2C2C2C]">
          {name}
        </h3>
        <div className="py-1 px-2 h-[1.625rem] bg-[#373737] rounded-[0.313rem] flex items-center justify-center">
          <span className="text-[0.938rem] leading-[0.938rem] font-bold text-white">
            R${converterNumeroSemCasaDecimais(price)}
          </span>
        </div>
      </div>
      <span className="text-[0.625rem] leading-[0.75rem] font-light text-[#2C2C2C] mt-2 pr-3 pl-[0.875rem]">
        {description}
      </span>

      <button
        className="w-full h-[1.994rem] bg-[#0F52BA] hover:bg-[#3c629b] rounded-b-lg flex justify-center items-center gap-[0.875rem] mt-3 text-sm leading-[1.125rem] font-semibold text-white uppercase"
        onClick={() => inserirNoCarrinho(id, photo, name, price)}
      >
        <Image src={Sacola} alt="Icone de uma sacola" />
        Comprar
      </button>
    </div>
  )
}
