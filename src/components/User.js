import React,{useState,useEffect} from 'react'
import './style.css'
import axios from 'axios'

const User = () => {
  const[post,setPost]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3001/students`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  })
  return (
    <div>
      <h2>User</h2>
      <div className='flex-container'>
        {
          post.map(x=>(
            <div className='flex-items'>
              <img src={x.image} width={150}  height={150} alt="abc"/>
              <h2>{x.name}</h2>
              <h2>{x.age}</h2>
              <h2>{x.area}</h2>
              <h2>{x.schedule}</h2>
              <button>view profile</button>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default User
