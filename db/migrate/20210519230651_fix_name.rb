class FixName < ActiveRecord::Migration[5.2]
  def change
    rename_column :cart_items, :products_color__id, :products_color_id
    rename_column :cart_tryon_items, :products_color__id, :products_color_id
  end
end
