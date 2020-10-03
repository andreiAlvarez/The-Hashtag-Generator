// solution 1

function generateHashtag (str) {
  let newArray = str.split(' ').filter(char => char !== "");
 
  if (newArray.length === 0) {
    return false;
  };
  let result = "#";
  result = result + newArray.map(word => {
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
  }).join('');
  
  if(result.length > 140) {
    return false;
  } else{
    return result;
  };
}

//solution 2 

const generateHashtag = str => str.length > 140 || str.length < 1 ? false : ('# ' + str).trim().replace(/(\s\w)/g, ($0, $1) => $1.slice(1).toUpperCase());
