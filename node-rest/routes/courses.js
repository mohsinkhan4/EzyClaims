var express = require('express');
var db = require('../config/db');
var mongodb = require('mongodb');
//var fs = require('fs');

var router = express.Router();
var ObjectId = mongodb.ObjectID;

router.get('/', function (req, res) {
    
    db.claims
        .find(
            {status: 'open'}, 
            {name: 1, date: 1, relationship: 1, amount: 1}
        )
        .sort(
            {'_id' : -1}, 
            function(err, resp) {
                if(err) throw err;
                res.json(resp);
            }
        );
});

router.get('/openRequests', function (req, res) {
    
    db.claims
        .find(
            {status: 'open'}, 
            {name: 1, date: 1, relationship: 1, amount: 1}
        )
        .sort(
            {'_id' : -1}, 
            function(err, resp) {
                if(err) throw err;
                res.json(resp);
            }
        );
});

router.get('/allRequests', function (req, res) {

    db.claims
        .find(
            {}, 
            {name: 1, date: 1, relationship: 1, amount: 1}
        )
        .sort(
            {'_id' : -1}, 
            function(err, resp) {
                if(err) throw err;
                res.json(resp);
            }
        );

});

router.get('/request/:requestId', function (req, res) {
    console.log(req.params.requestId);
    db.claims
        .find(
            { _id : new ObjectId(req.params.requestId) }, 
            {name: 1, date: 1, relationship: 1, amount: 1}, 
            function(err, resp) {
                if(err) throw err;
                console.log(resp);
                res.json(resp);
            }
        );

});

router.post('/addRequest', function (req, res) {
    
    var doc = req.body;
    doc.status = 'closed';

    db.claims.insert(req.body, function(err, inserted) {
        if(err) throw err;
        res.json(JSON.stringify(inserted._id));
    });
});

module.exports = router;

    /*db.claims
        .find({ courseId : req.params.courseId }, {_id: 0, videos: 1}, function(err, resp) {
            var videos = resp[0].videos;
            for(var i in videos){
                if(req.params.videoId == videos[i].videoId){
                    console.log(videos[i].videoId);
                    res.json(videos[i].FilePath);
                    return;
                }
            }
            res.json('not found');
        });*/

    /*var videos = resp[0].videos;
                for(var i in videos){
                    if(req.params.videoId == videos[i].videoId){
                        console.log(videos[i].videoId);
                        res.json(videos[i].FilePath);
                        return;
                    }
                }
                res.json('not found');*/