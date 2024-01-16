const Todo = require("../models/Todo");
const CreateNewTodo = async (_title, _status, _tags, _date) => {
  try {
    let data = await Todo.create({
      title: _title,
      status: _status,
      tags: _tags,
      date: _date,

    });
      if (data) {
        console.log("task is done");
      } else {
        console.log("task don't create")
      }
  } catch (err) {
    console.log(err);
  }
};


const GetAllToDo=async (userId)=> {
    try {
      const todos = await Todo.findOne({ userId: userId });
      if (todos) {
          console.log("found task")
          return todos; 
      } else {
        console.log("don't found ")
      }
    } catch (error) {
      console.error( error);
    }
  }
  
  const DeleteTodo=async (_id)=> {
    try {
        let data = await Todo.deleteOne({ id: _id });
        if (data) {
            return data;
        } else {
            console.log("Not found Any Task");
        }
    } catch (error) {
        console.log(error);
    }
  }


  

module.exports = { CreateNewTodo,GetAllToDo, DeleteTodo };
