import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Getitems from './components/getitems';
import Additems from './components/additems';


class App extends Component {
  state={
    Listitems:[],
    title:"",
    id:"",
    titre:""
  }


  componentDidMount(){
  
    axios.get("http://localhost:3000/posts").then(rep=>{
    this.setState({Listitems:rep.data})
    console.log(rep.data)
    }).catch(err=>console.log(err))
  }
  handlechangeTitle=(e)=>{
    this.setState({title:e.target.value})
console.log(this.state.title)
  }
  handlechangeTitre=(e)=>{
    this.setState({titre:e.target.value})
console.log(this.state.titre)
  }
  /*
  handlechangeMail=(e)=>{
    this.setState({mail:e.target.value})
    console.log(this.state.mail)

  }
  */
  
addClick=(e)=>{
  e.preventDefault()

     let title= this.state.title
    
    

    axios.post(`http://localhost:3000/posts`,  {title} )
      .then(res => {

        console.log(res);
        console.log(res.data);
      })
      window.location.reload()
}

removeClick = (id) => {
  axios.delete("http://localhost:3000/posts/"+id)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    window.location.reload()
    
}
editClick =(title,id)=>{
  title=this.state.titre
  axios.put("http://localhost:3000/posts/"+id,{title})
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
  window.location.reload()


}

  render(){
  return (
    <div className="App">
      <Additems addClick={this.addClick} handlechangeTitle={this.handlechangeTitle}/>
      <Getitems   Listitems={this.state.Listitems} removeClick={this.removeClick} editClick={this.editClick} handlechangeTitre={this.handlechangeTitre} />
    </div>
  );
  }
  
}

export default App;
