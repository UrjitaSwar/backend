//Entry point must come!

// console.log("urjita Swar Rait Internship")

//Whatever changes we have done to see that we need to restart it.
//so we use nodemon, it is noice.


//Whatever we have installed is local (and hence writing nodemon index.js gives us errors) and we need to put -g to make it global.

// console.log("2023")


var http=require('http');


//--------------------------------module
var data=require('./Test')
var url=require('url');

//---------------------------------------------
http.createServer(function(req,res){
    //client requested something and the server responded


    //Now for the below line of code, we can consider status codes.. you know http ones like 404 and stuff.
    // res.writeHead(200,{'Content-Type':'application/json'})

    res.writeHead(200,{'Content-Type':'text/html'});

    //The application/json for the api...

//the data var came from the modules section
    res.write("<h1>RAIT</h1> "+data.TestModule())
    res.write("<br>")
    res.write(res.url);

    var query=url.parse(req.url,true).query;
    console.log(query);
    //------------------------------------
    res.end('welcome to rait....')
}).listen(8787);

// http://localhost:8787/

//We have two types of data coming on the webpage, one is json and the other is html
//Now among these two... which will have light weight?
//html is heavy than json,
//lets say we have a file... .txt and another is .doc

//Now doc is obviously heavy....

//Now you put the same 10 lines in these places.. and text file will have lighter weight than comparison to doc due to styles also stored in it...


//Now there comes plain text, and we cant add much more designings to it.
//So hence json is lighter as no kind of styling is involved here... so it lighther than html.

// hasthip-12-roll-vintage-washi-tape-aesthetic-decorative-tape-adhesive-manual/p/itmd307b9a2e91a1?pid=CTDGU9X8JNX3WC5V&lid=LSTCTDGU9X8JNX3WC5VZNQ0OX&marketplace=FLIPKART&q=washi+tapes&store=dgv%2Ftkw%2Fp17&srno=s_1_9&otracker=search&otracker1=search&fm=Search&iid=b4ea2510-0227-4790-a629-c3f209497ee2.CTDGU9X8JNX3WC5V.SEARCH&ppt=sp&ppn=sp&ssid=9s2bysphovnaibcw1703609815878&qH=dc8061f77606cb6d


//So when we work with url then, we get access to the individual products, their id, manufacturing date, description, here the database stuff pops up and we can get a lot of such product data from the url.

//We have to work with the query string for the url..