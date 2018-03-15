class NewSchedule extends React.Component {
  constructor() {
    super();
    this.state = {
      scheduleName: "",
      days: [],
      workouts: [],
    };
  }

  handleSubmit() {
    axios.post('/users/schedules/create', {
      scheduleName: this.state.scheduleName,
      currUser: this.props.user.id,
      numDays: this.state.days.length,
      days: this.state.days,
    }).then((response) => {
      console.log(response);
    });

  }

  onUpdateName(event) {
    this.setState({scheduleName: event.target.value});
  }

  onSelectWorkout(index) {
    return (event) => {
      const days = this.state.days.slice();
      const day = {...this.state.days[index]};
      day.workout_id = event.target.value;
      days[index] = day;
      this.setState({days: days});
    };
  }

  newDay() {
    const days = this.state.days.slice();
    const day = {workout_id: null};
    days.push(day);
    this.setState({days: days});
  }

  componentDidMount() {
    axios.get('/api/workouts').then((response) => {
      this.setState({workouts: response.data})
    });
  }



  render() {
    const workoutList = this.state.workouts.map((workout, index) => {
      return (<option key={index} value={workout.id}>{workout.description}</option>)
    });
    const daysList = this.state.days.map((day, index) => {
      return (<select key={index} onChange={this.onSelectWorkout(index).bind(this)}>
                <option key={-1} value={null}>(Select a workout)</option>
                {workoutList}
              </select>)
    });
    return (
    	<div className="nameInput">
        Create a New Schedule Here
        <br/>
        <label>
          Name:
          <br/>
         <input type="text" name="name" onChange={this.onUpdateName.bind(this)}/>
        </label>
        <br/>
        {daysList}
        <br/>
        <button onClick={this.newDay.bind(this)}>
        +
        </button>	
        <br/>
        <button onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
        
    	</div>
    );
  }
}
