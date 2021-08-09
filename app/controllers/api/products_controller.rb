class Api::ProductsController < ApplicationController

  def show
    @product = Product.find(params[:id])
    @frame_widths = @product.frame_widths
    @colors = @product.products_colors
    render :show
  end

  def index
    @products = Product.all.where("name LIKE '%#{params['data']}%'")
    render :search_index
  end


end