class CreateProductsMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :products_materials do |t|
      t.integer :product_id, null: false
      t.integer :material_id, null: false
    end
  end
end
