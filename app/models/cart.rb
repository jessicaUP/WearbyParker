class Cart < ApplicationRecord 

  belongs_to :user,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :User

  has_many :cart_items,
    foreign_key: :cart_id,
    primary_key: :id,
    class_name: :CartItem
    
  has_many :cart_tryon_items,
    foreign_key: :cart_id,
    primary_key: :id,
    class_name: :CartTryonItem


  def tryon_cart_full?
    self.cart_tryon_items.length == 5
  end


end