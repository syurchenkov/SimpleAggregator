require 'rails_helper'

RSpec.describe CarService, type: :model do
  context 'validations' do 
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_length_of(:name).is_at_most(255) }
    it { is_expected.to validate_presence_of :address }
    it { is_expected.to validate_length_of(:address).is_at_most(255) }
    it { is_expected.to validate_presence_of :phone }
    it { is_expected.to validate_length_of(:phone).is_at_most(255) }
  end
end
