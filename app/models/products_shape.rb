class ProductsShape < ApplicationRecord

  validates :shape_id, :product_id, presence: true
    
  belongs_to :shape,
  foreign_key: :shape_id,
  primary_key: :id,
  class_name: :Shape

  belongs_to :product,
  foreign_key: :product_id,
  primary_key: :id,
  class_name: :Product

    
end