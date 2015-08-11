def parse_farsi
	CSV.foreach("lib/farsi.csv", headers: true) do |row|
		Letter.create(
				name: 				row["name"],
				isolated: 		row["isolated"],
				initial: 			row["initial"],
				medial:   		row["medial"],
  			final: 				row["final"],
  			language_id:  1,
  			region_code:  row["region_code"],
  			sound_path: 	row["sound_path"]
		)
	end
end

def parse_russian
	CSV.foreach("lib/russian.csv", headers: true) do |row|
		Letter.create(
				isolated: 		row["isolated"],
  			language_id:  2
		)
	end
end
