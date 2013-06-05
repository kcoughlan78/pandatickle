class Game < ActiveRecord::Base
  attr_accessible :player, :score

  validates :player, :presence => true,
            :length => { :maximum => 11 }

end
