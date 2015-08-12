def parse_farsi
	CSV.foreach("lib/farsi.csv", headers: true) do |row|
		Letter.create(
				name: 				row["name"],
				isolated: 		row["isolated"],
				initial: 			row["initial"],
				medial:   		row["medial"],
  			final: 				row["final"],
  			region_code:  row["region_code"],
  			sound_path: 	row["sound_path"],
  			language_id:  1
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

def parse_korean
	CSV.foreach("lib/korean.csv", headers: true) do |row|
		Letter.create(
			name: 		 			row["name"],
			isolated: 			row["isolated"],
			language_id: 		3
			)
	end
end

