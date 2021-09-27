class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user, :logged_in?, :cart
  
  # CURRENT USER
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def ensure_logged_in
    unless current_user
      render json: { base: ['The information you entered is incorrect. Try again or reset your password.'] }, status: 401
    end
  end

  def login!(user)
    session[:session_token] = user.session_token
    # session[:cart] = Cart.find_by(user_id: user.id) || Cart.create().id
    # SHOPPING CART IN COOKIE
  end
  
  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    session[:cart_id] = nil

    @current_user = nil
  end

  # CART
  def cart
    if current_user
      @cart = Cart.find_by(user_id: current_user.id)
    elsif session[:cart_id]
      @cart = Cart.find(session[:cart_id])
    else 
      @cart = Cart.create()
      session[:cart] = @cart.id
      @cart.user_id = current_user.id if current_user
    end
    return @cart
  end

end
