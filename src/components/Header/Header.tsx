'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { HandleProductContext } from '@/context/HandleProductContext'
import Carrinho from '../../../public/Carrinho.svg'

export function Header() {
  const { carrinho, setCarrinhoIsOpen } = useContext(HandleProductContext)

  return (
    <header className="w-full h-[6.313rem] bg-[#0F52BA] flex justify-around items-center">
      <div className="flex items-center gap-2">
        <h1 className="text-[2.5rem] leading-[1.188rem] text-white font-semibold">
          MKS
        </h1>
        <h4 className="text-xl leading-[1.188rem] text-white font-light mt-3">
          Sistemas
        </h4>
      </div>

      <div
        className="w-[5.625rem] h-[2.813rem] rounded-lg bg-white hover:bg-gray-300 flex justify-center items-center gap-4 cursor-pointer"
        onClick={() => setCarrinhoIsOpen(true)}
      >
        <Image src={Carrinho} alt="Icone de um carrinho" />
        <span
          data-testid="carrinho-length"
          className="text-lg leading-normal text-black font-bold"
        >
          {carrinho.length}
        </span>
      </div>
    </header>
  )
}
