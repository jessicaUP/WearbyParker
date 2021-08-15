class Api::CartsController < ApplicationController

  def index
    # @cart = cart
    @cart =  Cart.find_by(id: session[:cart_id])

    if !@cart
      @cart = Cart.find_by(user_id: current_user.id) if current_user
      if !@cart
        @cart = Cart.create!
      end
    end
    session[:cart_id] = @cart.id
    @cart_items = @cart.cart_items
    @tryon_items = @cart.cart_tryon_items
    render :show
  end

  def destroy 
    @cart = Cart.find(params[:id])
    @cart.destroy
    render json: 'SUCCESS'
  end



end