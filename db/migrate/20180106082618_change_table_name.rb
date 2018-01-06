class ChangeTableName < ActiveRecord::Migration[5.1]
  def change
  	rename_table :workouts_to_exercises, :exercises_workouts
  end
end
