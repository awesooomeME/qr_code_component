import Image from 'next/image'
import { Outfit } from 'next/font/google'

import qr from '../../public/image-qr-code.png'

const outfit = Outfit({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${outfit.className} bg-light_gray
      flex justify-center items-center h-screen w-screen`}>
      <div className='bg-white py-5 px-4 rounded-2xl
        flex flex-col items-center w-[90%] md:w-1/4'>
        <Image src={qr} alt='' className='rounded-2xl pb-5'/>
        <h1 className='text-xl font-bold md:text-4xl text-center pb-5'>
          Improve your front-end skills by building projects
        </h1>
        <h2 className='text-light_gray text-lg md:text-2xl text-center'>
          Scan the QR code to visit Frontend Mentor and take your coding 
          skill to the next level
        </h2>
      </div>
    </main>
  )
}
