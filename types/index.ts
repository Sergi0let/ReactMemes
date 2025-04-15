import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface MemeType {
  title: string
  imgUrl: string
  likes: string
  id?: number | string
  actions?: string
}
