module.exports.home = function(req,res,next){

  res.render('locations_list',{title:'Near Coffee',
  pageheader:{title:'Near Coffee',strap: 'Find Coffee Shops near you'},
  locations:[{
    name:'Starbucks ',
    address:'San Jose, California, 95135',
    rating:3,
    distance:'100m',
    facilities:['Hot Drinks','Free WiFi','Parking']},

    {
      name:'Dunkin Donuts',
      address:'Palo Alto, California, 95135',
      rating:4,
      distance:'150m',
      facilities:['Hot Drinks', 'Free WiFi', 'Cold Drinks', 'Parking']

    },

    {
      name:'Cold & Out',
      address:'Milpitas, California, 95135',
      rating:2,
      distance:'320m',
      facilities:['Cold Drinks','Free WiFi']

    },

    {
      name:'Expresso',
      address:'San Mateo, California, 95135',
      rating:2,
      distance:'120m',
      facilities:['Hot Drinks']

    },

    {
      name:'Decafe',
      address:'RedWood, California, 95135',
      rating:1,
      distance:'110m',
      facilities:['Cold Drinks']

    }]
});
};

module.exports.details = function(req,res,next)
{
  res.render('locations_info',{title:'Location Details',
    pageheader:'Starbucks cafe has accessible wifi and space to sit down with your laptop and get some work done. If youve been and you like it - or if you dont - please leave a review to help other people just like you.',

    location:{
      name: 'Starbucks',
      address: 'San Jose, California, 95135',
      rating: 3,
      facilities: ['Hot Drinks','Free WiFi','Parking'],
      coord:{lat:51.455041, lng: -0.9690884},
      Openingtimes:[
          {
            days:'Monday - Friday',
            opening:'7:00am',
            closing:'7:00pm',
            closed: false

          },
          {
            days:'Saturday',
            opening:'9:00am',
            closing:'4:00pm',
            closed: false

          },
          {
            days: 'Sunday',
            closed: true
          }],

          reviews:[{
            author: 'Simon',
            reviewtext:'Good Place to work and a nice WiFi Spot',
            rating:'5',
            time:'16 july, 2016'

          },
          {
            author:'john',
            reviewtext:'Awesome!, Will come back soon',
            rating:'4',
            time:'09, june, 2016'

          }
        ]

    }

});
};

module.exports.review = function(req,res, next){

  res.render('location_review',{title:'Add Review',
 pageheader:{title:'Review Starbucks!!'}
});
};
