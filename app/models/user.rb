class User < ApplicationRecord
    has_secure_password
    
    #0文字になればヴァリデーション
    validates :name, {presence: true}
    validates :email, {presence: true, uniqueness: true}

    has_many :sns_credentials, dependent: :destroy

    devise :database_authenticatable, :registerable,
            :recoverable, :rememberable, :validatable,
            :omniauthable, omniauth_providers: %i[facebook google_oauth2]
end
