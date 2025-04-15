import { Card } from "@heroui/card"
import { Skeleton } from "@heroui/skeleton"

const SkeletonCard = () => {
  return (
    <Card
      className="w-full flex flex-col cursor-pointer max-w-sm shadow-lg rounded-2xl overflow-hidden"
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <div className="h-32 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3 my-5 px-3 flex items-center justify-between">
        <Skeleton className="w-1/6 rounded-lg">
          <div className="h-3 w-1/4 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-1/4 rounded-lg">
          <div className="h-3 w-1/4 rounded-lg bg-default-200" />
        </Skeleton>
      </div>
    </Card>
  )
}

const SkeletonTableRow = () => {
  return (
    <div className=" w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
  )
}

export { SkeletonCard, SkeletonTableRow }
