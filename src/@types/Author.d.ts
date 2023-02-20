import { Block } from "./Block"
import { Image } from "./Image"
import { Slug } from "./Slug"
import { Base } from "./typings"

export interface Author extends Base {
  bio: Block[]
  image: Image
  name: string
  slug: Slug
}