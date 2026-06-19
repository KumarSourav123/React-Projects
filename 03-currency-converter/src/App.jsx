import React, { useState } from 'react'
import Card from './components/Card'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    
    <div className='bg-amber-950 h-screen w-full flex justify-center items-center'>

      <div className='bg-gray-500 p-6 rounded-lg w-[40%] text-xl font-semibold flex flex-col'>

        <form onSubmit={(e)=>{
          e.preventDefault();
          convert();
        }}>

          <Card 
          label = "From"
          amount = {amount}
          currencyOptions={options}
          selectCurrency={from}
          
          onCurrencyChange={(currency)=>{
            setFrom(currency)
          }}
          onAmountChange={(amount)=>{
            setAmount(amount)
          }}/>

          <button type='button' 
          className='bg-blue-600 text-white rounded-lg px-4 py-4 text-xl cursor-pointer active:bg-blue-300 relative ml-80'
          onClick={swap}>
            Swap
          </button>

          <Card 
          label = "To"
          amount = {convertedAmount}
          currencyOptions={options}
          selectCurrency={to}
          onCurrencyChange={(currency)=>{
            setTo(currency)
          }}
          amountDisable/>
        
          <button type='submit' 
          className='bg-blue-300 p-3 text-2xl text-center text-white mt-8 cursor-pointer active:bg-blue-700 w-full flex justify-center'>
            convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>

        </form>

      </div>      
    </div>
  )
}

export default App
