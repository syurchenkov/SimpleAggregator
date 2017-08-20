Rails.application.routes.draw do
  namespace :api do
    post '/auth', to: 'authentication#authenticate'
  end
  root 'layouts#index'
  get '*path' => 'layouts#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
