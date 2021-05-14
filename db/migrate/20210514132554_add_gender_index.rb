class AddGenderIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :genders, :gender
  end
end
