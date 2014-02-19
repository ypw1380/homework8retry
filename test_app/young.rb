require 'sinatra'

get "/home" do 
	"Hello World young"
end

get "/pers" do 
	erb :personalwebsite
end

get "/con" do 
	erb :contact
end

get "/exper" do 
	erb :experiences
end

get "/interests" do 
	erb :interests
end