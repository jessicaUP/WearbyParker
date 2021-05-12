class User < ApplicationRecord

  attr_reader :password

  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  before_validation :ensure_sessioin_token

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

  def ensure_sessioin_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end
    

end