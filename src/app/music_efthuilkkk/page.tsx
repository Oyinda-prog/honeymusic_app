'use client'
import Artistecomponent from '@/components/Artistecomponent'
import Sidecomponent from '@/components/Sidecomponent'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface apiinterface{
    id:string,
    songImage:string,
    artistName:string,
    songTitle:string,
    songUrl:string,
    albumName:string,
    releaseDate:string
    }
const page = () => {

        const [api, setapi] = useState<apiinterface[]>([])
    
        const fetchapi= async ()=>{
         const apifetch=await fetch('https://musicapi-19wk.onrender.com/music/myAPI',{
            cache:"no-cache"
         })
         const convertjs=await apifetch.json()
         setapi(convertjs)
        }
        useEffect(() => {
         fetchapi()
        }, [])

    const useparams=useParams()
    const {id}=useparams
    let artiste=api.find((artist)=>artist.id==id)
  return (
    <>
    <div  className="grid w-full  shadow lg:grid-cols-12 bg-black">
<div className="lg:col-span-3">
<Sidecomponent/>
</div>
<div className="lg:col-span-9">
<div>
            <h1 className='text-white'>Recommended for you</h1>

        </div> 
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   p-4 sm:space-y-5 md:space-y-0 lg:space-y-0 space-y-5'>
        
     {
        api.map(music=>(
        
          <div key={music.id} className='p-4 text-[20px] my-15 relative  '>
            <Link href={`/music_efthuilkkk/${music.id}`} className='' >
         <div className='bg-black mx-auto p-10 space-y-8 rounded-3xl  relative w-45 h-45'>
            
         <Image alt='Artiste Image' src={music.songImage}  unoptimized={true} fill className='object-cover'/>
        
        </div>
        <p className='text-white text-[15px]'>{music.songTitle}</p>
         <p className='text-white'>{music.albumName}</p>
         
         <Image src='/images/playiconone.png' alt='play ' width={38} height={38} />
         </Link>
         {/* <audio src={music.songUrl} controls loop autoPlay></audio>  */}
          </div>
         
        ))
    }
    </div>
</div>
    </div>

    </>
  )
}

export default page