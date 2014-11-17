class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render json: @user
    else
      head :unprocessable_entity
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      head :unprocessable_entity
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :role)
  end
end
