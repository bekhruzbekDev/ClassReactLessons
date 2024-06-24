import { Component } from "react";
import { Form } from "./Form";

export class App extends Component {
  state = {
    count: 0,
    users:[]
  };
  componentDidMount (){
    //yomponet yaralganda faqat 1 marta ishlaydi
    fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json()).then(data=>this.setState({users:this.users=data}))
  }
  componentDidUpdate(){
    //companenet yangilangdanda ishlaydi
    console.log("did update");
  }
  componentWillUnmount(){
    //component ulish jarayonida ishlaydi
    console.log("will unmount");
  }
  render() {
    // console.log(this.state.count);
    console.log(this.state.users);
    return (
      <>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({count :this.state.count+1});
          }}
        >
          click
        </button>
        <Form/>
      </>
    );
  }
}




