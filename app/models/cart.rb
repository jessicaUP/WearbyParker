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
    self.cart_tryon_items.length >= 5
  end

  def self.find_cart(session_cart, current_user)
    cart = Cart.find_by(id: session_cart)

    
    total_count = cart.cart_items.length + cart.cart_tryon_items.length if cart

    if !cart || total_count === 0
      cart = Cart.find_by(user_id: current_user.id) if current_user
      cart = Cart.create if !cart
    end

    return cart
  end


end