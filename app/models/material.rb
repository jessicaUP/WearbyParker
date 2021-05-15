class Material < ApplicationRecord

  validates :material, presence: true
  validates :material, inclusion: { in: ['Acetate', 'Metal', 'Mixed'] }

  has_many :joins,
    class_name: :ProductsMaterial,
    foreign_key: :material_id,
    primary_key: :id

  has_many :products,
    class_name: :Products,
    through: :joins,
    source: :joins

end