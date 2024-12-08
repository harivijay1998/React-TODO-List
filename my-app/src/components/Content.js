import React from 'react'
import { useState } from 'react'

const Content = () => {
    let [item , setitem] = useState([
        {id:1 , label: 'HTML & CSS' , checked: true},
        {id:2 , label: 'JavaScript' , checked: true},
        {id:3 , label: 'React JS' , checked: true}

    ])

    let [newitem , setnewitem] = useState("")
    let[isEditing , setIsEditing]= useState(false)
    let[currentId, setCurrentId]= useState(null)


    const handleClicked =(id)=>{
        let newListitems = item.map((item)=>{return item.id === id ?{...item, checked:!item.checked} : item})
    
        setitem(newListitems)
    }

    const handleAddorSave =()=>{
        if(isEditing){
            let newListitems = item.map((item)=>{
                return item.id === currentId ? {...item, label: newitem}:item
            })
            setitem(newListitems)
            setnewitem("")
            setCurrentId(null)
            setIsEditing(false)
        }
        else{
            setitem([...item, {id : item.length+1  , label : newitem , checked:false}])
            setnewitem("")
           
        }


    }

    const handleUpdate =(id)=>{
        let Listitems = item.find((item)=> item.id === id)
        setnewitem(Listitems.label)
        setIsEditing(true)
        setCurrentId(id)
    }



    const handleDelete =(id)=>{
        let newitems = item.filter((item)=> item.id != id)
            .map((item, index)=>{
                return {...item, id: index+1 }
            })
            setitem(newitems)
        }
    
  return (
    <main>
        <h1>TODO List</h1>
        <input type='text'
            placeholder='add your task'
            value={newitem}
            onChange={(e)=>{setnewitem(e.target.value)}}
        ></input>
        <button onClick={handleAddorSave} >{isEditing ? "Save" : "Add"}</button>
        {item.map((item)=>(
            <li key={item.id}>
                <input type='checkbox' checked={item.checked} onChange={()=>handleClicked(item.id)}/>
                <label>{item.label}</label>
                <button onClick={()=>handleUpdate(item.id)} >Update</button>
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
        ))}
    </main>
  )
}

export default Content