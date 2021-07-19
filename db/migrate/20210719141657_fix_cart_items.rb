class FixCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_index :cart_items, :product_id
    add_index :cart_items, :product_id
  end
end
