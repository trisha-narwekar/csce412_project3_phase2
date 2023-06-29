import Image from 'next/image'

export default function Home() {
  return (
   <div className="bg-white h-screen w-screens grid grid-cols-2">
    <div><p className="mt-96 text-5xl font-bold text-center align-middle text-gray-900">hello world</p></div>
    <a href="http://csce412tnarwekar.xyz/personal-website/index.html"><div class="mx-24 mt-96 bg-gray-900 h-8 w-72 font-bold text-center text-xl color-black rounded-lg">click here for website!</div></a>
   </div>

  )
}
