class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.string :material, null: false
    end
  end
end
