class CreateCards < ActiveRecord::Migration
  def change
  	create_table :cards do |t|
  		t.integer		:letter_id
  		t.integer		:view_count
  	end
  end
end
