class Material < ApplicationRecord

  validates :material, presence: true
  validates :material, inclusion: { in: ['Acetate', 'Metal', 'Mixed'] }

  has_many :joins,
    foreign_key: :material_id,
    primary_key: :id,
    class_name: :ProductsMaterial

  has_many :products,
    through: :joins,
    source: :joins

end