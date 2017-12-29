





![MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![github](https://img.shields.io/github/stars/garrettmac/lowbar.svg)
![lowbar issues](https://img.shields.io/issuestats/p/github/garrettmac/lowbar.svg)
![github](https://img.shields.io/github/forks/garrettmac/lowbar.svg)
![twitter](https://img.shields.io/twitter/url/https/github.com/garrettmac/lowbar.svg)
![lowbar](https://badges.gitter.im/garrettmac/lowbar.svg)

# lowbar


All of the lodash function with a couple extras
## Installation

- Install `lowbar` first

```bash
yarn add lowbar
```



## Setup 

### with babel 

in your `.babelrc`

Using [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

```json
{
  ...
  "plugins": [
    ["module-resolver",
        "alias": {
          "lodash": "lowbar"
        }
    ]
  ]
  ...
}
        
```
## Extra Functions


### Strings


####  _.titleCase()

makes each word of string uppercase

First argument - string.




*Example*

```jsx
import _ from 'lowbar'; // or from 'lodash' with alias
// const _ = require("lowbar").default; // for es5
let text = "hello world"

_.titleCase(text);
// => Hello World
```



####  _.replaceAll()



First argument - input string.

Second argument - search sub-string

Third argument - replace sub-string

  



*Example*

```jsx
import _ from 'lowbar'; // or from 'lodash' with alias

let url = "https://github.com/garrettmac/lowbar"

_.replaceAll(url, 'b');
// => https://githu.com/garrettmac/lowar

_.replaceAll(url, 'b', '🤙');
// => https://githu🅱️.com/garrettmac/low🅱️ar
```

####  _.domain()

gets domain name of url

First argument - url.


*Example*

```jsx
import _ from 'lowbar'; // or from 'lodash' with alias

let url = "https://github.com/garrettmac/lowbar"

_.domain(url);
// => Github.com
```

####  _.hostname()

gets hostname name of url

First argument - url.


*Example*

```jsx
import _ from 'lowbar'; // or from 'lodash' with alias

let url = "https://github.com/garrettmac/lowbar"

_.hostname(url);
// => Github
```



### Objects

####  _.removeFalsy()

removes falsy false from object 

*Example*

```jsx
import _ from 'lowbar'; // or from 'lodash' with alias

let obj = { 
            und:undefined,
            num:123123, 
            nul: null, 
            fal: false, 
            empy: '',
            string:"myString",
            zero: 0
        };

_.removeFalsy(obj);
// => {num: 123123, string: "myString"}
```

####  _.getFirstOf()

same as _.get() except you can pass multipul arguments to in an array and it will return the first.

First argument - object.

Second argument - array of `_.get()` paths to properties.

Third argument - default if no matches found.


*Example*

```jsx
import _ from 'lowbar'; // or from 'lodash' with alias

let obj = { 
            parent:{
              name: "bob"
            },
            children:[
              {name: "sally", age: 30}
            ]
        };

_.getFirstOf(obj, ['parent.name','children[0].name']);
// => bob // got first match, this was parent name
_.getFirstOf(obj, ['children[0].name','parent.name']);
// => sally // got first match, this was children name
_.getFirstOf(obj, ['parent.age','children[0].age']);
// => 30 // no parent age so got children age
_.getFirstOf(obj, ['parent.lastName','children[0].lastName'], "saget");
// => saget // no parent lastName, no children lastName so got default
_.getFirstOf(obj, ['parent.middleName','children[0].middleName']);
// => undefinded // no middleName from parent or children
```



### Util

####  _.make()

builds a lodash function for you.

First argument - is your value.

2nd argument to infinity - functions you want apply to first argument.

*Example*

```jsx
import _ from 'lowbar'; // or from 'lodash' with alias

let url = "https://github.com/garrettmac/lowbar"

_.make(url, _.domain, _.titleCase); // same as _.titleCase(_.domain(url))


output >> Github.com


```


# Contributing
Please share what you got and make a pr!
