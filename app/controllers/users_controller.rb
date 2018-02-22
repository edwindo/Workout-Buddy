class UsersController < ApplicationController
	def schedules
		@user = params[:id]
	end

	def new_schedule
		render file: 'app/views/users/new_schedule.html'
	end

	def create_schedule
		schedule = Schedule.create(name: params["scheduleName"], user_id: params["currUser"], num_days: params["numDays"])
		if schedule
			params["days"].each_with_index do |day, i|
				Day.create(day_number: i, workout_id: day["workout_id"], schedule: schedule)
			end
		end
	end
end
