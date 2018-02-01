class NewSchedule extends React.Component {
  constructor() {
    super();
    this.state = {
      scheduleName: "",
      days: [],
    };
  }

  handleSubmit() {
    axios.post('/users/schedules/create', {
      scheduleName: this.state.scheduleName,
      currUser: this.props.user.id
    }).then((response) => {
      console.log(response);
    });

  }

  onUpdateName(event) {
    this.setState({scheduleName: event.target.value});
  }

  newDay() {
    const days = this.state.days.slice();
    const day = {workout_id: null};
    days.push(day);
    this.setState({days: days});
  }

  render() {
    const daysList = this.state.days.map((day) => {
      return (<select>
                <option value="game">Game</option>
              </select>)
    })
    return (
    	<div className="nameInput">
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
