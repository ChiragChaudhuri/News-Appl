import React from 'react';
import Countrylist from './countrylist'
import Newslist from './newslist'
class Newsapp extends React.Component
{
    constructor(props){
        super(props);
        this.state={newsarray:[]};
                    }
    news=(country)=>{
        fetch(`https://newsapi.org/v2/top-headlines?source=google-news&country=${country}&apiKey=a9b320f1f47644f99dab6b9407db90b0`)
        .then((response)=>{return response.json();})
            .then((json)=>this.setState({newsarray:json.articles}))}
    render(){
        return(
            <div>
            <Countrylist ui={this.news}/>
            <Newslist news= {this.state.newsarray}/>
            </div>
        );
    }
}
export default Newsapp;