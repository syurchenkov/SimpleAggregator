class Api::AuthenticationController < ApplicationController
  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render json: { auth_token: command.result[:auth_token], user: { email: command.result[:user].email, admin: command.result[:user].admin }  }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end
