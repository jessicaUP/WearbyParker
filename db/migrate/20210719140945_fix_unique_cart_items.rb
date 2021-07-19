class FixUniqueCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_index :cart_items, :cart_id
    add_index :cart_items, :cart_id

  end
end
