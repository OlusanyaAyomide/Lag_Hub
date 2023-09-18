import React from 'react'
import {ThreeDots} from "react-loader-spinner"

export default function DotLoader({color}:{color:string}) {
  return (
    <ThreeDots 
      height="40" 
      width="40" 
      radius="5"
      color={color} 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
     />
  )
}
