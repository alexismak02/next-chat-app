import React, {Component} from 'react';
import {List, Image} from 'semantic-ui-react';

const UserList=({userList})=>(
    <>
        <h3>Online Users ({userList.length})</h3>
        {userList.map((user,index)=>
            <List.Item key={index} style={{boxShadow: `1px 2px 1px #888888`, marginBottom: 15, backgroundColor: 'rgb(204, 255, 204, 0.5)', borderRadius: 2}}> 
                <Image avatar src={`https://api.adorable.io/avatars/150/${user.username}.png`}/><strong>{user.username}</strong>
            </List.Item>)}
    </>
)
export default UserList

// const styling={
//         boxShadow: `1px 3px 1px #888888`,
// }


// // Destructure method 2
// const UserList = (props) => {
//     const {userList}=props
//     <>
//        
//     </>
// }
// export default UserList
