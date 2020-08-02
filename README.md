## 나중에 게시판 만들때 객체 배열 매핑할때 참고할 것
<hr/>
<br/>

## 만드는 과정

1. Create Entry Component
2. Create Props to replace hardcoded data
3. Import the emojipedia const
3. Map through the emojipedia array and render Entry components
<hr/>
<br/>

## MAP ES6
1. Map -Create a new array by doing something with each item in an array.
<br/>
다음 두 코드는 같은 아웃풋이 나옴
<br/>
<pre>
var nums = [3, 56, 2, 48, 2];
function double(x){
    return x*2;
}
const newNums = nums.map(double); //output
</pre>

<pre>
var nums = [3, 56, 2, 48, 2];
var newNums = [];
function double(x){
    newNums.push(x*2);
}
nums.push(double);
</pre>
2. Filter - Create a new array by keeping the items that return true.
3. Reduce - Accumulate a value by doing something to each item in an array.
4. Find - find the first item that matches from an array.
5. FindIndex - find the index of the first item that matches.

<hr/>