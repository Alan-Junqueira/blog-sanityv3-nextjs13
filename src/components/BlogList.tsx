import { Posts } from '@/@types/Posts';
import { urlFor } from '@/lib/urlFor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { ClientSideRoute } from './ClientSideRoute';

type Props = {
  posts: Posts[];
};

export const BlogList = ({ posts }: Props) => {
  console.log(posts);
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div key={post._id} className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute w-full bottom-0 bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-x-2 items-center">
                    {post.categories.map((category, index) => (
                      <div
                        key={index}
                        className="bg-[#F7Ab0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>

                <p className="mt-5 font-bold flex items-center group-hover:underline">
                  Read Post
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
};
