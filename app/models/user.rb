class User < ApplicationRecord

  attr_reader :password

  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  # validates_format_of :name, :with => " "
  validates_format_of :email, :with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

  before_validation :ensure_session_token
  after_validation :ensure_cart

  has_many :cart,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :Cart

  has_many :cart_items,
    through: :carts,
    source: :cart_items
    
  has_many :cart_tryon_items,
    through: :carts,
    source: :cart_tryon_items


  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    if @user && @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  def is_password?(password)
    pwObject = BCrypt::Password.new(self.password_digest)
    pwObject.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    self.save
  end

  def generate_session_token
     SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  
  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end
  
  def ensure_cart
    self.cart || self.cart = Cart.new(user_id: self.id)
  end

end