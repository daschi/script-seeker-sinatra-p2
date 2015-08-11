class Letter < ActiveRecord::Base
  belongs_to :card
  belongs_to :language
end
