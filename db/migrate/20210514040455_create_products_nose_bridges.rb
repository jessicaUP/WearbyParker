class CreateProductsNoseBridges < ActiveRecord::Migration[5.2]
  def change
    create_table :products_nose_bridges do |t|
      t.integer :product_id, null: false
      t.integer :nose_bridge_id, null: false
    end
  end
end
