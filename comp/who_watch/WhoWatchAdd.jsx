export default class Modal extends React.Component {
  state = { value: "" };

  onAdd = event => {
    const { toggle, addUser } = this.props;
    event.preventDefault();
    const name = this.state.value;
    if (!name) return;
    addUser(name);
    toggle();
  };

  onInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { modal, toggle } = this.props;
    let modalClass = modal ? "modal-inline" : "modal-none";
    modalClass += " modal";

    return (
      <div className={modalClass}>
        <div className="modalMain">
          <form onSubmit={this.onAdd}>
            <div className="flex">
              Name:{" "}
              <input
                type="text"
                onChange={this.onInputChange}
                name="FirstName"
              />
              <h3 className='pointer' onClick={toggle}>X</h3>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
