import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("child component did mount");
    //API CALL

    const data = await fetch("https://api.github.com/users/sivaram6411");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("child rendered");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user">
        <img src={avatar_url} className="git-image" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shivkhera</h4>
      </div>
    );
  }
}

export default UserClass;
