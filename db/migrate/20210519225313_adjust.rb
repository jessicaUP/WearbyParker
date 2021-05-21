class Adjust < ActiveRecord::Migration[5.2]
  def change
    rename_column :cart_items, :color_id, :products_color__id
    rename_column :cart_tryon_items, :color_id, :products_color__id

    rename_column :cart_items, :frame_width_id, :products_frame_width_id
    rename_column :cart_tryon_items, :frame_width_id, :products_frame_width_id
  end
end
