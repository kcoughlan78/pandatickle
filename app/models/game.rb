class Game < ActiveRecord::Base
  attr_accessible :player, :score

  validates :player, :presence => true

end
