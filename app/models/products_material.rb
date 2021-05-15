class ProductsMaterial < ApplicationRecord

  validates :material_id, :product_id, presence: true

  has_many :joins,
    foreign_key: :material_id,
    primary_key: :id,
    class_name: :Material

  has_many :products,
    through: :joins,
    source: :joins

end