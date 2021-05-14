class CreateNoseBridges < ActiveRecord::Migration[5.2]
  def change
    create_table :nose_bridges do |t|
      t.string :nose_bridge, null: false
    end
  end
end
