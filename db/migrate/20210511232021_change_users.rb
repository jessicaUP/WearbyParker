class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name
    add_column :users, :name, :string
    add_index :users, :name
  end
end
