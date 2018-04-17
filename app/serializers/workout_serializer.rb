class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :description
  has_many :exercises
end
