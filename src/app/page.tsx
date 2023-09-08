"use client"
import React,{useState} from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import {Slider} from '../components/ui/slider'
import Rubber from './../../public/gomma.png'

const DynamicComponentWithNoSSR = dynamic(()=> import ('../components/Canva'),{ssr: false, loading: ()=> <p>Loading....</p>})

export default function Home() {

  const [vlalore,setValore] = useState(1)
  const [colorPennello,setColorPennello] = useState("black")

  const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "pink",
    "brown",
    "grey",
    "black",
    "white"
  ];

  return (
    <div className='flex items-center justify-center gap-8'>

      <div className='flex flex-col gap-6'>
        <div className='grid grid-cols-3 grid-rows-3 gap-[10px]'>
          {colors.map((e,i)=>{

            if(e=="white") return <div onClick={()=> setColorPennello(e)} key={i} style={{backgroundColor: e, height:30, width: 30}} className='border border-black hover:cursor-pointer'><Image src={Rubber} height={30} width={30} alt='icon rubber' /></div>

             return <div onClick={()=> setColorPennello(e)} key={i} style={{backgroundColor: e, height:30, width: 30}} className='border border-black hover:cursor-pointer'/>
          })}
        </div>
        <Slider max={18} min={1} step={1} defaultValue={[vlalore]} onValueChange={e=> setValore(e[0])}  />

      </div>
      <div className='flex justify-center items-center h-screen'>
        <DynamicComponentWithNoSSR widthPennello={vlalore} colorPennello={colorPennello} />
      </div>
    </div>
  )
}





