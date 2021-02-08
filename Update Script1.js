var http=require("http");
function onRequest(request,response)
{
response.weiteHead(200,{'content-Type':'text/plain'});
response.write('Hello world');
response.end();

http.createServer(onRequest).listen(8000);
