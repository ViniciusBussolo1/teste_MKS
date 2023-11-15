import { HandleProductContext } from '@/context/HandleProductContext'
import { ItemsProdutosCarrinho } from '@/types/type'
import { Plus, Minus, X } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'

export function ItemCarrinho({
  id,
  name,
  photo,
  price,
  qtd,
}: ItemsProdutosCarrinho) {
  const { carrinho, setCarrinho } = useContext(HandleProductContext)

  const handleDeleteProduct = (id: number) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id)
    setCarrinho(novoCarrinho)
  }

  const handleMinusQtd = (qtd: number, id: number) => {
    if (qtd === 1) {
      return null
    } else {
      const index = carrinho.findIndex((item) => item.id === id)

      const itemAlterado = { ...carrinho[index], qtd: qtd - 1 }

      const novoCarrinho = [...carrinho]
      novoCarrinho[index] = itemAlterado

      setCarrinho(novoCarrinho)
    }
  }

  const handlePlusWtd = (qtd: number, id: number) => {
    const index = carrinho.findIndex((item) => item.id === id)

    const itemAlterado = { ...carrinho[index], qtd: qtd + 1 }

    const novoCarrinho = [...carrinho]
    novoCarrinho[index] = itemAlterado

    setCarrinho(novoCarrinho)
  }

  return (
    <div className="max-w-[23.688rem] w-full h-[5.938rem] bg-white  rounded-lg shadow-shadow-item-carrinho flex justify-center items-center relative">
      <div
        className="h-[1.125rem] w-[1.125rem] bg-black flex justify-center items-center absolute top-[-0.438rem] right-[-0.313rem] rounded-full cursor-pointer"
        onClick={() => handleDeleteProduct(id)}
      >
        <X color="white" />
      </div>
      <Image src={photo} alt={name} width={80} height={80} />
      <div className="flex gap-4 ml-[1.313rem]">
        <h1 className="max-w-[7.063rem] w-full text-base leading-[1.063rem] text-[#2C2C2C]">
          {name}
        </h1>
        <div className="max-w-[3.125rem] w-full h-[1.188rem] flex flex-col ">
          <span className="text-xs leading-normal text-black">Qtd:</span>
          <div className="w-full flex justify-center items-center gap-2 rounded border-[0.019rem] border-[#BFBFBF]">
            <Minus
              size={11}
              color="black"
              className="cursor-pointer"
              onClick={() => handleMinusQtd(qtd, id)}
            />{' '}
            <span className="text-sm">{qtd}</span>{' '}
            <Plus
              size={11}
              color="black"
              className="cursor-pointer"
              onClick={() => handlePlusWtd(qtd, id)}
            />
          </div>
        </div>
      </div>
      <span className="ml-10 text-sm leading-[1.063rem] text-black font-bold">
        R${parseInt(price) * qtd}
      </span>
    </div>
  )
}
