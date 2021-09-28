class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user 
      login!(@user)
      cart = Cart.find_cart(session[:cart_id], current_user)
      session[:cart_id] = cart.id
      cart.update({ user_id: @user.id })
      render 'api/users/show'
    else
      render json: ["The information you entered is incorrect. Try again or reset your password."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: ["You're now signed-out"]
        # status code?
    else
      render json: ["Not logged in"]
        # status code?
    end
  end



end