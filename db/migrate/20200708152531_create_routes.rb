class CreateRoutes < ActiveRecord::Migration[6.0]
  def change
    create_table :routes do |t|
      t.string :route_name
      t.string :function_name
      t.string :image_name
      
      t.timestamps
    end
  end
end
