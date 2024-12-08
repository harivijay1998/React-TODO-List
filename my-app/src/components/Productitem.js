import React, { useContext } from 'react'
import Productspec from './Productspec'
import { UserContext } from '../App'

const Productitem = ({product}) => {
    let {user} = useContext(UserContext)
  return (
<>
    <h1> User Name : {user.uName}</h1>
    <h1>Product Specification </h1>
    <Productspec/>
</>  )
}

export default Productitem