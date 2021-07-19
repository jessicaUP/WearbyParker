class FixCartUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :user_id
    add_column :carts, :user_id, :integer
  end
end
