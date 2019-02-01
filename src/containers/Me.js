import React, {Component} from 'react';
import {List, Image} from 'semantic-ui-react';

export default class UserList extends React.Component {
  
    render(){
        const {myUser}=this.props
        return(
            <>
                <h3>Your Profile</h3>
                <Image avatar src={`https://api.adorable.io/avatars/150/${myUser.username}.png`}/><strong>{myUser.username}</strong>

            </>
        )
    }
}