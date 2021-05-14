class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :gender_id, null: false
      t.string :name, null: false
      t.string :color_name, null: false
      t.text :details, null: false
      t.float :price, null: false
    end
    add_index :products, :gender_id
    add_index :products, :name
    add_index :products, :price
  end
end
