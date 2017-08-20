require 'rails_helper'

RSpec.describe Api::AuthenticationController, type: :controller do
  let!(:user){ create(:user) }
  context 'send authenticate request' do 
    before { post :authenticate, params: { email: user.email, password: password } }

    context 'valid credentials' do 
      let(:password) { 'password' }
      subject{ response.body }

      it { have_json_path('auth_token') }
    end

    context 'invalid credentials' do 
      let(:password) { '1234567890' }

      it 'has error path' do 
        expect(response.body).to have_json_path('error/user_authentication')
      end

      it 'has unauthorized status' do 
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
