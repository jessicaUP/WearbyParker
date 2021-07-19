class AddPriceRemoveQuantityCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :quantity
    add_column :cart_items, :price, :float
  end
end
