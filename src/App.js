import React from 'react';
import './App.css';
import $ from 'jquery';
import Dashboard from './components/Dashboard';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      data : '',
      username:'',
      password:'',
      loginStatus : false
    }

  }

  loginOnSuccess = (uname,pass) =>{
     this.fetchData().then((result)=>{
      if(uname===result.username && pass === result.password){
        this.setState({
          loginStatus : true
        })      
       }
    }).catch(()=>{
      alert("Invalid credentials");
    })
  }

  fetchData = () =>{
    return new Promise((resolve,reject)=>{
      $.ajax({
        url : 'http://localhost:3000/credentials.json',
        type : 'GET',
        dataType : 'json',
        success : function(response){
          resolve(response)          
        },
        error : function(error){
          reject("Something went wrong");
        }
      })
    })
  }

  
  render(){
    if (this.state.loginStatus) {
      return<Dashboard username={this.state.username}></Dashboard>
    }
    return (
      <div className='App'>
          Username : <input type='text' name='loginbox' value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/><br />
          Password : <input type='text' name='passwordbox' value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} /><br />
          <input type='button' name='loginBtn' value='LOGIN' onClick={()=>this.loginOnSuccess(this.state.username,this.state.password)} />
          
      </div>
    );
  }
}

export default App;