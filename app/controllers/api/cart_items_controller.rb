class Api::CartItemsController < ApplicationController

  def create
    
    user_cart = Cart.find_by(user_id: current_user.id)
    @item = CartItem.new(cart_item_params)
    @item.cart_id = user_cart.id
    
    if @item.save
      @cart_items = user_cart.cart_items
      @tryon_items = user_cart.cart_tryon_items
      render '/api/carts/index'
    else
      render json: @item.errors.full_messages, status: 401
    end

  end

  def update 
    @item = CartItem.find(params[:id])
    
    if @item.update(cart_item_params)
      @cart_items = cart.cart_items
      @tryon_items = cart.cart_tryon_items
      render '/api/carts/show'
    else
      render json: @item.errors.full_messages, status: 401
    end
  end
  
  def destroy
    @item = CartItem.find(params[:id])
    @item.destroy
  end


  private

  def cart_item_params
    params.require(:cart_item).permit(:product_id, :quantity, :color_id, :frame_width_id, :prescription_type, :prescription_method, :lense_type, :lense_material)
  end

end