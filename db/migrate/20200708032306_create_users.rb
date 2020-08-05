class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :image_name
      t.integer :route1_id
      t.integer :route2_id
      t.integer :route3_id

      t.timestamps
    end
  end
end
