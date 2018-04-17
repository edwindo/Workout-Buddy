class Workouts extends React.Component {
	constructor() {
		super();
		this.state = {
			workouts: []
		};
	}

	componentDidMount() {
		axios.get('api/workouts').then((response) => {
			this.setState({workouts: response.data});
		});
	}

	render() {
		const workouts = this.state.workouts.map((workout) => {
			return <WorkoutItem workout={workout}/>
		})
		return <div>Available Workout Details Listed Below<br/>{workouts}</div>
	}
}