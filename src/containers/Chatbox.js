import React, { Component } from 'react';
import {Form, TextArea}  from 'semantic-ui-react';


const Chatbox = ({textInput,handleInput,handleKeyPress,handleSubmit}) => (

        <Form onSubmit={handleSubmit}>
            <TextArea onKeyPress={handleKeyPress} onChange={handleInput} name='message' value={textInput} rows="2" maxLength="500" placeholder='Type message here...'/>
            {textInput.length===500?<small>Your message cannot exceed 500 characters</small>:null}
        </Form>
     
)
export default Chatbox

// // Destructure method 2
// const Chatbox = (props) => {

//     const {textInput,handleInput,handleSubmit}=props

//     <Form onSubmit={handleSubmit}>
//         <Form.Input maxLength="500" placeholder='Type message here...' name='message' value={textInput} onChange={handleInput}/>
//         {textInput.length===500?<small>Your message cannot exceed 500 characters</small>:null}
//     </Form>
 
// }
// export default Chatbox

