import express from "express";
const app = express();
const port = 8080;


// the main function to return the user work dAY

const currentDate = new Date();
const dayofWeek = currentDate.getDay();


var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



if (dayofWeek === 0 || dayofWeek === 6)
{
   var day = "Weekday";
   var message = "Time to work hard";

}
else{
      var day = "Weekend";
      var message = "Time to rest";
}



// lets get the get request done 

app.get("/", (req, res)=>
{
     res.render("index.ejs",
     {
        Current :   day,
        message : message

     })
});


// create a server on the local computer

app.listen(port, ()=>
{
    console.log("server running on port 8080");
});



