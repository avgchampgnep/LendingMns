import React from 'react';

class Image extends React.Component{
    render(){
        return(
            <div className='mami'>
                <img className='papi' src = {this.props.way} width = {this.props.square} alt = {this.props.text} />
            </div>
        )
    }
};

export default Image;