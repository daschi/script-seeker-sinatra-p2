# Purpose: To display the right to left alphabets in right to left order. To be continued.

helpers do 

def rtl_reverse
	ltr_letters = Letter.all 
	ltr_letters.each_slice(3).to_a
	

end

end