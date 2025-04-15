import { MemeCard } from "@/components/MemeCard"
import { memesData } from "@/constants"

const Page = () => {
  return (
    <div className="mb-6">
      <h1 className="text-center mb-4 md:mb-6 text-2xl sm:text-3xl font-bold">
        Mems list
      </h1>
      <div>
        <ul 
        className='masonry-container'
          // className="grid grid-cols-1 min-[320px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
          >
          {memesData.map((meme) => (
            <MemeCard key={meme.id} {...meme} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
