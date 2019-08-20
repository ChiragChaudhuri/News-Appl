import React from 'react';
import Newshead from './newshead';
import './newslist.css';
class Newslist extends React.Component{
    render()
    {
         return(
            <div style={{textAlign:"justify"}}>
            {
               this.props.news.map((item)=><Newshead description ={item.description} image={item.urlToImage}/>)
            }
            </div>
            );
   }
}
export default Newslist;