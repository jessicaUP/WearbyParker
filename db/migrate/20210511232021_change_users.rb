class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_last_name
    add_column :users, :name, :string, uniqueness: true
    add_index :users, :name
  end
end
