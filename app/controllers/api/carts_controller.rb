class Api::CartsController < ApplicationController

  def index
<<<<<<< HEAD
    # @cart = cart
    @cart =  Cart.find_by(id: session[:cart_id])

    if !@cart
      @cart = Cart.find_by(user_id: current_user.id) if current_user
      if !@cart
        @cart = Cart.create!
      end
    end
    session[:cart_id] = @cart.id
=======
    @cart = cart
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    @cart_items = @cart.cart_items
    @tryon_items = @cart.cart_tryon_items
    render :show
  end

<<<<<<< HEAD
  def destroy 
    @cart = Cart.find(params[:id])
    @cart.destroy
    render json: 'SUCCESS'
  end


=======
  def create
 
    @cart = cart
      

    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a

end