class ProductsFrameWidth < ApplicationRecord

  validates :frame_width_id, :product_id, presence: true

  has_many :joins,
    foreign_key: :frame_width_id,
    primary_key: :id,
    class_name: :FrameWidth

  has_many :products,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :Product

end