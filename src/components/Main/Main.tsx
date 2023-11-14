'use client'

import { useQuery } from '@tanstack/react-query'
import { ItemProps } from '@/types/type'

import { Item } from '@/components/Item/Item'

import api from '@/services/api'

export function Main() {
  const getProducts = async () => {
    const response = await api.get(
      'products?page=1&rows=8&sortBy=id&orderBy=DESC',
    )

    return response.data.products
  }

  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getProducts,
  })

  return (
    <main className="h-[calc(100vh-6.313rem)]  flex justify-center items-center">
      <div className="max-w-[58.625rem] w-full grid grid-cols-4 gap-5">
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
    </main>
  )
}
