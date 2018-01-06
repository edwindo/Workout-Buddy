class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.references :schedule, index:true
      t.references :workout, index:true
      t.integer :day_number
      t.timestamps
    end
  end
end
