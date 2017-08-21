class Api::CarServicesController < ApplicationController
  before_action :set_car_service, only: [:show, :update, :destroy]

  def index 
    render json: CarService.all
  end

  def show 
    render json: @car_service
  end

  def create 
    @car_service = CarService.new(car_service_params)
    if @car_service.save
      render json: @car_service
    else
      render json: { error: @car_service.errors.messages }, status: :bad_request
    end
  end

  def update
    if @car_service.update_attributes(car_service_params)
      render json: @car_service
    else
      render json: { error: @car_service.errors.messages }, status: :bad_request
    end
  end

  def destroy 
    @car_service.destroy
  end

  private 
    def car_service_params
      params.permit(:name, :address, :phone)
    end

    def set_car_service
      @car_service = CarService.find(params[:id])
    end
end
