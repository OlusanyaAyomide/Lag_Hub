import { Appfeatures } from '@/utils/constants'
import React from 'react'
import FeatureCard from './FeatureCard'

export default function CoreFeatures() {
  return (
    <div className='mt-6 paddingx'>
        <h1 className="font-bold text-lg text-center">Core Features</h1>
        <div className="flex flex-wrap mt-4 pb-4 justify-center sm:justify-between md:justify-around lg:justify-between sm:max-w-[600px] mx-auto md:max-w-[900px]">
            {Appfeatures.map((item,key)=>(
                <FeatureCard {...item} key={key}/>
            ))}
        </div>
    </div>
  )
}
