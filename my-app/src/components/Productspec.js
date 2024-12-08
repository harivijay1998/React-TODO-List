import React from 'react'
import { UserContext } from '../App'

const Productspec = ({deepName = 'Samsung' , deepPrice = '120000' , deepdetails ='12gb with 512gb'}) => {
    let date = new Date()
  return (
    <>
    <h3>{deepName}</h3>
    <h3>{deepPrice}</h3>
    <h3>{deepdetails}</h3>
    <UserContext.Consumer>
        {
            ({user})=>{
                return(
                    <h1>{user.uName} - {date.getFullYear()}</h1>
                )
            }
        }
    </UserContext.Consumer>

    </>
  )
}

export default Productspec