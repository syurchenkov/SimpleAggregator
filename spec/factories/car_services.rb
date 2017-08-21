FactoryGirl.define do
  factory :car_service do
    name { Faker::Beer.name }
    address { Faker::Address.street_address }
    phone "+799-9999-9999"
  end
end
