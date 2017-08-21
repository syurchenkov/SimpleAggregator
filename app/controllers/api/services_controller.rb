class Api::ServicesController < ApplicationController
  before_action :set_service, only: [:show, :update, :destroy]

  def index 
    render json: Service.all
  end

  def show 
    render json: @service
  end

  def create 
    @service = Service.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { error: @service.errors.messages }, status: :bad_request
    end
  end

  def update
    if @service.update_attributes(service_params)
      render json: @service
    else
      render json: { error: @service.errors.messages }, status: :bad_request
    end
  end

  def destroy 
    @service.destroy
  end

  private 
    def service_params
      params.permit(:title)
    end

    def set_service
      @service = Service.find(params[:id])
    end
end
