get '/' do
	@languages = Language.all
	erb :index
end

post '/languages' do
	id = params[:language_id]
	if request.xhr?
		p params
		region = params[:regions]
		language = Language.where(regions: region)
		id = language.id
	end
	redirect "languages/#{id}"
end

#Send language object to JS
post '/languages/:region_code' do
	p "*" * 100
	p params
	language = Language.where(region_code: params[:region_code])
	language.to_json
end

get '/languages/:id' do
	# set current user
	current_user
	# set language to use
	@language = Language.find(params[:id])
	@length = Letter.count
	# render language page
	if @language.text_direction == "Left to Right"
		erb :ltr_language
	else
		erb :rtl_language
	end
end

get '/languages/:language_id/letters/:id' do
	letter = Letter.find(params[:id])
	letter.to_json
end

get '/languages/:language_id/words' do
	@language = Language.find(params[:language_id])
	if @language.text_direction == "Left to Right"
		erb :words
	else
		erb :rtl_words
	end
end

