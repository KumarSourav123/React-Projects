import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [characterAllowed, setCharacterAllowed] = useState(false)
const [password, setPassword] = useState('')

const passwordRef = useRef(null)

const passwordGenerator = useCallback( ()=>{
  let pass = ''
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  if(numberAllowed){
    str = str + '0123456789'
  }
  if(characterAllowed){
    str = str + '!@#$%^&*()_+-={}[]|;"<>,.?/~'
  }

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length +1) 
    pass = pass + str.charAt(char) 
  }

  setPassword(pass)

},[length,numberAllowed,characterAllowed,setPassword])

const copyToClip = () => {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
}

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <div className='bg-black text-white h-screen flex justify-center items-center '>

      <div className='bg-gray-800 rounded-lg text-orange-500 px-5 py-5 '>

        <div className='flex'>
          <input type="text" 
          value={password}
          className='bg-white py-3 w-[90%] px-3 outline-none text-black rounded-l-lg text-2xl font-semibold'
          readOnly
          ref={passwordRef}/>

          <button className='bg-blue-800 px-4 text-white text-xl rounded-r-lg cursor-pointer active:bg-blue-400'
          onClick={copyToClip}>
          copy
          </button>

        </div>


        <div className='flex text-2xl gap-2 mt-3'>

          <input type="range"
          min={8} 
          max={100} 
          value={length}        
          className='cursor-pointer'
          onChange={async (e)=>{
            await setLength(Number(e.target.value))
          }}/>         
          <label>Length({length})</label>

          <input type="checkbox" id='numberFormat'
          checked={numberAllowed}
          onChange={()=>{
            setNumberAllowed(!numberAllowed)
          }}/>
          <label htmlFor='numberFormat'>Numbers</label>

          <input type="checkbox" id='characterFormat'
          checked={characterAllowed}
          onChange={()=>{
            setCharacterAllowed(!characterAllowed)
          }}/>
          <label htmlFor='characterFormat'>characters</label>

        </div>

      </div>
      
    </div>
  )
}

export default App

