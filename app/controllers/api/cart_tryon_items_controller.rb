class Api::CartTryonItemsController < ApplicationController

  def create
    @cart =  Cart.find_by(id: session[:cart_id]) || Cart.find_by(user_id: current_user.id)
    
    if !@cart
      @cart = Cart.create
      session[:cart_id] = @cart.id
    end

    render json: ['Your home try-on is full!'] if cart.tryon_cart_full?
    
    @item = CartTryonItem.create(cart_item_params)
    @item.update({ cart_id: @cart.id })

    if @item.save!
      @cart_items = @cart.cart_items
      @tryon_items = @cart.cart_tryon_items
      # @frame_widths = cart.frame_widths
      render json: ['Added']
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
    params.require(:cartTryonItem).permit(:product_id, :products_color_id, :products_frame_width_id)
  end

end