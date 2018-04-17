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
      return <div><div>{schedule.name}</div><div>{schedule.num_days}</div></div>
    });
    return (<div>{schedules}<br/><a href='/users/schedules/new'>Create New Schedule</a></div>);
  }


}