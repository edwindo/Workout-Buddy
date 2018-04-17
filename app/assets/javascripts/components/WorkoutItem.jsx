class WorkoutItem extends React.Component {
	constructor() {
		super();
		this.state = {
			showExercises: false
		}
	}

	handleClick = ()=> {
		this.setState({showExercises: !this.state.showExercises})
	}

	render() {
		const exercises = this.state.showExercises ? this.props.workout.exercises.map((exercise) => {
			return (
				<div className="exerciseDescription">
					{exercise.exercise_name}<br/>
					Repetitions: {exercise.repetitions}<br/>
					Sets: {exercise.sets}<br/>
					Weight: {exercise.weight}
				</div>)
		}) : null;
		return <div onClick={this.handleClick}>{this.props.workout.description}{exercises}</div>
	}
}