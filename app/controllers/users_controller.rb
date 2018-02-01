class UsersController < ApplicationController
	def schedules
		@user = params[:id]
	end

	def new_schedule
		render file: 'app/views/users/new_schedule.html'
	end

	def create_schedule
		Schedule.create(name:params["scheduleName"], user_id:params["currUser"])
	end
end
