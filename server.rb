require 'sinatra'
require 'json'
require 'active_record'

set :public_folder, 'client'

configure :development do
	ActiveRecord::Base.establish_connection( :adapter => 'sqlite3', :database =>  'reactorprep.sqlite3')
end

configure :production do
	db = URI.parse(ENV['DATABASE_URL'] || 'postgres://localhost/mydb')
	ActiveRecord::Base.establish_connection(
			:adapter => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
			:host     => db.host,
			:username => db.user,
			:password => db.password,
			:database => db.path[1..-1],
			:encoding => 'utf8'
	)
end

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

class Submission < ActiveRecord::Base
end

post '/submission' do
  Submission.create(params)
end

get '/data' do
	Submission.where.not(name: 'null').group_by(&:name).to_json
end
