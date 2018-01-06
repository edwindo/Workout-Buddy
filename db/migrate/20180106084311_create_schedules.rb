class CreateSchedules < ActiveRecord::Migration[5.1]
  def change
    create_table :schedules do |t|
      t.text :name
      t.integer :num_days
      t.references :user, index:true
      t.timestamps
    end
  end
end
