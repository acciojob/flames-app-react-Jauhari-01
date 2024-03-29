import React, {Component, useState} from “react”;
import ‘…/styles/App.css’;
const App = () => {
const[name1,setName1] = useState(“”);
const[name2,setName2] = useState(“”);
const OnChange1 = (event) => {
setName1(event.target.value);
}
const OnChange2 = (event) => {
setName2(event.target.value);
}
const BtnClicked = () => {
let ans = name1.(name2);
console.log(ans);
}
return(
    <div id="main">
       {/* Do not remove the main div */}
       <input placeholder="Enter first name" onChange={OnChange1} />
       <input placeholder="Enter second name" onChange={OnChange2} />
       <button onClick={BtnClicked}>Calculate Relationship future</button>
       <button>Clear</button>
    </div>
)

}
export default App;

