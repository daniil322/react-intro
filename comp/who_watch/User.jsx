export default class WhoWatch extends React.Component {
  render() {
    const { user, onLogin } = this.props;

    return (
      <div>
        <img
          className="netflix "
          onClick={onLogin ? () => onLogin(user) : null}
          key={user}
          src="./img/1.png"
        />
        <h3>{user}</h3>
      </div>
    );
  }
}
