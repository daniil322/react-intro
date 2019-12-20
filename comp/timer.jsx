export default class Timer extends React.Component {
  state = { time: this.props.targetTime, interval: null };
  audio = new Audio("./sound/done.mp3");
  decrement = () => {
    this.setState(state => ({
      time: state.time - 1
    }));
  };

  myInterval = () => {
    const interval = setInterval(() => {
      this.decrement();
      if ((this.state.time - Date.now()) / 1000 <= 0) {
        clearInterval(interval);
        this.audio.play();
      }
    }, 1000);

    this.setState({interval})
  };

  componentDidMount() {
    this.myInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { time } = this.state;
    const sec = parseInt((time - Date.now()) / 1000);
    const min = parseInt(sec / 60);

    const divClassName = sec <= 10 && min === 0 ? "red" : null;

    return (
      <div className={divClassName}>
        {min} : {sec % 60}
      </div>
    );
  }
}
