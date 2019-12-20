import Home from "./pages/Home.jsx";
import Weather from "./comp/seasons.jsx";
import Timer from "./comp/timer.jsx";
import WhoWatch from "./comp/who_watch/WhoWatch.jsx";
import MouseMove from "./comp/mouseMove.jsx";

const pages = {
  Weather: "weather",
  WhoWatch: "who_watch",
  Timer: "timer",
  MouseMove: "mouse_move"
};

class App extends React.Component {
  state = {
    currentPage: "weather"
  };

  setPage = currentPage => {
    this.setState({ currentPage });
  };

  getPage = () => {
    const { currentPage } = this.state;

    if (currentPage === pages.MouseMove) {
      return <MouseMove />;
    }
    if (currentPage === pages.Weather) {
      return <Weather />;
    }
    if (currentPage === pages.Timer) {
      return <Timer targetTime={Date.now() + 1000 * 140} />;
    }
    if (currentPage === pages.WhoWatch) {
      return <WhoWatch users={["Daniel", "Boby", "Jonh", "Bob"]} />;
    }
  };

  render() {
    return (
      <main className='container flex flexColmn'>
        <div >
          <button onClick={() => this.setPage(pages.Weather)}>Weather</button>
          <button onClick={() => this.setPage(pages.MouseMove)}>MouseMOve</button>
          <button onClick={() => this.setPage(pages.Timer)}>Timer</button>
          <button onClick={() => this.setPage(pages.WhoWatch)}>WhoWatch</button>
        </div>
        {this.getPage()}
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
