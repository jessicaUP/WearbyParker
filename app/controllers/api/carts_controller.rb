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

  # def create
 
  #   @cart = cart
  #   @cart.update({ user_id: current_user }) if current_user
      

  #   if @cart.save
  #     render :show
  #   else
  #     render json: @cart.errors.full_messages, status: 422
  #   end
  # end

end