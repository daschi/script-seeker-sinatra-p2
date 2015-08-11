class CreateLetters < ActiveRecord::Migration
  def change
  	create_table :letters do |t|
      t.string    :name
      t.string    :isolated
  		t.string		:initial
  		t.string		:medial
  		t.string		:final
      t.string    :ipa
      t.string    :region_code
      t.string    :sound_path
  		t.integer		:language_id
  		t.integer		:card_id
      
  	end
  end
end
