import React from 'react'

const Card = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions= [],
    selectCurrency = "usd",
    amountDisable= false,
    currencyDisable= false,

}) => {



    return (        
        <div className='bg-white py-4 px-2 text-2xl rounded-lg flex justify-around '>

            <div className='flex flex-col gap-5 '>

                <label >
                    {label}
                </label>

                <input type="number" 
                placeholder='amount'
                disabled={amountDisable}
                value={amount}
                onChange={(e)=>{
                    onAmountChange && onAmountChange(Number(e.target.value))
                }}/>

            </div>
            
            <div className='flex flex-col gap-5'>

                <label>
                    Currency Type
                </label >
                
                <select
                value={selectCurrency}
                disabled={currencyDisable}
                onChange={(e)=>{
                    onCurrencyChange && onCurrencyChange(e.target.value)
                }}>
                    
                    {currencyOptions.map((currency)=>{
                        return <option key={currency} value={currency}>{currency}</option>
                    })}

                </select>
            </div>
        </div>       
    )
}

export default Card
