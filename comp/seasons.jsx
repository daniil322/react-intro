const SEASONS = {
  0: "winter",
  1: "winter",
  2: "spring",
  3: "spring",
  4: "spring",
  5: "summer",
  6: "summer",
  7: "summer",
  8: "fall",
  9: "fall",
  10: "fall",
  11: "winter"
};

export default class Weather extends React.Component {
  state = {
    season: SEASONS[new Date().getMonth()],
    isBlack: false
  };

  handleImgClick = () => {
    this.setState(state => ({
      isBlack: !state.isBlack
    }));
  };

  render() {
    const { isBlack, season } = this.state;
    const divClassName = this.state.isBlack ? "black" : null;
    const imgUrl = `./img/${season}.png`;

    return (
      <div className={divClassName}>
        {<img onClick={this.handleImgClick} src={imgUrl} />}
      </div>
    );
  }
}
