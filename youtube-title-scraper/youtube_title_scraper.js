module.exports = function(id) {

    const request = require('request');
    const regex = /(?<=title%22%3A%22).*?(?=%22%2C%22lengthSeconds)/
    let url = 'https://www.youtube.com/get_video_info?html5=1&video_id=' + id;

    request(url, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

        let regexMatch = body.match(regex);
        let remove_input = String(regexMatch)
        console.log(remove_input)

        let test = decodeURIComponent(remove_input);
        console.log(test)

        let res = test.replace(/\+(\+*)/g, " $1 ");

        console.log(res)

        title = res.replace(/\s\s+/g, ' ');

        console.log(title)
    });
}
