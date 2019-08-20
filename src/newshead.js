import React from 'react';
import giphy from './giphy.gif';
import './newshead.css'
class Newshead extends React.Component{
    constructor(props){
        super(props);
        this.state={visible:"none"}
    }
    loading=()=>{
        console.log("asdfdfknskdfnkdsnkfnkdsanf");
        this.setState({visible:"block"})}
    render()
    {
        console.log(this.state.visible);
        return(
            <div className='bg-light-white dib br3 pa2 ma2 grow bw2 shadow-5'style={{display:'flex',flexdirection:'row',padding:"50px"}}>
               <img src={this.props.image} style={{display:this.state.visible}} onLoad={this.loading} height="200" width="200"/>

               
                 <p style={{padding :"20 px"}}>
                    { this.props.description }
                 </p>   
            </div>);
    }
}
export default Newshead;