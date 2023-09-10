import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export default function RotateLoader() {
  return (
    <div className="mt-4 py-2 grid place-content-center">
        <RotatingLines
            strokeColor="#1977F2"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"
            visible={true}
        />
    </div>

  )
}
