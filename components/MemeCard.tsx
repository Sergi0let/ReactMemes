import type { MemeType } from "@/types"

import { Badge } from "@heroui/badge"
import { Button } from "@heroui/button"
import { Card, CardBody } from "@heroui/card"
import { Image } from "@heroui/image"

interface Props extends MemeType {}

const MemeCard = ({ imgUrl, title, likes }: Props) => {
  return (
    <Card className="w-full flex flex-col cursor-pointer max-w-sm shadow-lg rounded-2xl overflow-hidden">
      <div className="flex-1 relative w-full p-2">
        <Image alt={title} className="rounded-t-xl" src={imgUrl} />
      </div>
      <CardBody className="p-2 md:p-4 flex flex-col gap-2">
        <h3 className="text-sm flex-1 sm:text-xl lg:text-2xl font-semibold">
          {title}
        </h3>
        <div className="flex items-center mt-2 justify-between">
          <Badge color="secondary" content={likes} size="md">
            <span className="text-xl sm:text-3xl">❤️</span>
          </Badge>
          <Button
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg hover:brightness-110 transition-all"
            radius="full"
          >
            <a href={imgUrl} rel="noopener noreferrer" target="_blank">
              View Full
            </a>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export { MemeCard }

