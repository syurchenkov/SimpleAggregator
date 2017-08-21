require 'rails_helper'

RSpec.describe Api::ServicesController, type: :controller do

  context do 
    context 'get show' do
      let!(:service) { create(:service) } 
      before{ get :show, params: { id: service.id } }
      subject{ response.body }

      it { is_expected.to have_json_path('data/id') }
      it { is_expected.to have_json_path('data/attributes/name') }
    end

    context 'get index' do 
      let!(:service) { create(:service) } 
      let!(:service2) { create(:service) }

      before{ get :index }
      subject{ response.body }

      it { is_expected.to have_json_path('data') }
      it { is_expected.to have_json_type(Array).at_path('data') }
      it { is_expected.to have_json_path('data/0/id') }
      it { is_expected.to have_json_path('data/0/attributes/name') }
      it { is_expected.to have_json_path('data/1/id') }
      it { is_expected.to have_json_path('data/1/attributes/name') }
    end

    context 'post create' do 
      before{ post :create, params: { name: service_name } }

      context 'valid name' do 
        let(:service_name) { "service name" }
        subject{ response.body } 

        it { is_expected.to have_json_path('data/id') }
        it { is_expected.to have_json_path('data/attributes/name') } 
      end

      context 'invalid name' do 
        let(:service_name) { "" }
        subject{ response.body } 

        it { is_expected.to have_json_path('error') }
      end
    end

    context 'destroy' do 
      let!(:service) { create(:service) }
      
      it 'remove service' do
        expect{ delete :destroy, params: { id: service.id} }.to change{ Service.count }.by(-1)
      end 
    end
  end
end
