import React from 'react'
class Countrylist extends React.Component{
    render()
    {
        return(
            <div>
            <button onClick={()=>this.props.ui('in')}>India</button>
            <button onClick={()=>this.props.ui('us')}>USA</button>
            <button onClick={()=>this.props.ui('fr')}>France</button>
            <button onClick={()=>this.props.ui('ru')}>Russia</button>
            </div>
        );
    }
}
export default Countrylist;