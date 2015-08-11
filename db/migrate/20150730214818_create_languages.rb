class CreateLanguages < ActiveRecord::Migration
  def change
  	create_table :languages do |t|
  		t.string		:language
  		t.string		:countries_spoken
  		t.string		:language_family
  		t.string		:language_note
  		t.string		:script_type
  		t.string		:text_direction
  		t.string		:similar_languages
  	end
  end
end
