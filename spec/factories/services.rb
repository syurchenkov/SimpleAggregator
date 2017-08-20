FactoryGirl.define do
  sequence :service_name do |n|
    "service_name#{n}"
  end

  factory :service do
    name { FactoryGirl.generate :service_name }
  end
end
