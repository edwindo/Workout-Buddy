class Day < ApplicationRecord
	belongs_to :schedule
	belongs_to :workout
end
