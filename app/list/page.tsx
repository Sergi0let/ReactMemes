import { ListMemes } from "@/components"

const Page = (): JSX.Element => {
  return (
    <div className="mb-6">
      <h1 className="text-center mb-4 md:mb-6 text-2xl sm:text-3xl font-bold">
        Memes list
      </h1>
      <div>
        <ListMemes />
      </div>
    </div>
  )
}

export default Page
