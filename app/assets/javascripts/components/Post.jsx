class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: "",
    };
  }

  handleClick() {
    this.setState({
      subtitle: "poop",
    });
  }

  render() {
    return <h1 onClick={this.handleClick.bind(this)}> {this.props.title} {this.state.subtitle} </h1>
  }
}