module.exports.signIn = function(req,res){
   res.render('teacherSignIn');
}

 module.exports.Login = function(req,res){
   if(req.body.username=='teacher' && req.body.password=='teacher123'){
     res.redirect('/dashboard');
   }
   else{
      res.render('teacherSignIn');
   }
}