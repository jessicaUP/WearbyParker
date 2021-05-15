class ProductsFrameWidth < ApplicationRecord

  validates :frame_width_id, :product_id, presence: true

  belongs_to :frame_width,
    foreign_key: :frame_width_id,
    primary_key: :id,
    class_name: :FrameWidth

  belongs_to :product,
  foreign_key: :product_id,
  primary_key: :id,
  class_name: :Product

end