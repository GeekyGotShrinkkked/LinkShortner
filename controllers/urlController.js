import validUrl from "validUrl";
import Url from "../models/URL.js";
import { nanoid } from "nanoid";

const shortenUrl = async (req,res) => {

    try{
        let url = await Url.findOne({longUrl});

        if(url){
            return res.status(200).json({success: true, data: url});
        }
        const urlCode = nanoid(7);


        const shortUrl = `${process.env.Base_URL}/${urlCode}`;
        url = await Url.create({
            longUrl,
            shortUrl,
            urlCode
        });
        res.status(201).json({sucess: true, data: url});
    } catch(err){
        console.error('Database error:',err);
        res.status(500).json({sucess: false, error:'Internal Server Error'});

    }
};



export {shortenUrl};