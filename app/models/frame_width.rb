class FrameWidth < ApplicationRecord

  validates :frame_width, presence: true
  validates :frame_width, inclusion: { in: ['Extra narrow', 'Narrow', 'Medium', 'Wide', 'Extra wide'] }

  has_many :products_frame_widths,
    foreign_key: :frame_width_id,
    primary_key: :id,
    class_name: :ProductsFrameWidth

  has_many :products,
    through: :products_frame_widths,
    source: :product

  has_many :cart_item,
    through: :products_frame_width,
    source: :frame_width,
    class_name: :CartItem


end