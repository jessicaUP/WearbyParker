Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:show, :index]
    resources :genders, only: [:show, :index]
    resources :carts, only: [:index, :create, :update, :destroy]
    resources :cart_items, only: [:create, :update, :destroy]
    resources :cart_tryon_items, only: [:create, :update, :destroy]
  end
end
