class UserSchedules extends React.Component {
  constructor() {
    super();
    this.state = {
      schedules: []
    };
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.user}/schedules`).then((response) => {
      this.setState({schedules: response.data});
    });
  }

  render() {
    const schedules = this.state.schedules.map((schedule) => {
      return <div>{schedule.name}</div>
    });
    return (<div>{schedules}</div>);
  }


}