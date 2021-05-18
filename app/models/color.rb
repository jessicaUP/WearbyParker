class Color < ApplicationRecord

  validates :color, presence: true
  validates :color, inclusion: { in: ['Black', 'Tortoise', 'Two-tone', 'Red', 
    'Crystal', 'Grey', 'Brown', 'Silver', 'Gold', 'Blue' , 'Pink', 'Green'] }

  has_many :products_colors,
    foreign_key: :color_id,
    primary_key: :id,
    class_name: :ProductsColor

  has_many :products,
    through: :products_colors,
    source: :product

  has_many_attached :photos


end