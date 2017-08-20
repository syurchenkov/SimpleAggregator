require 'rails_helper'

RSpec.describe Service, type: :model do
  context 'validations' do 
    subject{ build :service }

    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_length_of(:name).is_at_most(255) }
    it { is_expected.to validate_uniqueness_of(:name).case_insensitive }
  end

  context 'when name in mixed case' do 
    let(:mixed_case_name) { "sErviCe wHeels" }
    let(:service){ create(:service, name: mixed_case_name) }

    it "save name in lower-case" do
      expect(service.reload.name).to be == mixed_case_name.downcase
    end
  end
end
