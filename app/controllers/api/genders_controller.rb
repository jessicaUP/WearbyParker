class Api::GendersController < ApplicationController

  def show
    gender = Gender.find(params[:id]);
    @products = gender.products
    
    render :show
  end


end