class Home extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
  }

  render() {
    const loggedIn = this.props.logged;
    let welcome = null;
    if (loggedIn) {
      welcome = <div><p>You are logged in as {this.props.user.email}</p><a href={`/users/${this.props.user.id}/schedules`}>View Schedules</a></div>;
    } else {
      welcome = <div><p>Sign in below!</p><a href="/users/sign_in">Sign In</a></div>;
    }
    return (
      <div>
    	{welcome}
      
      </div>
    );
  }
}