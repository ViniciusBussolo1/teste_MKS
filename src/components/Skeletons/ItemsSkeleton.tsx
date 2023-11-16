import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ItemsSkeletonProps {
  cards: number
}

export function ItemsSkeleton({ cards }: ItemsSkeletonProps) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        data-testid="loading"
        className="max-w-[13.625rem] w-full h-[18.75rem] bg-[#4b515c] rounded-lg border-gray-3 border-t-[0.2rem] border-r-[0.2rem] border-b-[0.399rem] border-l-[0.2rem] flex flex-col items-center justify-end"
      >
        <Skeleton height={120} width={147} />
        <div className="w-full flex items-center justify-between mt-[0.875rem] pr-3 pl-[0.875rem]">
          <Skeleton height={35} width={125} />

          <Skeleton height={18} width={50} />
        </div>
        <Skeleton height={48} width={192} />
        <Skeleton height={39} width={210} />
      </div>
    ))
}
