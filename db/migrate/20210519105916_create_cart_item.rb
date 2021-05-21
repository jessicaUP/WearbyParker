class CreateCartItem < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :cart_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.integer :frame_width_id, null: false
      t.string :prescription_type, null: false
      t.string :prescription_method, null: false
      t.string :lense_type, null: false
      t.string :lense_material, null: false

      t.timestamps
    end
    add_index :cart_items, :cart_id, unique: true
    add_index :cart_items, :product_id, unique: true
  end
end
