Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :index, :show]
    resource :session, only: [:create, :destroy]
<<<<<<< HEAD
    resources :products, only: [:show, :index]
    resources :genders, only: [:show, :index]
=======
    resources :products, only: [:show]
    resources :genders, only: [:show]
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    resources :carts, only: [:index, :create, :update, :destroy]
    resources :cart_items, only: [:create, :update, :destroy]
    resources :cart_tryon_items, only: [:create, :update, :destroy]
  end
end
