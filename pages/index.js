// import type { NextPage } from 'next'
import { PostCard, Categories, PostWidget } from "../components"
import {getPosts} from '../services'
import Head from 'next/head'
import Image from 'next/image'
import {FeaturedPost} from '../sections'
// const posts = [
//   { title: 'React Testing1 hgdfhfh', excerpt: 'excerpt1 tgfhhthrth' },
//   { title: 'React Testing2 thrhrthrthr', excerpt: 'excerpt 2 rthrhrth' }
// ]

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>TechnoLab - An Initiative by Kwinfosys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPost />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}



export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return{ 
    props: {posts}
  }

}
