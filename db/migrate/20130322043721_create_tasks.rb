class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title, :null => false
      t.boolean :finished

      t.timestamps
    end
  end
end
