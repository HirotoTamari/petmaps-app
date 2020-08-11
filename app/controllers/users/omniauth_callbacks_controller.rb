# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  # You should configure your model like this:
  # devise :omniauthable, omniauth_providers: [:twitter]

  # You should also create an action method in this controller like this:
  # def twitter
  # end

  # More info at:
  # https://github.com/heartcombo/devise#omniauth

  # GET|POST /resource/auth/twitter
  # def passthru
  #   super
  # end

  # GET|POST /users/auth/twitter/callback
  # def failure
  #   super
  # end

  # protected

  # The path used when OmniAuth fails
  # def after_omniauth_failure_path_for(scope)
  #   super(scope)
  # end

  # def facebook
  #   callback_from :facebook
  # end

  # def google_oauth2
  #   callback_from :google
  # end

  # def callback_from(provider)
  #   provider = provider.to_s
  #   @user = User.find_for_oauth(request.env['omniauth.auth'])

  #   if @user.persisted?
  #     flash[:notice] = I18n.t('devise.omniauth_callbacks.success', kind: provider.capitalize)
  #     sign_in_and_redirect @user, event: :authentication
  #   else
  #     session[:name] = @user.name
  #     session[:email] = @user.email
  #     session[:password] = @user.password
  #     session[:provider] = @user.provider
  #     session[:uid] = @user.uid
  #     redirect_to("/users/#{@user.id}")
  #   end
  # end
end
