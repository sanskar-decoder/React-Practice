import React, { useCallback, useState,useEffect,useRef } from 'react'
// import Button from'./components/Button'


function App() {
  
  let[Length,setLength]=useState("5");
  let [numberallowed,setnumberallowed]=useState("false");
  let [specialchar,setspecialchar]=useState("false");
  let [Password,setPassword]=useState("");


  const passwordgenerator= useCallback(
    () => {
     let pass=""
      let d="qwerftuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
      if(specialchar) d+="!@#$%^&*()_+?><:`~";
      if(numberallowed) d+=1234567890 ;

      for(let i=0;i<=Length;i++){
      let a=Math.floor(Math.random()*d.length+1);
      pass += d.charAt(a);

      
       
      }

      setPassword(pass)
   


    },
    [Length,numberallowed,specialchar,Password],


// useEffect(() => {
        
 
     
//       }, [length,numberallowed,specialchar,passwordgenerator])
      
     
  )
  
  const passref = useRef(null)

  const copytoclipboard= useCallback(()=>{
   passref.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])



  return (
    <>
    <div className="box w-full flex flex-col items-center gap-6 py-12  ">
      
      <h1 className=' text-4xl text-yellow-800 font-bold  tracking-wider'>PASSWORD GENERATOR</h1>

      <div className="box2  w-3/4 h-96 py-4 bg-slate-950 p-2 rounded-2xl ">
        <div className="lo1 flex  items-center justify-center gap-3  h-2/4 w-full  ">

          <input  className="py-6 px-4 h-74 w-2/4 rounded-md  hover:outline outline-indigo-600 shadow-red-800" 
          value={Password} ref={passref} placeholder='***********' type="text" />
          <button  className=" bg-green-600 text-white capitalize py-6 px-8 rounded " onClick={copytoclipboard}>Copy</button>
         
        </div>

        <div className="lo2 w-full h-2/4 flex flex-col items-center py-4">
        <button  className="p-6 outline-none cursor-crosshair text-white bg-green-600 rounded-xl " onClick={passwordgenerator}>Generate Password</button> 
          <div className="ko w-full flex justify-center gap-10 items-center py-12 ">
           
            <input type="range" 
            max={20}
            min={6}
            value={Length}
            onChange={(e)=>{setLength(e.target.value)}}
            className='w-26'
            />
            <label className='text-2xl text-white' htmlFor="">Length {Length}</label>
            <input className='' type="checkbox" name="inputadd"
            defaultChecked={numberallowed}
            onChange={()=>{setnumberallowed((prev) => !prev) }}
            id=""  />
            <label htmlFor="" className='text-2xl text-white font-mono'>ADD NUMBER</label>
           
           <input className='' type="checkbox" name="inputadd"
           defaultChecked={specialchar}
           onChange={()=>{setspecialchar((prev) => !prev) }}
           id="" />
           <label htmlFor="" className='text-2xl text-white'>Add Special Character</label>
            
            
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default App