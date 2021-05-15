class UpdateColor < ActiveRecord::Migration[5.2]
  def change
    add_column :products_colors, :color_name, :string, null: false
    remove_column :products, :color_name
  end
end
