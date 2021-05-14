class ProductsShape < ApplicationRecord

  validates :shape_id, :product_id, presence: true

  has_many :joins,
    foreign_key: :shape_id,
    primary_key: :id,
    class_name: :Shape

  has_many :products,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :Product

end