import React, { Component } from 'react';
import './App.css';
import {Grid, Segment} from 'semantic-ui-react';
import UserList from './containers/UserList';
import Conversation from './containers/Conversation';
import Chatbox from './containers/Chatbox';
import moment from 'moment';
import doodle from './components/doodle.jpg';
import Socket from './utils/socket';
import Me from './containers/Me';

class App extends Component {
  state={
    chatHistory:[],
    textInput:'',
    myUser:{},
    userList:[],
  }
  
  componentDidMount(){
    Socket.emit('NEW_USER')
  
    Socket.on('GET_CURRENT_USER', user => {
      this.setState({myUser:user})
      // console.log(this.state.myUser)
    })
  
    Socket.on('UPDATE_USER_LIST', users => {  
      this.setState({userList:users})
      // console.log(this.state.userList)
    })
  
    Socket.on('RECEIVE_BROADCAST',data =>{
      let copyChatHistory=[...this.state.chatHistory];
      copyChatHistory.push(data);
      this.setState({
        chatHistory: copyChatHistory,
      })
      // console.log(data)
    })

    Socket.on('HAS_ERROR',data=>{
      console.log(data)
    })

  }
  
  handleInput=(e)=>{
    this.setState({
      textInput: e.target.value
    }) 
  }
  
  handleKeyPress=(e)=>{
      
    if(e.key==="Enter" && !e.shiftKey){                           //e.charCode===13 or e.which===13
      e.preventDefault()  
      this.handleSubmit(e);
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault()

    const {myUser,textInput}=this.state //destructure
    let time=moment(Date.now()).calendar() //convert format of date & time 

      const newChat={username: myUser.username, message: textInput.trim(), timestamp: time} //assign my new text to newChat
  
      Socket.emit('BROADCAST_MESSAGE',newChat) 
    
      this.setState({textInput: "" })  //clear chat box

  }    


  render() {
    const {chatHistory,textInput,userList,myUser}=this.state
  
    return (
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column style={{width:"20vw", height:"100vh"}}>
          <Segment style={{height:"10vh"}}>
              <Me myUser={this.state.myUser}/>
            </Segment>
            <Segment style={{height:"90vh"}}>
              <UserList userList={userList}/>
            </Segment>
          </Grid.Column>
          <Grid.Column style={{width:"80vw", height:"100vh"}}>
            <Segment style={{height:"85vh", backgroundImage: `url(${doodle})`, overflow:"scroll"}}>
              <Conversation chatHistory={chatHistory} myUser={myUser}/>
            </Segment>
            <Segment style={{height:"15vh", backgroundColor: "rgb(192,192,192,0.5)"}}>
              <Chatbox textInput={textInput} handleInput={this.handleInput} handleKeyPress={this.handleKeyPress} handleSubmit={this.handleSubmit}/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
