import validUrl from "validUrl";
import Url from "../models/URL.js";
import { nanoid } from "nanoid";

const shortenUrl = async (req,res) => {
    const {longUrl} = req.body;

    console.log('Received long URL:',longUrl);

    if(!longUrl){
        return res.status(400).json({success: false,error:'Please provide a URL'});
    }
    if(!validUrl.isUri(longUrl)){
        return res.status(400).json({success: false, error: 'Invalid URL format provided'});
    }

    try{
        let url = await Url.findOne({longUrl: longUrl});

        if(url){
            return res.status(200).json({success: true,data: url });
        }
        const urlCode = nanoid(7);
        const shortUrl = `${process.env.Base_URL}/${urlCode}`;


        res.status(200).json({success: true, 
        message: "URL is new . Full short URL constructed",
        data: {longUrl,
            shortUrl,
            urlCode,
        },
    });
    }

    catch(err){
        console.error("Database error:", err)
    }
};

export {shortenUrl};