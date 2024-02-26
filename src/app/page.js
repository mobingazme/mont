import React from 'react'

function page() {
  return (
    <div className='  h-full bg-A w-[448]  p-'>
      <div className='  bg-[url(/images/sticker.png)] bg-cover bg-center w-[448px] h-[800px]'>
        <div className=' mr-32  '>
          <img className='w-80' src='/images/logo bala.png' />
          <div className='w-full mr-10'>
            <div className=' flex items-center justify-between cursor-pointer w-56 h-12 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all my-2'>
              <h4 className='font-bold text-2xl p-2 text-C'>اینستاگرام</h4>
              <img className='w-16 p-2' src='/images/instagram.png' />
            </div>
            <div className=' flex items-center justify-between cursor-pointer w-56 h-12 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all'>
              <h4 className='font-bold text-2xl p-2 text-C'>سایت</h4>
              <img className='w-16 p-2' src='/images/location.png' />
            </div>
            <div className=' flex items-center justify-between cursor-pointer w-56 h-12 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all my-2'>
              <h4 className='font-bold text-2xl p-2 text-C'>منو</h4>
              <img className='w-16 p-2' src='/images/menu.png' />
            </div>
            <div className=' flex items-center justify-between cursor-pointer w-56 h-12 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all'>
              <h4 className='font-bold text-2xl p-2 text-C'>تماس باما</h4>
              <img className='w-16 p-2' src='/images/tamas.png' />
            </div>
            <div className=' flex items-center justify-between cursor-pointer w-56 h-12 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all my-2'>
              <h4 className='font-bold text-2xl p-2 text-C'>باشگاه مشتریان</h4>
              <img className='w-16 p-2' src='/images/bashgah moshtarian.png' />
            </div>
            <div className=' flex items-center justify-between cursor-pointer w-56 h-12 bg-B border-2 border-B hover:border-C rounded-2xl delay-150 transition-all '>
              <h4 className='font-bold text-2xl p-2 text-C'>لوکیشن</h4>
              <img className='w-16 p-2' src='/images/loooc.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page