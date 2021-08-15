class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user 
      login!(@user)
<<<<<<< HEAD
      cart =  Cart.find_by(id: session[:cart_id]) || Cart.find_by(user_id: current_user.id)
      # if !cart
      #   cart = Cart.create 
      #   cart.update({ user_id: cart.id })
      # end
      session[:cart_id] = cart.id
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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