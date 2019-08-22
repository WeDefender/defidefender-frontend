import fetch from 'cross-fetch'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

/**
 * 返回已经调用了.json()的Promise对象，后序自己再用then取回数据即可
 * @param {url} API endpoint
 */
export const fetch_get_helper_async = async (url) => {
    try {
        return await fetch(url).then(
            response => response.json()
        )
    } catch (error) {
        return console.log("Error occured", error);
    }
}

// 返回已经json化的Promise对象，在异步action creator中再用then取出数据即可
export const fetch_get_helper = (url) => {
    return fetch(url).then( response => response.json() )
}

/**
 * @param {body} dictory
 * @param {url} API endpoint
 */
// export const fetch_post_helper = async (url, body) => {
//     try {
//         const response = await fetch(url, {
//                 method: 'POST',
//                 headers: headers,
//                 body: body
//             }
//         ).then(response => response.json())

//         return response

//     } catch (error) {
//         return console.log("Error Occured", error);
//     }
// }
export const fetch_post_helper = (url, body) => {
    return fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        }
        ).then(response => response.json())
}



// 同步GET
// fetch('//api.github.com/users/lquixada')
//     .then(res => {
//         if (res.status >= 400) {
//             throw new Error("Bad response from server");
//         }
//         return res.json();
//     })
//     .then(user => {
//         console.log(user);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// 异步

// (async () => {
//     try {
//         const res = await fetch('//api.github.com/users/lquixada');

//         if (res.status >= 400) {
//             throw new Error("Bad response from server");
//         }

//         const user = await res.json();

//         console.log(user);
//     } catch (err) {
//         console.error(err);
//     }
// })();

// POST请求
// fetch("http://example.com/api/endpoint/", {
//     method: "post",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },

//     //make sure to serialize your JSON body
//     body: JSON.stringify({
//         name: myName,
//         password: myPassword
//     })
// }).then((response) => {
//         //do something awesome that makes the world a better place
// });

