/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0, i , love1, love2 ;
  var arr = [];
  for (var j = 0; j<preferences.length; j++)
  arr[j] = false;

  for (i =0, love1 = 0, love2 = 0;i<preferences.length; i++)
  { love1 = preferences[i];
      love2 = preferences[love1 - 1];
    if (arr[i]==false && arr[love1-1]==false && arr[love2-1]==false)
    { 
      if (preferences[love2 - 1] == i+1 && love1!=love2)
      {
        arr[i] = true;
        arr[love1 - 1] = true;
        arr[love2 - 1] = true;
        count++;
      }
    } 
  }
 return count;
};
