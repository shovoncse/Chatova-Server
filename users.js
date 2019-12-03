// Test Purpose
// const users = [
//   {id:1,name:'jhon',room:'game'},
//   {id:2,name:'jack',room:'chat'},
//   {id:3,name:'james',room:'app'},
//   {id:4,name:'jill',room:'app'},
// ]

// Place to store user info
const users = []

// Add a New User (Module)
const addUser = ({id, name, room}) => {

  // Trimming
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Find Existing User
  const existingUser = users.find((user)=>user.name === name && user.room === room);

  // Check user exist or not in the room
  if(existingUser){
    return {error: 'Username is Taken'}
  }

  // Create a new user
  const user = {id, name, room}
  
  // Adding to array
  users.push(user);

  // Returning this specfic user's info
  return {user}

}

// Remove User (Module)
const removeUser = (id) => {

  // Find the index in 'Users' array
  const index = users.findIndex((user)=> user.id === id);
  
  // if found
  if(index !== -1){

    // Returning removed user's info only
    return users.splice(index,1)[0]

  }

}

// Get User by id (Module)
const getUser = (id) => users.find((user)=> user.id === id);

// Get room by user's id (Module)
const getUserInRoom = (room) => users.filter((user)=> user.room === room);

//Test Purpose
//console.log(addUser({id:'2',name:'hh',room:'app'}))


// Exporting modules
module.exports = {
  addUser, removeUser, getUser, getUserInRoom
};