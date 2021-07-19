class Api::CartItemsController < ApplicationController

  def create
    
    @cart =  Cart.find_by(id: session[:cart_id]) || Cart.find_by(user_id: current_user.id)
    # @item.cart_id = user_cart.id
    # debugger
    # user_cart ||= Cart.create!

    if !@cart
      @cart = Cart.new
      session[:cart_id] = @cart.id
    end

    @item = CartItem.create(cart_item_params)
    @item.update({ cart_id: @cart.id })
 

    
    if @item.save!
      @cart_items = @cart.cart_items
      @tryon_items = @cart.cart_tryon_items
      # redirect_to :controller => 'carts', :action => :index
      render :show
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
    params.require(:cartItem).permit(:product_id, :price, :products_color_id, :products_frame_width_id, :prescription_type, :lense_type, :lense_material)
  end

end