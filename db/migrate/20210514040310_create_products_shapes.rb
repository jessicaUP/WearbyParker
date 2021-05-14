class CreateProductsShapes < ActiveRecord::Migration[5.2]
  def change
    create_table :products_shapes do |t|
      t.integer :product_id, null: false
      t.integer :shape_id, null: false
    end
  end
end
