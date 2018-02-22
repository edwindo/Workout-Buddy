Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api do
  	get 'users/:id/schedules' => 'users#schedules'

  	get 'workouts' => 'workouts#index'
  end

  get 'users/:id/schedules' => 'users#schedules'

  get 'users/schedules/new' => 'users#new_schedule'

  post 'users/schedules/create' => 'users#create_schedule'

end
