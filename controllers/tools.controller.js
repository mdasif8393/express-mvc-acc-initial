module.exports.getAllTools = (req, res, next) => {
    // const {ip, query, params, body, headers} = req;
    // console.log(ip, query, params, body, headers);

    // res.download(__dirname + "/tools.controller.js")
    // res.json({"name": "abc"})
    res.send("Data found")
}

module.exports.saveATool = (req, res, next) => {
    res.send("Tool added")
}

module.exports.getToolDetail = (req, res, next) => {
    res.send("Tool detail found")
}
