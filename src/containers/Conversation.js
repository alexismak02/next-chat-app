import React, { Component } from 'react';
import {List, Image} from 'semantic-ui-react';

export default class Conversation extends React.Component {
    
    scrollToDown=()=>{
        this.messageEnd.scrollIntoView()
    }
    
    componentDidUpdate(){
        this.scrollToDown()
    }
    
    render(){
        const {chatHistory,myUser}=this.props
        return(
            <>
                <h3>Chatter Box</h3>
            
                {chatHistory.map((chat,index)=>
                    <List.Item key={index}> 
                        <List.Content style={{float: myUser.username===chat.username?'right':'left',clear:'both'}}>
                                <Image avatar src={`https://api.adorable.io/avatars/150/${chat.username}.png`}/><strong>{chat.username}</strong>
                            <List.Description style={{background: 'white'}}>
                                <pre style={{whiteSpace: 'pre-wrap', overflow: 'hidden', display: 'inline-block', borderRadius: 2,}}>{chat.message}</pre>
                                <br/>
                            </List.Description>
                            <em><small>{chat.timestamp}</small></em>
                        </List.Content>
                </List.Item>)}
                
                <div ref={(e)=>{this.messageEnd=(e)}}/>
            </>
        )
    }

}
