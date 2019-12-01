const users = [
  {id:1,name:'jhon',room:'game'},
  {id:2,name:'jack',room:'chat'},
  {id:3,name:'james',room:'app'},
  {id:4,name:'jill',room:'app'},
]

const addUser = ({id, name, room}) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user)=>user.name === name && user.room === room);

  if(existingUser){
    return {error: 'Username is Taken'}
  }

  const user = {id, name, room}
  
  users.push(user);

  return {user}
}

const removeUser = (id) => {
  const index = users.findIndex((user)=> user.id === id);
  
  if(index !== -1){
    return users.splice(index,1)[0]
  }
}

const getUser = (id) => users.find((user)=> user.id === id);

const getUserInRoom = (room) => users.filter((user)=> user.room === room);

console.log(addUser({id:'2',name:'hh',room:'app'}))