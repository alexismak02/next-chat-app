import React, {Component} from 'react';
import {List, Image} from 'semantic-ui-react';

export default class UserList extends React.Component {
  
    render(){
        const {myUser}=this.props
        return(
            <>
                <h3>Your Profile</h3>
                <div style={{boxShadow: `1px 2px 1px #888888`, backgroundColor: 'rgb(0, 102, 0, 0.5)', borderRadius: 2}}>
                <Image avatar src={`https://api.adorable.io/avatars/150/${myUser.username}.png`}/><strong>{myUser.username}</strong>
                </div>
            </>
        )
    }
}