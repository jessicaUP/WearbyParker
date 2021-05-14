class ProductsColor < ApplicationRecord

  validates :color_id, :product_id, presence: true

  has_many :joins,
    foreign_key: :color_id,
    primary_key: :id,
    class_name: :Color

  has_many :products,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :Product

end