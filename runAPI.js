const http = require("https");

const options = {
	"method": "GET",
	"hostname": "mashvisor-api.p.rapidapi.com",
	"port": null,
	"path": "/property?state=CA",
	"headers": {
		"X-RapidAPI-Key": "0869c6090dmsh0d4038873497ab0p1a5651jsn7066b5525964",
		"X-RapidAPI-Host": "mashvisor-api.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();