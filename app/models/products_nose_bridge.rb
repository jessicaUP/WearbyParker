class ProductsNoseBridge < ApplicationRecord

  validates :nose_bridge_id, :product_id, presence: true

  has_many :joins,
    foreign_key: :nose_bridge_id,
    primary_key: :id,
    class_name: :NoseBridge

  has_many :products,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :Product

end