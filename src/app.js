import React from 'react';
import Header from './components/Header';
import './css/style.css';
import Image from './img/Image';
import town from './img/town.jpg';


class App extends React.Component{
    render(){
        return(
        <div className='name'>
            <Header title="pupu" />
            <h1>Yaaaaaaaa</h1>
            <Image way={town} />
        </div>
        )
    }
}

export default App;