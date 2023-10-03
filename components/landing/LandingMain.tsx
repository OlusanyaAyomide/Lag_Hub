import React from 'react'
import BoardingLayout from '../boarding/BoadringLayout'
import Hero from './Hero'
import CoreFeatures from './CoreFeatures'
import GetStarted from './GetStarted'

export default function LandingMain() {
  return (
    <BoardingLayout>
        <Hero/>
        <CoreFeatures/>
        <GetStarted/>
    </BoardingLayout>
  )
}
