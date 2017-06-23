module.exports.about = function(req,res,next){
    res.render('about',{title:'About',
page:{body:'Near Coffee!! was created to help people find places to sit down and have a nice sip of coffee and get a bit of work done'}
  });
};
