class AddOwnerUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :owner_name, :string
    add_column :users, :address, :string
    add_column :users, :open_time, :string
    add_column :users, :close_time, :string
    add_column :users, :url, :string
    add_column :users, :feature, :string
    add_column :users, :owner_images, :string
  end
end
