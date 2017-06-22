class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.string :name
      t.string :url
      t.string :exercise
      t.text :code

      t.timestamps
    end
  end
end
