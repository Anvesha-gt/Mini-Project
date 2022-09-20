// 
import React from 'react'
import'./Home.css';
import logo from '../logo.svg';
const Home = () => {
  return (   
    // in return only one <div> tag can use if u want many more u, u can  use dummy tag like this<> </>
     <div>
    <h1 className="head1" style={{ color:'red', backgroundColor: 'yellow' }}>My Home Page</h1>
   <hr/>
  
   <img src={logo}/>
    </div>

  )
}

export default Home