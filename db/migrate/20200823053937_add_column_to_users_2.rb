class AddColumnToUsers2 < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :type, :string
    add_column :users, :marker_type, :string
  end
end
