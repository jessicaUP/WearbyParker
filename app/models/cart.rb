class Cart < ApplicationRecord 

  belongs_to :user,
<<<<<<< HEAD
    optional: true,
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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