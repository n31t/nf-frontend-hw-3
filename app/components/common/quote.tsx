import Link from "next/link";

const Quote = () => {
    return(
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-60 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Our Blog!</h1>
            <p className="mb-8 leading-relaxed">Dive into our collection of thoughtfully crafted posts. Explore a variety of topics, share your thoughts, and discover new perspectives. We&apos;re excited to share our work with you and can&apos;t wait to see what conversations unfold.</p>
            <div className="flex justify-center">
                <Link href="/posts">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore Posts</button>
                </Link>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Subscribe</button>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Quote;