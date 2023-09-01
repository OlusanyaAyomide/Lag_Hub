import React, { useEffect, useState } from 'react'

export function useHydration() {
   const [isRendered,setIsRendered] = useState(false)
   useEffect(()=>{
    setIsRendered(true)
   },[])
   return {isRendered}
}
