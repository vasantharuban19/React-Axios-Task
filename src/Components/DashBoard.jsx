import React,{useState,useEffect} from 'react'
import TopBar from './TopBar'
import { Table } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import { ToastContainer ,toast } from 'react-toastify'
import { API_URL } from '../App'
import { useNavigate } from 'react-router-dom'

function DashBoard() {
    let [userData,setUserData] = useState([])
    let navigate = useNavigate()

    const getUserData = async()=>{
        try {
            let res = await axios.get(API_URL)
            // console.log(res);
            if(res.status===200){
                toast.success('Data fetched successfully')
                setUserData(res.data)
            }
        }
        catch(error){
            toast.error('Data fetch failed')
        }
    }
    useEffect(()=>{
        getUserData()
    },[])

    const handleToggle = async(e)=>{
        try{
            e.status= !e.status
            let res = await axios.put(`${API_URL}/${e.id}`,e)
            if(res.status===200){
                toast.success('Toggle success')
                getUserData()
            }
        }
        catch(error){
            toast.error('Toggle failed')
        }
    }

    const handleDelete = async(id)=>{
        try{
            let res = await axios.delete(`${API_URL}/${id}`)
            if(res.status===200){
                toast.success('Data deleted successfully')
                getUserData()
            }
        }
        catch(error){
            toast.error('Data delete failed')
        }
    }
  return (
    <>
    <TopBar/>
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>S.No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((e,i)=>{
              return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.suite},{e.street},{e.city},{e.zipcode}</td>
                <td>{e.phone}</td>
                <td>{e.website}</td>
                <td>{e.compName},{e.catchPhrase},{e.bs}</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" defaultChecked={e.status} onClick={()=>handleToggle(e)}/>
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <Button variant='secondary'  onClick={()=>navigate(`/edit/${e.id}`)}>Edit</Button>
                  &nbsp;
                  <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
    <ToastContainer/>

    </>
    )
}

export default DashBoard