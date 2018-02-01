import { Link } from 'react-router';

class Home extends React.Component {
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
    return (
    	<div>
    		<p>Sign In Below!</p>
    		<Link to="/users/sign_in">GAMEEEE</Link>
    	</div>
    );
  }
}