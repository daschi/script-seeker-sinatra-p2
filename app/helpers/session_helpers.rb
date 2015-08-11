helpers do

  def current_user
    @current_user ||= User.find_by(id: session[:id])
  end

  def logged_in?
  	!session[:id].nil?
  end

  def current_user?
  	@user = User.find(params[:id])
  	@user == current_user 
  end

end
