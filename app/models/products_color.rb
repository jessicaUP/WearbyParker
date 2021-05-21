class ProductsColor < ApplicationRecord

  validates :color_id, :product_id, :color_id, presence: true

  belongs_to :color,
    foreign_key: :color_id,
    primary_key: :id,
    class_name: :Color

  belongs_to :product,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :Product

  has_many :cart_items,
    foreign_key: :products_color_id,
    primary_key: :id,
    class_name: :CartItem

  has_many :cart_tryon_items,
    foreign_key: :products_color_id,
    primary_key: :id,
    class_name: :CartTryonItem


  #AWS

  has_one_attached :photo0
  has_one_attached :photo1
  has_one_attached :photo2
  has_one_attached :photo3
  has_one_attached :photo4


end