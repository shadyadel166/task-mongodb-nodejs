const User = require("../models/User");

const Register = async (_userName, _firstName, _password, _age) => {
  try {
    let data = await User.create({
      userName: _userName,
      firstName: _firstName,
      password: _password,
      age: _age,
    });
    if (data) {
      console.log("registered successfully");
    } else {
      console.log("Try aging");
    }
  } catch (e) {
    console.log(e);
  }
};

const Login = async (_userName, _firstName, _password, _age) => {
  try {
    let data = User.find({
      userName: _userName,
      firstName: _firstName,
      password: _password,
      age: _age,
    });
    if (data) {
      console.log("Login  successfully ");
    } else {
      console.log("User is not found");
    }
  } catch (error) {
    console.log(error);
  }
};

const  GetAllUser =async(_firstName) =>{
  try {
    const data = await User.find({}, { firstName: 1 });
    if (data.length > 0) {
      return data;
    } else {
      return []; 
    }
  } catch (error) {
    console.log(error);
  }
}


const DeleteUser =async (_user) => {
  try {
    let data = await User.deleteOne({ user: _user });
    if (data) {
      return data
    } else {
      console.log("Not found");
    }
  } catch (error) {
    console.log(error);
  }
};


module.exports = { Register, Login, GetAllUser, DeleteUser  };

// محاولة ثانية
// const User=require("../models/User");
// const Register=async (_userName,_firstName,_password,_age) => {
//   try {
//     let date=await User.create({
//       userName:_userName,
//       firstName:_firstName,
//       password:_password,
//       age:_age,
//     });
//       if (data) {
//         console.log("register successfully")
//       } else {
//         console.log("please try aging")
//       }
//   } catch (error) {
//     console.log(error)
//   }
// };

// const Login = async (_userName, _firstName, _password, _age) => {
//   try {
//     let data = User.find({
//       userName: _userName,
//       firstName: _firstName,
//       password: _password,
//       age: _age,
//     });
//     if (data) {
//       console.log("Login  successfully ");
//     } else {
//       console.log("User is not found");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// module.exports=Register;