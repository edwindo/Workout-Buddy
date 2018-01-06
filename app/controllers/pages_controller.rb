class PagesController < ApplicationController
	def index
		render file: 'app/views/pages/index.html.erb'
	end

	def exer
		@exercises = Exercise.all
		render file: 'app/views/exercises/index.html.erb'
	end
end
