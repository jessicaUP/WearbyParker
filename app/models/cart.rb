class Cart < ApplicationRecord 

  validates :user_id, presence: false

  belongs_to :user,
    optional: true,
    required: false,
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