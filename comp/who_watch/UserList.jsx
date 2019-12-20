import User from "./User.jsx";

export default class WhoWatch extends React.Component {
  render() {
    const { users, onDelete, onLogin } = this.props;

    return users.map((user, idx) => {
      return (
        <div key={user}>
          <div className="flex flexColmn pointer">
            <User user={user} onLogin={onLogin} />
          </div>
          <button onClick={() => onDelete(idx)}>Delete</button>
        </div>
      );
    });
  }
}
