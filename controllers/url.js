const { findOneAndUpdate, findOne, findOneAndDelete, find } = require('../../hello/models/user');
const Url = require('../models/url');
const generate = require('meaningful-string');

async function handleCreateShortUrl(req , res) {
    const body = req.body;  
    if(!body.url) return res.status(400).json({ error: 'url is required'})
    const shortId = generate.random({  "min":6, "max":6,});
    const info =  await Url.create({
        shortUrl: shortId,
        origonalUrl: body.url,
        urlAnalytics: [ {visits: 0 }],
    });
    return res.render('url-preview' , {
        url: info
    })
}


async function handleRedirectUrl( req , res){
    const shortUrl = req.params.id;
    const m = await Url.findOne({
        shortUrl,
    })
    let visit = m.urlAnalytics[m.urlAnalytics.length - 1].visits;
    const response = await Url.findOneAndUpdate(
        {
        shortUrl,
        }, 
        {
        $push: {
            urlAnalytics: {
                timestamps: new Date().toDateString() ,
                visits: visit+1,
            }  
        }
        },
        {
            new: true,
        })
    
     res.redirect(`${response.origonalUrl}` , {
        info: response,
     });
}

async function handleDeleteUrl( req , res){
    const shortUrl = req.params.id;
    await Url.findOneAndDelete({
        shortUrl
    })
    return res.render('deletion' , {
        id: shortUrl,
    })
} 

async function handleHomePage(req , res){
    const allInfo = await Url.find({});
    return res.render('homepage' , {
        info: allInfo,
    })
}

module.exports = {
    handleCreateShortUrl,
    handleRedirectUrl,
    handleDeleteUrl,
    handleHomePage
}