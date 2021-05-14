class AddGender < ActiveRecord::Migration[5.2]
  def change
    add_column :genders, :gender, :string, null: false
  end
end
