class CartTryonItem < ApplicationRecord

  validates :cart_id, :product_id, :products_frame_width_id, presence: true
 
  belongs_to :cart,
    foreign_key: :cart_id,
    primary_key: :id,
    class_name: :Cart

  belongs_to :product,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :Product

  belongs_to :products_frame_width,
    foreign_key: :products_frame_width_id,
    primary_key: :id,
    class_name: :ProductFrameWidth

      
  belongs_to :products_color,
    foreign_key: :products_color_id,
    primary_key: :id,
    class_name: :ProductsColor 

end