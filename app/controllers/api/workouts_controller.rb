class Api::WorkoutsController < ApplicationController
	def index
		render :json => Workout.all
	end
end
