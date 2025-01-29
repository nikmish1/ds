//replace vowels at even places
/* 0 = 1, 1 = 2, 2 = 3, 3 = 4 */
const vowels = ['a', 'e', 'i', 'o', 'u'];

const replaceVowels = (str) => {
  //const strArr = str.split("");
  let res = "";
  
  for(let i = 0 ; i < str.length ; i++) {
     const indexToReplace = (i + 1) % 2 === 0;
    
     const charV = str[i];
      console.log(charV.toLowerCase(), indexToReplace, "--->", i);
     if(indexToReplace && vowels.includes(charV.toLowerCase())) {
       res += "*";
     }else {
     res += charV;
     }
     
  } 
  return res;
}

console.log(replaceVowels("India"));
