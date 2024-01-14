import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data=  useLoaderData()
    // const [data,setdata]= useState({})
    // useEffect(()=>{

    //         fetch(`https://api.github.com/users/hiteshchoudhary`)
    //         .then((res)=>res.json())
    //         .then(data=> setdata(data)
    //           )
    //         },[])
  

  return (
    <>
      <div className='bg-gray-700 p-5 mx-auto text-center text-white text-lg'>Subscribers:{data.login
      }
      <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </>
  )
}

export default Github

export const githubLoader= async()=>{
 const response = await fetch(`https://api.github.com/users/tuwid-Ashish`)
  return response.json()
   
}