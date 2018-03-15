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
    const loggedIn = this.props.logged;
    let welcome = null;
    if (loggedIn) {
      welcome = <div><p>You are logged in as {this.props.user.email}</p></div>;
    } else {
      welcome = <div><p>Sign in below!</p><a href="/users/sign_in">GAMEEEE</a></div>;
    }
    return (
      <div>
    	{welcome}
      </div>
    );
  }
}