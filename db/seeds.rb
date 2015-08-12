farsi = Language.create(
					language: 						"Persian-Farsi",
  				regions:  		        "Iran", 
  				language_family: 			"Indo-European, Persian",
  				language_note: 				"This language is so cool",
  				script_type: 					"Persian Alphabet",
  				text_direction: 			"Right-to-Left",
  				similar_languages: 		"Dari, Tajik, Hazaragi",
          region_code:          "IR"
  				)

russian = Language.create(
					language: 						"Russian",
  				regions:  		        "Russia", 
  				language_family: 			"Indo-European, Slavic",
  				language_note: 				"This language is so cool",
  				script_type: 					"Cyrillic",
  				text_direction: 			"Left to Right",
  				similar_languages: 		"Bulgarian",
          region_code:          "RU"
  				)

korean = Language.create(
          language:             "Korean",
          regions:              "South Korea", 
          language_family:      "Koreanic",
          language_note:        "This language is so cool",
          script_type:          "Hangul",
          text_direction:       "Left to Right",
          similar_languages:    "Jeju",
          region_code:          "KR"
          )

parse_farsi
parse_russian
parse_korean