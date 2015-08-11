get '/sessions/new' do
	erb :login, layout: false
end

post "/sessions" do
  user = User.find_by(email: params[:email])
  if user && user.password == params[:password]
    session[:id] = user.id
    { success: true,
      email: user.email}.to_json
  else
    { success: false, 
      login_error: "Your email or password is incorrect"
     }.to_json
  end
end

get '/logout' do
  session[:id] = nil
  redirect '/'
end
