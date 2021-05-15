class Shape < ApplicationRecord

  validates :shape, presence: true
  validates :shape, inclusion: { in: ['Rectangle', 'Square', 'Round', 'Cat-eye', 'Aviator'] }
  
  has_many :joins,
  foreign_key: :shape_id,
  primary_key: :id,
  class_name: :ProductsShape
  
  has_many :products,
      through: :joins,
      source: :product
  
end