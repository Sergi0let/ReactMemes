import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface MemeType {
  id: number | string
  title: string
  imgUrl: string
  likes: number
}