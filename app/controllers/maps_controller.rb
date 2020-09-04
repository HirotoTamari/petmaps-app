class MapsController < ApplicationController

  def index
    if @current_user
      @route1 = Route.find_by(id: @current_user.route1_id)
      @route2 = Route.find_by(id: @current_user.route2_id)
      @route3 = Route.find_by(id: @current_user.route3_id)
    end
    @user = User.find_by(id: 20);

    @users = User.all

    @users.each do |user_type|
      if user_type.marker_type
        @user_type = user_type
      end
    end
  end

  #mapアクション
  def map
    respond_to do |format|
      format.js
    end
  end

  def about
  end
end
