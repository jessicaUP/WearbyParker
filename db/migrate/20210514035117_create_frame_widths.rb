class CreateFrameWidths < ActiveRecord::Migration[5.2]
  def change
    create_table :frame_widths do |t|
      t.string :frame_width, null: false
    end
  end
end
