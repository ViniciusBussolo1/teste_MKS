import { Item } from '../Item/Item'

export function Main() {
  return (
    <main className="h-[calc(100vh-6.313rem)]  flex justify-center items-center">
      <div className="max-w-[58.625rem] w-full bg-red-300 grid grid-cols-4">
        <Item />
      </div>
    </main>
  )
}
