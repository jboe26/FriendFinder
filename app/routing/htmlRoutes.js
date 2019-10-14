module.exports = app => {
    
app.get('/home', function(req,res){
    res.sendfile('app/public/home.html');
   }),
   app.get('/survey', function(req,res) {
     res.sendfile('app/public/survey.html');
   })

}