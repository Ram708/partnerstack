import React from 'react'
import './Talktoushome.css'
import talktous from "../../../../Asset/Home/talktous.png"


export default function Talktoushome() {
  return (
    <div className='talktoushome'>
        <div className='talktous-img'>
          <img src={talktous} alt="" />
        </div>
        <div className='talktoushome-text'>
          <h1>TALK TO US</h1>
          <p>For any queries, contact us at our helpline desk
by filling out the below form:</p>
        </div>
        </div>
  )
}
