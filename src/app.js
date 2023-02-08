import React from 'react';
import Header from './components/Header';
import './css/style.css';
import Image from './img/Image.js';
import town from './img/town.jpg';


class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            helpText: "Help text!",
        }

        this.inputClick = this.inputClick.bind(this)
    }

    render(){
        return(
        <div className='name'>
            <Header title="pupu" />
            <h1>Yaaaaaaaa</h1>
            <h1>{this.state.helpText}</h1>
            <Image way={town} text="refik" square='700px' />
            <input placeholder={this.state.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver} />
        </div>
        )
    }

    inputClick(){
        if (this.state.helpText === "Help text!") {
            this.setState({helpText: "Changed"});
            console.log("Clicked");
        }

        if(this.state.helpText === "Changed"){
            this.setState({helpText: "Help text!"});
            console.log("Clicked");
        }
    }

    mouseOver(){
        console.log("Mouse Over");
    }
}

export default App;