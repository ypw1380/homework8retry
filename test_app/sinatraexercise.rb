require 'sinatra'

get "/home" do 
	erb :home
end


get "/icecream" do 
	"You must really like ice cream"
end


get "/cake" do 
	"You must really like cake"
end