class CreateWorkoutsExercisesJoinTable < ActiveRecord::Migration[5.1]
  def change
  	create_table :workouts_to_exercises, id: false do |t|
  		t.integer :workout_id
  		t.integer :exercise_id
  	end

  	add_index :workouts_to_exercises, :workout_id
  	add_index :workouts_to_exercises, :exercise_id
  end
end
