class User < ActiveRecord::Base
	include BCrypt
	has_many :usercards
  has_many :cards, through: :usercards

	EMAIL_REGEX = /\A[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\Z/i

	validates :email, :presence => true, :uniqueness => true, :format => EMAIL_REGEX
  validates :password_hash, :presence => true

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

end
