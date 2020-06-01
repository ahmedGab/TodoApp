import React, { Component } from 'react'

export default class Additems extends Component{
    render(){
        return (
<div className="inputs">  
<form onSubmit={this.props.addClick}>
    <input onChange={this.props.handlechangeTitle} name="name" type="text"/> <br/> <br/>
    <button type="submit">add</button>
    </form>
</div>

        )
    }
}