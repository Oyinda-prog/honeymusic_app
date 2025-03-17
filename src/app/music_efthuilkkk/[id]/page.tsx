'use client'
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
    let artiste = api.find((artist) => String(artist.id) === id);

  return (
    <>
    <div  className="grid w-full  shadow lg:grid-cols-12 bg-black">
    <div className="lg:col-span-3">
      </div>
      <div className='lg:col-span-9'>
        {
            <p className='text-white'>{artiste?.artistName}</p>
        }
      </div>
      </div>
    </>
  )
}

export default page