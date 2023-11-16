'use client'

import { useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ItemProps, ItemsProdutosCarrinho } from '@/types/type'

import { Item } from '@/components/Item/Item'

import api from '@/services/api'
import { HandleProductContext } from '@/context/HandleProductContext'
import { ItemsSkeleton } from '../Skeletons/ItemsSkeleton'

export function Main() {
  const { carrinho } = useContext(HandleProductContext)

  const getProducts = async () => {
    const response = await api.get(
      'products?page=1&rows=8&sortBy=id&orderBy=DESC',
    )

    return response.data.products
  }

  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getProducts,
  })

  return (
    <main className="pt-24 flex flex-col justify-center items-center gap-20 px-1">
      <div className="max-w-[58.625rem] w-full grid grid-cols-1 max-[426px]:place-items-center min-[426px]:grid-cols-2 min-[539px]:grid-cols-3 min-[769px]:grid-cols-4 gap-5">
        {isLoading && <ItemsSkeleton cards={8} />}

        {data?.map((item: ItemProps) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              id={item.id}
              description={item.description}
              photo={item.photo}
              price={item.price}
            />
          )
        })}
      </div>
      <div>
        <span data-testid="span" className="text-xs leading-normal text-black">
          MKS sistemas © Todos os direitos reservados
        </span>
      </div>
    </main>
  )
}
