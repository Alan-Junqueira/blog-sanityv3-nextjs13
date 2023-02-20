import { Author } from "./Author";
import { Block } from "./Block";
import { Category } from "./Category";
import { Image } from "./Image";
import { Slug } from "./Slug";
import { Base } from "./typings";

interface Posts extends Base {
  author: Author
  body: Block[];
  categories: Category[]
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string
}