class AddSetsToExercises < ActiveRecord::Migration[5.1]
  def change
  	add_column :exercises, :sets, :integer
  end
end
