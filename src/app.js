import React from 'react';
import Header from './components/Header';
import './css/main.css';
import Users from './components/Users';


class App extends React.Component{
    
    render(){
        return(
            <div>
                <Header title="Список пользователей" />
                <main>
                    <Users />
                </main>
                <aside></aside>
            </div>
        )
    }

}

export default App;