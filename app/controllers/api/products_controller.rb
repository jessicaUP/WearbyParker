class Api::ProductsController < ApplicationController

  def show
    @product = Product.find(params[:id])
    @frame_widths = @product.frame_widths
    @colors = @product.products_colors
    render :show
  end

  def index
    input = params['input']
    products1 = Product.where("name LIKE '%#{input.capitalize}%'")
    products2 = Product.where("name LIKE '%#{input}%'")
    @products = products1.or(products2)
    
    render :search_index
  end


end