import React, { useState } from 'react'

const App = () => {

  const [color, setColor] = useState('black')
  return (
    <div className=' h-screen w-full flex justify-center items-end ' style={{backgroundColor:color}}>
      <div className='bg-white h-10 w-[80%] flex justify-around rounded-xl mb-10'>
        <button onClick={()=>{
          setColor('red')
        }} className= 'px- py-1 rounded-2xl m-1 bg-red-600 w-20 text-center' >Red</button>
        <button onClick={()=>{
          setColor('green')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-green-600 w-20 text-center'>Green</button>
        <button onClick={()=>{
          setColor('blue')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-blue-600 w-20 text-center'>Blue</button>
        <button onClick={()=>{
          setColor('olive')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-olive-600 w-20 text-center'>Olive</button>
        <button onClick={()=>{
          setColor('gray')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-gray-600 w-20 text-center'>Gray</button>
        <button onClick={()=>{
          setColor('yellow')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-yellow-600 w-20 text-center'>Yellow</button>
        <button onClick={()=>{
          setColor('pink')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-pink-600 w-20 text-center'>Pink</button>
        <button onClick={()=>{
          setColor('purple')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-purple-600 w-20 text-center'>Purple</button>
        <button onClick={()=>{
          setColor('orange')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-orange-600 w-20 text-center'>Orange</button>
        <button onClick={()=>{
          setColor('white')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-white w-20 text-center'>White</button>
        <button onClick={()=>{
          setColor('black')
        }} className= 'px-3 py-1 rounded-2xl m-1 bg-black w-20 text-white text-center'>Black</button>
      </div>   
    </div>
  )
}

export default App

