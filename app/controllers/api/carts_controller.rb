class Api::CartsController < ApplicationController

  def index
    @cart = Cart.find_by(user_id: current_user.id) || Cart.find(session[:cart_id])
    @cart_items = @cart.cart_items
    @tryon_items = @cart.cart_tryon_items
    render :show
  end

  def create
 
    @cart = Cart.find_by(user_id: current_user.id) || Cart.find(session[:cart_id])
    
    @cart = Cart.new(user_id: current_user.id) if !@cart
      

    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

end