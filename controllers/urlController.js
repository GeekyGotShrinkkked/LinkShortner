const shortenUrl = async (req,res) => {
    const {longUrl} = req.body;
    console.log('Received long URL:',longUrl);

    if(!longUrl){
        return res.status(400).json({success: false,error:'Please provide a URL'});
    }
    res.status(200).json({success:true, message: 'Controller is now connected!',data:{receivedUrl: longUrl}});
};

export {shortenUrl};