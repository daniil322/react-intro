export default class MouseMove extends React.Component {
  state = { x: "", y: "" };

  onMouseMove = event => {
    const mouseX = event.screenX;
    const mouseY = event.screenY;

    this.setState({
      x: mouseX,
      y: mouseY
    });
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseMove);
  }

  componentWillUnmount() {
      document.removeEventListener('mousemove', this.onMouseMove);
  }

  render() {
    const { x, y } = this.state;

    return (
      <div>
        {x}:{y}
      </div>
    );
  }
}
