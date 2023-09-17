"use client";


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import Select from '@/components/ui/select';
import Image from 'next/image'
import { useState } from 'react'



export default function Home() {

  const [type,textType]= useState(0);
  const [selectt,enterSelect] = useState('');
  const [selectta,enterSelecta] = useState('');
  function handleInput(event : any){
    const newValue = event.target.value;
    textType(newValue);
    console.log(newValue)

  }


  const currency_rates = {
    PKRTOUSD : 0.0034 ,
    PKRTOIND : 0.28 ,
    PKRTOPKR : 1,
    USDTOUSD : 1,
    USDTOIND : 83.09,
    USDTOPKR : 296,
    INDTOUSD : 0.012,
    INDTOIND : 1,
    INDTOPKR : 3.57

  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    enterSelect(event.target.value);
    console.log(event.target.value)
  }
  const handleChangea = (event: React.ChangeEvent<HTMLSelectElement>) => {
    enterSelecta(event.target.value);
    console.log(event.target.value)
  }

  const onHandleSubmit = () => {
    const type1 : number = type;
    const outputDiv = document.getElementById('outputDiv');
    if (outputDiv) {
      if(selectt === 'PKR' && selectta === 'USD'){
        outputDiv.innerText = `The Converted Currency is ${type1*currency_rates.PKRTOUSD}!`;
      }
      if(selectt === 'PKR' && selectta === 'PKR'){
        outputDiv.innerText = `The Converted Currency is ${type1*currency_rates.PKRTOPKR}!`;
      }
      if(selectt === 'PKR' && selectta === 'IND'){
        outputDiv.innerText = `The Converted Currency is ${type1*currency_rates.PKRTOIND}!`;
      }
      if(selectt === 'USD' && selectta === 'USD'){
        outputDiv.innerText = `The Converted Currency is ${type1*currency_rates.USDTOUSD}!`;
      }
      if(selectt === 'USD' && selectta === 'PKR'){
        outputDiv.innerText = `The Converted Currency is ${type1*currency_rates.USDTOPKR}!`;
      }
      if(selectt === 'USD' && selectta === 'IND'){
        outputDiv.innerText = `The Converted Currency is ${type1*currency_rates.USDTOIND}!`;
      }
      if(selectt === 'IND' && selectta === 'USD'){
        outputDiv.innerText = `The Converted Currency is ${type1*currency_rates.INDTOUSD}!`;
      }
      if(selectt === 'IND' && selectta === 'PKR'){
        outputDiv.innerText = `The Converted Currency is ${type1*currency_rates.INDTOPKR}!`;
      }
      if(selectt === 'IND' && selectta === 'IND'){
        outputDiv.innerText = `The Converted Currency is ${type1*currency_rates.INDTOIND}!`;
      }
      
    }
    
  }

  

  const options = ['PKR', 'USD', 'IND'];
  const optionsa = ['USD', 'PKR', 'IND'];



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
<div className='text-dark text-4xl' >
  Currency Exchange Rate Calculator
</div>
      <div className='flex mb-20  text-light bg-dark m-20 border-blue-300 border-6 rounded-md shadow-2xl min-h-[310px] min-w-full !mt-[110px] '>
<div className='mt-18'>
  <Input placeholder='Enter Your Amount' onChange={handleInput} />
</div>
<div>
<Select options={options} value={selectt} onChange={handleChange} />
<Select options={optionsa} value={selectta} onChange={handleChangea} />

</div>
<div>
  <Button size={"lg"} onClick={onHandleSubmit}>Convert</Button>
</div>
<div>

      </div>
      
      </div>
      <div id="outputDiv" className='text-black relative -top-[250px] -left-30 text-2xl'></div>
      
    </main>
    
  )
}
