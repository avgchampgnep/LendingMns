import React from 'react';

class Users extends React.Component{

    users = [
        {
            id: 1,
            firstName: 'Bob',
            lastName: 'Marley',
            bio: 'What make this man i dont now but i wanna write text in this page',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstName: 'Snoop',
            lastName: 'Dog',
            bio: 'What make this man i dont now but i wanna write text in this page(His happy when smoking weed)',
            age: 50,
            isHappy: true
        },
        {
            id: 3,
            firstName: 'Lizer',
            lastName: 'Miror',
            bio: 'What make this man i dont now but i wanna write text in this page',
            age: 24,
            isHappy: false
        },
        {
            id: 4,
            firstName: 'Scali',
            lastName: 'Milano',
            bio: 'What make this man i dont now but i wanna write text in this page',
            age: 22,
            isHappy: true
        },
    ]

    render(){
        if(this.users.length > 0)
        return(
            <div>
                {
                    this.users.map((el) => (
                        <div className='user' key={el.id}>
                            <h3>{el.firstName} {el.lastName}</h3>
                            <p>{el.bio}</p>
                            <b>{el.isHappy ? "Popa agaga" : "Not popa ("}</b>
                         </div>
                    ))
                }
            </div>
        ) 
        return (<div className='user'>
            <h3>Пользователей нету!</h3>
        </div>)
    }
}

export default Users;