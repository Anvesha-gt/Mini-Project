import {Formik} from 'formik';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const Dashboard = () => {
    // const [usersList,setUsersList] = useState([]);
    
    
    const [usersList, setUsersList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [userFormData,setUserFormData] = useState(null);
  
  const getDataFromBackend = async() =>{
      const response = await fetch ('http://localhost:5000/subscriber/getall')
      const  data = await  response.json();
      console.log(data);
      // store data in state
      setUsersList(data);
      console.log('request sent');
  }
  
  useEffect(() => {
  getDataFromBackend();
  }, [])
  // nfn shortcut
  
  const deleteUser =async (id) => { 
    // console.log(id);
    const response = await fetch('http://localhost:5000/user/delete/'+id,{
      method : 'DELETE'
    })
    console.log(response.status);
    getDataFromBackend();
    // import toast fromm 'react-hot-toast';
    //   toast.success('User Deleted ☠');
      console.log('User Deleted ☠');
   }
  
   const editUser = (userdata) => {
    console.log(userdata);
    setUserFormData(userdata);
    setShowForm(true);
  
   }
  
  const showUsers = () =>{
    return <table className='table table-white table-striped'>
    <thead>
    <tr>
    <th>ID</th>
    <th>Email</th>
    <th></th>
  
    </tr>
    </thead>
    <tbody>
    {
      usersList.map( (user) => (
        <tr>
        <td>{user._id}</td>
        <td>{user.email}</td>
          <td>{user.username}</td>
          <td>{user.age}</td>
          <td>
          <button className='btn btn-outline- primary' onClick={() => { editUser(user) }}>
          <i class="fas fa-pencil-alt"></i>
                  </button></td>
                  <td>
                  <button className='btn btn-outline-danger'  onClick={()=> {deleteUser(user._id)}}>
                  <i class="fas fa-trash-alt"></i>  
                </button>
                  </td>
        </tr>
      ))
    }
    </tbody>
    </table>
  }
  
    return (
      <div className='container'>
      <h1 className="text-center">Dashboard</h1>
      <button onClick={getDataFromBackend}>Refresh</button>
      <div className="row">
      <div className="col-md">
      {showUsers()}
      </div>
      
      </div>
      </div>
  
    )
  }

  export default Dashboard;