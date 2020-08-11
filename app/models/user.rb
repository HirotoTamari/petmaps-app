class User < ApplicationRecord
    has_secure_password
    
    #0文字になればヴァリデーション
    validates :name, {presence: true}
    validates :email, {presence: true, uniqueness: true}

    # devise :database_authenticatable, :registerable,
    #     :recoverable, :rememberable, :validatable,
    #     :omniauthable, omniauth_providers: %i[facebook google_oauth2]

    #     def self.find_for_oauth(auth)
    #         user = User.where(uid: auth.uid, provider: auth.provider).first
        
    #         unless user
    #             user = User.create(
    #                 uid:      auth.uid,
    #                 provider: auth.provider,
    #                 name:     auth.info.name,
    #                 email:    User.dummy_email(auth),
    #                 password: Devise.friendly_token[0, 20]
    #             )
    #         end
        
    #         user
    #     end
        
    #     private
        
    #     def self.dummy_email(auth)
    #         "#{auth.uid}-#{auth.provider}@example.com"
    #     end
end
