let URL=require("url")

let uri="https://runkit.com/vygaio/utils"
let words="Lorem ipsum dolor sit amet, consectetur adipisicing elit"






/**
  * @method hostname
  * @param {string} uri - a url
  * @return {string} hostname
  *
  * Example:
  *   input => "https://runkit.com/vygaio/utils"
  *   output =>
*/


const hostname = (uri="") => {
    try {return new URL.parse(uri).hostname.split(".")[0]}
    catch (e) {return uri}
}









/**
  * @method domain
  * @param {string} uri - a url
  * @return {string} domain
  *
  * Example:
  *   input => "https://runkit.com/vygaio/utils"
  *   output => "runkit.com"
*/


const domain = (uri="") => {
    try {return new URL.parse(uri).hostname}
    catch (e) {return ""}
}










/**
  * Capitalize Each Word in string
  * @method titleCase
  * @param {string}
  * @return {string}
  *
  * Example:
  *   input => "hello world"
  *   output => "Hello World"
*/
const titleCase  =(s="")=> s.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ');



// titleCase(words)







/**
  * Capitalize Each Word in string
  * @method TitleCase
  * @param {string} s - input string
  * @param {string} f - search for substring
  * @param {string} r - replace substring
  * @return {string}
  *
*/

const replaceAll  =(s="",f="",r="")=>  s.replace(new RegExp(f.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), r)


// replaceAll(words,"o","@")//=>repaces all o's
// replaceAll(words,"o")//=>remove all o's







export {hostname,
domain,
titleCase,
replaceAll}
