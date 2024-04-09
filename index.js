var http = require('http')

const os = require('os');
const util = require('util');

http.createServer(function (req, res){
    res.write("Hello");
    //res.write(util.inspect(nets, false, null, true));
    res.write("\n-----------------\n");
    res.write("address ");
    res.write(os.networkInterfaces().lo[0].address);
    res.write("\nhostname ");
    res.write(os.hostname());
    res.write("\nversion ");
    res.write(process.env.V);
    res.end();
}).listen(8080);
