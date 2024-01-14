import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


function User() {
  const {id} =  useParams()
     
  return (
    <>
      <h1 className='bg-gray-700 p-5 mx-auto text-center text-white text-lg'>Subscribers:{id}
      </h1>
    </>
  )
}

export default  User

 