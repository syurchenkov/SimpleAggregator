class CarService < ApplicationRecord
  validates :name, presence: true, length: { maximum: 255 }
  validates :address, presence: true, length: { maximum: 255 }

  VALID_PHONE_REGEX = /\A\+?[\d-]*\z/
  validates :phone, presence: true, length: { maximum: 255 }, format: { with: VALID_PHONE_REGEX }
end
