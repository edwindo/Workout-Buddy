class Api::UsersController < ApplicationController
	def schedules
		user = User.find(params[:id])
		render :json => user.schedules
	end
end
