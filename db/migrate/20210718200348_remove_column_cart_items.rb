class RemoveColumnCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :prescription_method
  end
end
