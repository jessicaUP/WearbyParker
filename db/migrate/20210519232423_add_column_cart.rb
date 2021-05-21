class AddColumnCart < ActiveRecord::Migration[5.2]
  def change
    add_column :frame_widths, :description, :text
  end
end
