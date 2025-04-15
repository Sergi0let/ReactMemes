import { TableMemes } from "@/components"

const Page = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-center mb-4 md:mb-6 text-2xl sm:text-3xl font-bold">
        Memes Table
      </h1>
      <div>
        <TableMemes />
      </div>
    </div>
  )
}

export default Page
