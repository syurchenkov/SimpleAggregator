Rails.application.routes.draw do
  namespace :api do
    post '/auth', to: 'authentication#authenticate'

    resources :services, only: [:index, :show, :create, :update, :destroy]
  end

  root 'application#application'
  
  get '*path' => 'application#application'

end
