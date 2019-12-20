import UserList from "./UserList.jsx";
import User from "./User.jsx";

export default class WhoWatch extends React.Component {
  state = { userName: false, users: this.props.users };

  logOut = () => {
    this.setState({
      userName: ""
    });
  };
  logIn = name => {
    this.setState({
      userName: name
    });
  };

  onDeleteClick = idx => {
    this.state.users.splice(idx, 1);
    this.setState(prevState => ({
      users: prevState.users
    }));
  };

  onAddClick = () => {
    let name = prompt("Enter Name");
    this.state.users.push(name);
    this.setState(prevState => ({
      users: prevState.users
    }));
  };

  getSelectd = () => {
    const { userName } = this.state;
    return (
      <div>
        <User user={userName} />
        <h3 className="pointer" onClick={this.logOut}>
          Logout
        </h3>
      </div>
    );
  };

  getList = () => {
    const { users } = this.state;
    return (
      <div className="flex">
        <UserList
          users={users}
          onDelete={this.onDeleteClick}
          onLogin={this.logIn}
        />
        <button onClick={this.onAddClick}>Add</button>
      </div>
    );
  };

  render() {
    const { userName } = this.state;

    return userName ? this.getSelectd() : this.getList();
  }
}
