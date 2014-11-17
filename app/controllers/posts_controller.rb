class PostsController < ApplicationController

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render json: @post
    else
      head :unprocessable_entity
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created
    else
      head :unprocessable_entity
    end
  end

  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end

end
