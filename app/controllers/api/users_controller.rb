class Api::UsersController < ApplicationController

  def create 
    @user = User.new(user_params)
    if @user.save
      Cart.create!(user_id: @user.id)
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end