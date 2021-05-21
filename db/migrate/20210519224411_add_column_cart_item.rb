class AddColumnCartItem < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :color_id, :integer
    add_column :cart_tryon_items, :color_id, :integer
  end
end
