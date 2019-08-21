import fetch from 'cross-fetch'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

/**
 * @param {url} API endpoint
 */
export const fetch_get_helper = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        return console.log("Error occured", error);
    }
}

/**
 * @param {body} dictory
 * @param {url} API endpoint
 */
export const fetch_post_helper = async (url, body) => {
    try {
        const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: body
            }
        )
        return await response.json()
    } catch (error) {
        return console.log("Error Occured", error);
    }
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

