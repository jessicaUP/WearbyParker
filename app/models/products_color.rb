class ProductsColor < ApplicationRecord

  validates :color_id, :product_id, :color_id, presence: true

  belongs_to :color,
    foreign_key: :color_id,
    primary_key: :id,
    class_name: :Color

  belongs_to :product,
  foreign_key: :product_id,
  primary_key: :id,
  class_name: :Product

end