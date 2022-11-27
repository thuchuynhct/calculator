import React from 'react'
import "./Bubbles.scss"


export default function Bubbles() {
  const bubbles: string[] = ["one", "two", "three", "four", "five", "six", "seven"];

  const elemens = bubbles.map((item, index) => {
    return <span key={index} className={item}></span>
  })

  return (
    <div className='bubbles'>
      {elemens}
    </div>
  )
}
