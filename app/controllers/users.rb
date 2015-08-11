get '/users/new' do
  erb :signup, layout: false
end

# post variables don't persist between routes/http requests
post '/users' do
  user = User.new(email: params[:email], password: params[:password_hash])
  if user.save
  	session[:id] = user.id #session persists
  	redirect '/'
  else
    @error = {signup_error: "Either you already have an account or your password is too short!"}
    erb :signup
  end
end

get '/users/:id' do
  if current_user?
    erb :user
  else
    redirect '/'
  end
end
