class Api::CartsController < ApplicationController

  def index
    # @cart = cart
    @cart = Cart.find_cart(session[:cart_id], current_user)
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