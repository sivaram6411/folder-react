import UserClass from "./UserClass";
import UserFun from "./UserFun";
import { Component } from "react";

const About = () => {
  return (
    <div className="border bg-slate-200">
      <h1 className="font-medium text-lg m-2">About us page</h1>
      <h2 className="font-medium text-base m-2">
        Hello, this shiva am creating react web page
      </h2>
      <UserFun name={"Shivaramakrishna(functional)"} location={"Hyderabad"} />
    </div>
  );
};

// class About extends Component {
//   constructor(props) {
//     super(props);
//     // console.log("parent constructor");
//   }

//   componentDidMount() {
//     // console.log("parent component did mount");
//   }

//   render() {
//     // console.log("parent rendered");
//     return (
//       <div>
//         <h1>About us page</h1>
//         <h2>Hello, this shiva am creating react web page</h2>

//         <UserClass name={"Shivaramakrishna(class)"} location={"Hyderabad"} />
//       </div>
//     );
//   }
// }
export default About;
