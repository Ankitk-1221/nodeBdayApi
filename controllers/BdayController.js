const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const fs = require("fs");
var ndjson = require('ndjson')

var hyperquest = require('hyperquest');
const JSONStream = require('JSONStream');
var es = require('event-stream')





const getBdayWishes = async (request, response) => { 
    
name_param = request.query.name
const {param} = request.params;
response.status(200).json({ status: 'success', message: 'Happy Birthday, '+ name_param +'!' })

}


const fetchTxt = async (request, response) => { 
    
    var url = "https://ab-solution-engineer-task.s3.ap-southeast-1.amazonaws.com/list.txt";

  
  /*  var parsed = [];
    hyperquest(url)
    .pipe(ndjson.parse())
    .on('data', parsed.push.bind(parsed))
    .on('end')
*/

var parsed = [];

const parser = async () => {
    await hyperquest(url)
    .pipe(ndjson.parse())
        .pipe(es.map(async (data, callback) => {
            callback(null, data);
            parsed.push(data)
            response.status(200).json([{ data}])
      }))
}

parser()
}


module.exports = {
    getBdayWishes,
    fetchTxt
};
