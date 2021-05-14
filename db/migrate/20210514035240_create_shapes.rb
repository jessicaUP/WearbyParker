class CreateShapes < ActiveRecord::Migration[5.2]
  def change
    create_table :shapes do |t|
      t.string :shape, null: false
    end
  end
end
