class DeleteTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :cart_tryon_items
  end
end
