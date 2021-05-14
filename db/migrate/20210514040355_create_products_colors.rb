class CreateProductsColors < ActiveRecord::Migration[5.2]
  def change
    create_table :products_colors do |t|
      t.integer :product_id, null: false
      t.integer :color_id, null: false
    end
  end
end
