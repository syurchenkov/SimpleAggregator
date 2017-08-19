FactoryGirl.define do 
  sequence :email do |n|
    "person#{n}@example.com"
  end
   
  factory :user do
    email { FactoryGirl.generate :email }
    password 'password'
    password_confirmation 'password'

    factory :invalid_user do 
      email  'invalid_user.com'
    end

    factory :admin do 
      admin true
    end
  end 
end