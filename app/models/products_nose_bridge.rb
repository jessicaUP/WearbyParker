class ProductsNoseBridge < ApplicationRecord

  validates :nose_bridge_id, :product_id, presence: true

  belongs_to :nose_bridge,
    foreign_key: :nose_bridge_id,
    primary_key: :id,
    class_name: :NoseBridge

  belongs_to :product,
  foreign_key: :product_id,
  primary_key: :id,
  class_name: :Product

end