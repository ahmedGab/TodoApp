import React, { Component } from'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import Update from "./update"

export default class Getitems extends Component{
     

    
    render(){
        return(
            <div className="listItems">
                {this.props.Listitems.map(el=><Card  className="item" key={el.id} body outline color="primary">
        <CardTitle>{el.title}</CardTitle>
        <Button onClick={()=>this.props.removeClick(el.id)}  color="secondary">Delete</Button> <br/>
        <Update editClick={this.props.editClick} el={el} handlechangeTitre={this.props.handlechangeTitre} />

      </Card>)}
            </div>
        )
    }

}