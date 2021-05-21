class Api::CartTryonItemsController < ApplicationController

  def create
    cart = Cart.find_by(user_id: current_user.id)
    @item = CartTryonItem.new(cart_item_params)
    @item.cart_id = cart.id

    render json: ['Your home try-on is full!'] if cart.tryon_cart_full?

    if @item.save
      @cart_items = cart.cart_items
      @tryon_items = cart.cart_tryon_items
      @frame_widths = cart.frame_widths
      render '/api/carts/show'
    else
      render json: @item.errors.full_messages, status: 401
    end

  end

  def update 
    @item = CartTryonItem.find(params[:id])
    if @item.update(cart_item_params)
      @cart_items = cart.cart_items
      @tryon_items = cart.cart_tryon_items
      render '/api/carts/show'
    else
      render json: @item.errors.full_messages, status: 401
    end
  end
  
  def destroy
    @item = CartTryonItem.find(params[:id])
    @item.destroy

    @cart_items = cart.cart_items
    @tryon_items = cart.cart_tryon_items
    render '/api/carts/show'
  end


  private

  def cart_item_params
    params.require(:cart_item).permit(:product_id, :quantity, :products_color_id, :frame_width_id)
  end

end