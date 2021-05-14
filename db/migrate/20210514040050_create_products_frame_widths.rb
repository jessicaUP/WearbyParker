class CreateProductsFrameWidths < ActiveRecord::Migration[5.2]
  def change
    create_table :products_frame_widths do |t|
      t.integer :product_id, null: false
      t.integer :frame_width_id, null: false
    end
  end
end
