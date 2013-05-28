class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :player, :default => 'Guest'
      t.integer :score

      t.timestamps
    end
  end
end
