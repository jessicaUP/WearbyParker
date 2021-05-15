class ProductsMaterial < ApplicationRecord

  validates :material_id, :product_id, presence: true

  belongs_to :material,
    foreign_key: :material_id,
    primary_key: :id,
    class_name: :Material

  belongs_to :product,
  foreign_key: :product_id,
  primary_key: :id,
  class_name: :Product

end