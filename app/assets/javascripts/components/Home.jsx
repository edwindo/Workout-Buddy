class Home extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    this.setState({
      subtitle: "poop",
    });
  }

  render() {
    return (
    	<div>
    		<p>Sign In Below!</p>
    		<a href="/users/sign_in">GAMEEEE</a>
    	</div>
    );
  }
}