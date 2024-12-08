import React from 'react'
import Productitem from './Productitem'
import { useState } from 'react'

const Shop = () => {
    let [product , setproduct ] = useState( {
        name:'iphone 11 pro',
        price:'25000',
        details:'8gb with 256gb'
    })
  return (
   <>
   <h1>Welcome to app store</h1>
   <Productitem product={product}/>
   </>
  )
}

export default Shop