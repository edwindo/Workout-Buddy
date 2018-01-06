class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.text :exercise_name
      t.integer :repetitions
      t.timestamps
    end
  end
end
