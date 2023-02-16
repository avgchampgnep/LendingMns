import React from 'react';
import './css/main.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Main from './components/Main';


class App extends React.Component{
    
    render(){
        return(
            <div>
                <Card />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;