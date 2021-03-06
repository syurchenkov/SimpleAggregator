Rails.application.routes.draw do
  namespace :api do
    post '/auth', to: 'authentication#authenticate'

    resources :services
    resources :car_services
  end

  root 'application#application'
  
  get '*path' => 'application#application'

end
