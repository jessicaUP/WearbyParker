class AddNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column :carts, :user_id, :integer, :null => true
  end
end
