// import About from "./Components/About"
// import Card from "./Components/Card"
// import Contact from "./Components/Contact"


//  form handling 
// i) Brutel force 



// import { useState } from "react";

// const Web = () => {

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   console.log(name);
  

//   return (
//     <div className="flex flex-col gap-5 w-80" >
//       <input  onChange={(e)=>{
//         setName(e.target.value)
//       }}
//       className="border-2"type="text" placeholder="Name" />
//       <input  onChange={(e)=>{
//         setEmail(e.target.value)
//       }}
//       className="border-2"type="text" placeholder="Email" />
//        <input  onChange={(e)=>{
//         setPassword(e.target.value)
//       }}
//       className="border-2"type="text" placeholder="Password" />
//       <h1>Name is -{name}</h1>
//       <h1>Email is -{email}</h1>
//       <h1>Password is -{password}</h1>
//     </div>
//   );
// };

// export default Web;






// ii) Better apporach


// import { useState } from "react";

// const Web = () => {

//    const [fromData, setFromData] = useState({
//     name:"",
//     email:"",
//     password:"",
//   })  
//   console.log("formdata",fromData);
  

//   return (
//     <div className="flex flex-col gap-5 w-80" >
//       <input  onChange={(e)=>
//         setFromData({...fromData ,name: e.target.value})
//       }
//       className="border-2"type="text" placeholder="Name" />
//       <input  onChange={(e)=>
//         setFromData({...fromData ,email:e.target.value}
//         )}
//       className="border-2"type="text" placeholder="Email" />
//        <input  onChange={(e)=>
//         setFromData({...fromData,password:e.target.value})
//       }
//       className="border-2"type="text" placeholder="Password" />
//     </div>
//   );
// };

// export default Web;





//  iii) optimizzed approach




import { useState } from "react";

const Web = () => {

   const [fromData, setFromData] = useState({}) 

   const handleChange = (e)=>{
    setFromData({...fromData, [e.target.name]:e.target.value})
   }  
   console.log("formdata",fromData);
   

  return (
    <div className="flex flex-col gap-5 w-80" >
      <input name="name" onChange={handleChange}
      className="border-2"type="text" placeholder="Name" />
      <input name="email" onChange={handleChange}
      className="border-2"type="text" placeholder="Email" />
       <input name="password" onChange={handleChange}
      className="border-2"type="text" placeholder="Password" />
    </div>
  );
};

export default Web;
