class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user, :logged_in?
  
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
    # session[:cart] ||= Cart.create().id
    # SHOPPING CART IN COOKIE
  end
  
  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

end
