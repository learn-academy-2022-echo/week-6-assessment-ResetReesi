# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) what is the application and controller and what does Index do in the application controller. The application contoller is the logical ceneter for your application. It coordiantes the interaction between the user, the views and the model. The controller is also the home to a number of assisting services. It is also responsible for routing external request to internal actions. Index will display all the content
class BlogPostsController < ApplicationController
  def index
    # ---2) BlogPost.all will show us all the users BlogPost
    @posts = BlogPost.all
  end

  # ---3) Show will display specific content. Using BlogPost.find(params[:id]) is to indicate exactly what blog post you are looking for
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) New returns an html form for creating New content that the user will input. For example if a new user is signing up for your application for the firts time.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) when we use create it used to creat new objects or content and it saves it to the database. You can also add validations at the point. for example if you do not want to a user to not use profanity you can set certain validation in your application to guarantee no profanity. you can also redirect the user to the blog post if valid or to creat a new valid post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end$

  def edit
    # ---6) Edit returns an html element for editing content. below is an example exapmle of exactly what post should or is being edited
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Update is use to update a specific content and if the the content is valid then they may move forward to the next page otherwise direct the user back to the edit blog post path
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Destroy is to delete specific content. redirect_to blog_post_path(@post) I believe it means to take to back to thre original @post page 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private if I can remember is a section just for the developers and only we can see this section. It allows hackers to stay away, It allows you to have full control over your methods
  private
  def blog_post_params
    # ---10) params require means in order for a blog post to be created or uploaded it need to have a title and some content in order to proceed
    params.require(:blog_post).permit(:title, :content)
  end
end
