const mongoose = require('mongoose');
const userController=require("./controllers/UserController")
const todoController=require("./controllers/TodoController")
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));


  // CallBack Register


  // userController.Register("shadyADel","Eltantawy",124564791,25)
  // userController.Register("s3ody","Yasser",0123456789,25);
  // userController.Register("adam","Mohammed",1234521456,25);
 
  // CallBack Login
  // userController.Login("shadyAdel","Eltantawy",124564791)
  
  // CallBack getAllUser
  
  // userController.GetAllUser()
  // .then(users => {
  //   console.log("Found Users:", users);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

// Callback DeleteUser

  // userController.DeleteUser()
  // .then(user=>{
  //   console.log("delete is done")
  // }).catch(error=>{
  //   console.log(error)
  // })
  /////////////////////////////////////////////////////////////////////////////////////////
//   todoController.CreateNewTodo("learn nodejs","Don't Todo",["Node Js","Mongodb"])


  // userController.Register("Esmail","shady",012345647,25).then(data=>{
  //   console.log(data);
  //   todoController.CreateNewTodo("learn nodejs","Don't Todo",["Node Js","Mongodb"])
  // })



  // todoController.GetAllToDo().then(data=>{
  //   console.log(data)
  
  // }).catch(error=>{ 
  //     console.log(error);
  // })

  todoController.DeleteTodo().then(data=>{
    console.log(data);
  }).catch (error=>{
    console.log(error);
  })