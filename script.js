function firstNonRepeatedChar(str) {
	const charCount={};
	for(let i=0;i<str.length;i++){
		const char = str[i];
		if (charCount[char] === undefined) {
		    charCount[char] = 1;
		} 
		else {
		    charCount[char]++;
		}
		for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
