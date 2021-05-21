class Api::CartsController < ApplicationController

  def index
    @cart = current_user.cart
    @cart_items = @cart.cart_items
    @tryon_items = @cart.cart_tryon_items
    render :show
  end

  def create
    @cart = Cart.new(user_id: current_user.id)
    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

end