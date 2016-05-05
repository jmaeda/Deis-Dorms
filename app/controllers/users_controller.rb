class UsersController < ApplicationController
  skip_before_action :authorize, only: [:new, :create]
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  # before_action :set_s3_direct_post, only: [:new, :edit, :create, :update, :show]

  # GET /users/1
  # GET /users/1.json
  def show
    puts params
    @current = User.find_by id: session[:user_id]
    gon.user = Hash.new
    gon.user["pref_price"] = @current.pref_price
    gon.user["pref_size"] = @current.pref_size
    gon.user["pref_clean"] = @current.pref_clean
    gon.user["pref_noise"] = @current.pref_noise
    gon.user["pref_location"] = @current.pref_location
    gon.user["pref_ac"] = @current.pref_ac
    gon.user["pref_social"] = @current.pref_social

    @rooms = Array.new
    @rooms.push(Room.find(@current.choice_one)) if @current.choice_one != nil
    @rooms.push(Room.find(@current.choice_two)) if @current.choice_two != nil
    @rooms.push(Room.find(@current.choice_three)) if @current.choice_three != nil
    @rooms.push(Room.find(@current.choice_four)) if @current.choice_four != nil
    @rooms.push(Room.find(@current.choice_five)) if @current.choice_five != nil

    @positives = get_positives(@rooms)
    @negatives = get_negatives(@rooms)

    @buildings = Array.new
    @quads = Array.new
    @rooms.each do |room|
      building = Building.find(room.building_id)
      @buildings.push(building)
      @quads.push(Quad.find(building.quad_id))
    end

    if @current.pref_room_type
      if @current.pref_room_type.include? "single"
        gon.user["single"] = true
      else
        gon.user["single"] = false
      end

      if @current.pref_room_type.include? "double"
        gon.user["double"] = true
      else
        gon.user["double"] = false
      end

      if @current.pref_room_type.include? "triple"
        gon.user["triple"] = true
      else
        gon.user["triple"] = false
      end

      if @current.pref_room_type.include? "suite"
        gon.user["suite"] = true
      else
        gon.user["suite"] = false
      end
    else
      gon.user["single"] = false
      gon.user["double"] = false
      gon.user["triple"] = false
      gon.user["suite"] = false
    end
  end

  def find_rooms
    @rooms = Array.new
    @rooms = Room.individual_search(params)
    @buildings = Array.new
    @quads = Array.new
    @rooms.each do |room|
      building = Building.find(room.building_id)
      @buildings.push(building)
      @quads.push(Quad.find(building.quad_id))
    end
    @current = User.find_by id: session[:user_id]

    #create hash for setting user preferences with only specific fields
    u_params = Hash.new
    u_params[:pref_price] = params[:pref_price]
    u_params[:pref_size] = params[:pref_size]
    u_params[:pref_clean] = params[:pref_clean]
    u_params[:pref_noise] = params[:pref_noise]
    u_params[:pref_location] = params[:pref_location]
    u_params[:pref_ac] = params[:pref_ac]
    u_params[:pref_social] = params[:pref_social]
    u_params[:housing_number] = params[:housing_number]
    u_params[:pref_year] = params[:pref_year]
    u_params[:pref_gender] = params[:pref_gender]
    u_params[:pref_bedtime] = params[:pref_bedtime]
    u_params[:pref_room_type] = params[:room_type]

    @rooms.size > 0 ? u_params[:choice_one] = @rooms[0].id : u_params[:choice_one] = nil
    @rooms.size > 1 ? u_params[:choice_two] = @rooms[1].id : u_params[:choice_two] = nil
    @rooms.size > 2 ? u_params[:choice_three] = @rooms[2].id : u_params[:choice_three] = nil
    @rooms.size > 3 ? u_params[:choice_four] = @rooms[3].id : u_params[:choice_four] = nil
    @rooms.size > 4 ? u_params[:choice_five] = @rooms[4].id : u_params[:choice_five] = nil

    respond_to do |format|
      if @current.update_attributes(u_params)
        format.js
      else
        #put errors here
      end
    end
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    begin
      @user.destroy
      flash[:notice] = "User #{@user.name} was successfully deleted"
    rescue StandardError => e
      flash[:notice] = e.message
    end
    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { head :no_content }
    end
  end

  def create
    if(params[:password_confirmation] == params[:password])
      @user = User.new(user_params)
      respond_to do |format|
        if @user.save
          format.html { redirect_to root_path}
	        format.json { render action: 'show', status: :created, location: @user }
        else
          format.html { render action: 'new' }
          format.json { render json: @user.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  def update
    respond_to do |format|
      # puts @user.icon
      if @user.update(user_params)
        # puts "UPDATE USER"
        # puts @user.icon
        format.html { redirect_to user_path(session[:user_id])}
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @user.errors,
          status: :unprocessable_entity }
      end
    end
  end

  def index
    @users = User.order(:user_name)
  end

  private
    def get_positives(rooms)
    end

    def get_negatives(rooms)
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:user_name, :password, :password_confirmation, :email, :icon)
    end

  # private
  #   def set_s3_direct_post
  #     @s3_direct_post = S3_BUCKET.presigned_post(key: "user/#{session[:user_id]}/${filename}", success_action_status: '201', acl: 'public-read')
  #   end
 end
