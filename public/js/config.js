
// var BASE_URL = 'http://192.168.20.28:8877/education/'
// var BASE_URL = 'http://192.168.20.28:8877/edu/'
var baseurlMap={
    '192.168.20.25:8877': 'http://192.168.20.25:8877/manage/',
    'localhost:8877': 'http://localhost:8877/manage/',
    '192.168.30.211:16888': 'http://192.168.30.211:16888/',
    '60.190.245.75:58088': 'http://60.190.245.75:58088/qc/admin/'
};
var host = window.location.host;
var BASE_URL =baseurlMap[host];

var PDF_URL = 'http://192.168.30.211:8082/ftp-server/action/getImage?'