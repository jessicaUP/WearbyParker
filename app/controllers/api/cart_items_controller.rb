class Api::CartItemsController < ApplicationController

  def create
    
    @cart =  Cart.find_cart(session[:cart_id], current_user)
    session[:cart_id] = @cart.id

    @item = CartItem.create(cart_item_params)
    @item.update({ cart_id: @cart.id })

    if @item.save!
      @cart_items = @cart.cart_items
      @tryon_items = @cart.cart_tryon_items
      render 'api/carts/show'
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
    @cart =  Cart.find_cart(session[:cart_id], current_user)
    session[:cart_id] = @cart.id
    @cart_items = @cart.cart_items
    @tryon_items = @cart.cart_tryon_items
    render '/api/carts/show'
  end




  private

  def cart_item_params
    params.require(:cartItem).permit(:product_id, :price, :products_color_id, :products_frame_width_id, :prescription_type, :lense_type, :lense_material)
  end

end