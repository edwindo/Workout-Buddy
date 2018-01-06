class UsersController < ApplicationController
	def schedules
		@user = params[:id]
	end
end
