import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className=' h-screen w-screen bg-A  flex justify- items-'>
      <div className='max-w-[760px] w-full h-fit'>
        <div className=' relative bg-[url(/images/stick.png)] bg-cover bg-center max-w-[320px] h-[550px] mx-auto'>
          <div className=' absolute top-0 left-0 object-cover  '>{/*mr-32 */}
            <img className='w-[210px]' src='/images/logo bala.png' />
            <div className='w-full '>{/* */}
              <Link href={' https://www.instagram.com/viemonte.cafe.bakery'}>
              <div className=' flex items-center justify-between cursor-pointer w-[200px] h-9 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all mb-2'>
                <h4 className='font-bold text-lg p-3 text-C'>اینستاگرام</h4>
                <img className='w-16 p-2' src='/images/instagram.png' />
              </div>
            </Link>
            <Link href={' https://www.instagram.com/viemonte.cafe.bakery'}>
            <div className=' flex items-center justify-between cursor-pointer w-[200px] h-9 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all'>
              <h4 className='font-bold text-lg p-3 text-C'>سایت</h4>
              <img className='w-16 p-2' src='/images/location.png' />
            </div>
            </Link>
            <Link href={' https://www.instagram.com/viemonte.cafe.bakery'}>
            <div className=' flex items-center justify-between cursor-pointer w-[200px] h-9 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all my-2'>
              <h4 className='font-bold text-lg p-3 text-C'>منو</h4>
              <img className='w-16 p-3' src='/images/menu.png' />
            </div>
            </Link>
            <Link href={'tel: 02144894365'}>
            <div className=' flex items-center justify-between cursor-pointer w-[200px] h-9 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all'>
              <h4 className='font-bold text-lg p-3 text-C'>تماس باما</h4>
              <img className='w-16 p-2' src='/images/tamas.png' />
            </div>
            </Link>
            <Link href={' https://www.instagram.com/viemonte.cafe.bakery'}>
            <div className=' flex items-center justify-between cursor-pointer w-[200px] h-9 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all my-2'>
              <h4 className='font-bold text-l p-3 text-C'>باشگاه مشتریان</h4>
              <img className='w-16 p-2' src='/images/bashgah moshtarian.png' />
            </div>
            </Link>
            <Link href={'https://maps.apple.com/?address=%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%D8%AF%D8%AE%D8%AA,%20Iran&ll=35.758148,51.320320&q=%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%D8%AF%D8%AE%D8%AA&t=m'}>
            <div className=' flex items-center justify-between cursor-pointer w-[200px] h-9 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all '>
              <h4 className='font-bold text-lg p-3 text-C'>لوکیشن</h4>
              <img className='w-16 p-2' src='/images/loooc.png' />
            </div>
            </Link>

          </div>
        </div>
      </div>
    </div>


    </div >
  )
}

export default page









{/*import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className=' h-full w-full bg-A  relative'>

      <img className='w-full h-fit object-fill' src='/images/sticker.png' />
      <div className='absolute top-0 left-0 object-cover'>
        <img className='w-[210px]' src='/images/logo bala.png' />
        <div className='w-full '>
          <div className=' flex items-center justify-between cursor-pointer w-[200px] h-10 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all my-2'>
            <h4 className='font-bold text-xl p-3 text-C'>اینستاگرام</h4>
            <img className='w-16 p-2' src='/images/instagram.png' />
          </div>
          <div className=' flex items-center justify-between cursor-pointer w-[200px] h-10 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all'>
            <h4 className='font-bold text-xl p-3 text-C'>سایت</h4>
            <img className='w-16 p-2' src='/images/location.png' />
          </div>
          <div className=' flex items-center justify-between cursor-pointer w-[200px] h-10 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all my-2'>
            <h4 className='font-bold text-xl p-3 text-C'>منو</h4>
            <img className='w-16 p-3' src='/images/menu.png' />
          </div>
          <div className=' flex items-center justify-between cursor-pointer w-[200px] h-10 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all'>
            <h4 className='font-bold text-xl p-3 text-C'>تماس باما</h4>
            <img className='w-16 p-2' src='/images/tamas.png' />
          </div>
          <div className=' flex items-center justify-between cursor-pointer w-[200px] h-10 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all my-2'>
            <h4 className='font-bold text-lg p-3 text-C'>باشگاه مشتریان</h4>
            <img className='w-16 p-2' src='/images/bashgah moshtarian.png' />
          </div>
          <div className=' flex items-center justify-between cursor-pointer w-[200px] h-10 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all '>
            <h4 className='font-bold text-xl p-3 text-C'>لوکیشن</h4>
            <img className='w-16 p-2' src='/images/loooc.png' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page



 */}