class Api::ProductsController < ApplicationController

  def show
    @product = Product.find(params[:id])
    @frame_widths = @product.frame_widths
    @colors = @product.products_colors
    render :show
  end

  def index
    input = params['input']
    @products = Product.where("name LIKE '%#{input.capitalize}%' OR name LIKE '%#{input}%'")
    @products = @products.where(gender_id: 1)
    
    render :search_index
  end


end