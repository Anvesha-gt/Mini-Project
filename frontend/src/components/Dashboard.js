import { Formik } from "formik"
import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"

const Dashboard = () => {
  // const [usersList,setUsersList] = useState([]);

  const [usersList, setUsersList] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [userFormData, setUserFormData] = useState(null);
  const [mailContent, setMailContent] = useState("");

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/subscriber/getbyowner/" + currentUser._id)
    const data = await response.json()
    console.log(data)
    // store data in state
    setUsersList(data)
    console.log("request sent")
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])
  // nfn shortcut

  const deleteUser = async (id) => {
    // console.log(id);
    const response = await fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    })
    console.log(response.status)
    getDataFromBackend()
    // import toast fromm 'react-hot-toast';
    //   toast.success('User Deleted ☠');
    console.log("User Deleted ☠")
  }

  const editUser = (userdata) => {
    console.log(userdata)
    setUserFormData(userdata)
    setShowForm(true)
  }

  const showUsers = () => {
    return (
      <table className="table table-white table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <tr>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>
                <button
                  className="btn btn-outline- primary"
                  onClick={() => {
                    editUser(user)
                  }}>
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    deleteUser(user._id)
                  }}>
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  const sendMail = (recMail) => {
    fetch('http://localhost:5000/util/sendmail', {
      method: 'POST',
      body : JSON.stringify({
        from: 'anveshagautam672@gmail.com',
        to : recMail,
        subject : 'Mail From Newsletter App',
        html : mailContent
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  }

  const sendNewsletter = () => {
    for(let sub of usersList){
      sendMail(sub.email);
    }
    Swal.fire({
      icon : 'success',
      title : 'Mail Sent'
    })
  }

  return (
    <div className="container">
      <h1 className="text-center">Dashboard</h1>
      
      <div className="card my-4">
      <div className="card-body">
          <h3>Your Owner Id : {currentUser._id}</h3>
      </div>
      </div>
      <button onClick={getDataFromBackend}>Refresh</button>
      <div className="row">
        <div className="col-md">{showUsers()}</div>
      </div>

      <div className="card mt-5">
        <div className="card-body">
          <h3 className="text-center">Compose Your Mail Here</h3>
          <textarea onChange={e => setMailContent(e.target.value)} rows="10" className="form-control" placeholder="Write HTML syntax"></textarea>
          <button className="btn btn-secondary mt-3 float-end" onClick={sendNewsletter}>Send NewsLetter</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
