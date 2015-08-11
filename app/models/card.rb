class Card < ActiveRecord::Base
	has_many :usercards
  has_many :users, through: :usercards
  has_one :letter
end
