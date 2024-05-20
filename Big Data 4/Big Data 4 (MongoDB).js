//Big Data – Homework 4 - MongoDB 

//conda activate bigdata-fall22
//shared/mongotools/mongoimport --file="shared/restaurants.json" --collection="restaurants" --jsonArray --host=mongo-csgy-6513-fall.db --authenticationDatabase=vp2361_db -u vp2361 -p vp2361 --db vp2361_db
//shared/mongotools/mongoimport --file="shared/historical-events.json" --collection="historical-events" --host=mongo-csgy-6513-fall.db --authenticationDatabase=vp2361_db -u vp2361 -p vp2361 --db vp2361_db
//shared/mongotools/mongoimport --file="shared/meteorites.json" --collection="meteorites" --host=mongo-csgy-6513-fall.db --authenticationDatabase=vp2361_db -u vp2361 -p vp2361 --db vp2361_db
//shared/mongotools/mongoimport --file="shared/worldcities.csv" --collection="worldcities" --type=csv --fields='city','city_ascii','lat','lng','country','iso2','iso3','admin_name','capital','population','id' --host=mongo-csgy-6513-fall.db --authenticationDatabase=vp2361_db -u vp2361 -p vp2361 --db vp2361_db
//mongo --host=mongo-csgy-6513-fall.db --authenticationDatabase=vp2361_db -u vp2361 -p vp2361
//use vp2361_db

//Question1
db.getCollection("restaurants").count()

//Question2
db.getCollection("restaurants").find({})

//Question3
db.getCollection("restaurants").find( {}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1});

//Question4
db.getCollection("restaurants").find({}, {"_id": 0, "restaurant_id":1, "name":1, "borough":1, "cuisine":1});

//Question5
db.getCollection("restaurants").find({}, {"_id": 0, "restaurant_id":1, "name":1, "address.zipcode":1, "cuisine":1});

//Question6
db.getCollection("restaurants").find({"borough": "Bronx"});

//Question7
db.getCollection("restaurants").find({"borough": "Bronx"}).limit(5);

//Question8
db.getCollection("restaurants").find({"borough": "Bronx"}).skip(5).limit(5);

//Question9
db.getCollection("restaurants").find({grades : { $elemMatch:{"score":{$gt : 85}}}})

//Question10
db.getCollection("restaurants").find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}})

//Question11
db.getCollection("restaurants").find({"address.coord" : {$lt : -95.754168}})

//Question12
db.getCollection("restaurants").find({$and:[{"cuisine" : {$ne :"American "}},{"grades.score" : {$gt : 70}},{"address.coord" : {$lt : -65.754168}}]})

//Question13
db.getCollection("restaurants").find({"cuisine" : {$ne : "American "},"grades.score" :{$gt: 70},"address.coord" : {$lt : -65.754168}})

//Question14
db.getCollection("restaurants").find({"cuisine" : {$ne : "American "},"grades.grade" :"A","borough": {$ne : "Brooklyn"}}).sort({"cuisine":-1});

//Question15
db.getCollection("restaurants").find({name: /^Wil/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})

//Question16
db.getCollection("restaurants").find({name: /ces$/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})

//Question17
db.getCollection("restaurants").find({name: /.*Reg.*/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})

//Question18
db.getCollection("restaurants").find({"borough": "Bronx" , $or : [{ "cuisine" : "American " },{ "cuisine" : "Chinese" }]})

//Question19
db.getCollection("restaurants").find({"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})

//Question20
db.getCollection("restaurants").find({"borough" : {$nin : ["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})

//Question21
db.getCollection("restaurants").find({"grades.score" : { $not: {$gt : 10}}},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})

//Question22
db.getCollection("restaurants").find({$or: [{name:/^Wil/}, {"$and": [{"cuisine" : {$ne :"American "}}, {"cuisine" : {$ne :"Chinese"}}]}]})

//Question23
db.getCollection("restaurants").find({"grades.date": ISODate("2014-08-11T00:00:00Z"), "grades.grade":"A" , "grades.score" : 11}, {"restaurant_id" : 1,"name":1,"grades":1})
           
//Question24
db.getCollection("restaurants").find({ "grades.1.date": ISODate("2014-08-11T00:00:00Z"), "grades.1.grade":"A" , "grades.1.score" : 9},{"restaurant_id" : 1,"name":1,"grades":1})           

//Question25
db.getCollection("restaurants").find({"address.coord.1": {$gt : 42, $lte : 52}},{"restaurant_id" : 1,"name":1,"address":1,"coord":1})

//EXTRA CREDIT QUESTIONS

//Extra Credit Question1
db.getCollection("historical-events").aggregate([{"$project": {"events_year": {"$split": ["$date","/"] }}},{"$project": {"events_year": {"$slice": ["$events_year",0,1]}}},{"$unwind" : "$events_year"},{"$group": {"_id":"$events_year","events_per_year":{"$sum":1}}},])

//Extra Credit Question2
db.worldcities.updateMany({},[{"$addFields": {"city_loc": { "type":"Point","coordinates":["$lng","$lat"] }}}])

filtered = db.meteorites.aggregate([{"$match": {"fall":"Fell"}},{"$match": {"year":{"$gte": "1950-01-01T00:00:000"}}}])
     
for(meteorite in filtered){
    if("geolocation" in meteorite){
        city_found = db.worldcities.aggregate(
             [
                 {"$geoNear":{
                     "includeLocs": "location",
                     "near": meteorite["geolocation"],
                     "distanceField": "dist.calculated",
                     "key":"city_loc"
                 }},
                 {"$limit":1}
             ]
        )
        print("Meteorite Info")
        print("______________")
        print(meteorite)
        print("______________")
        print("Nearest City Info")
        print("______________")
        for (city in city_found){
            print(city)
        }
        print("______________")
    }
}
 