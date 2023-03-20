
// limitation of traffic for consultations

//for the future
/*
export const limitTraffic = async(req, res, next) =>{
    const db = await Datastore.open();
    // get client IP address
    const ipAddress = req.headers['x-real-ip'];
    // increase count for IP
    const count = await db.incr('IP_count_' + ipAddress, 1, { ttl: 60 * 1000 })
    console.log(ipAddress, count);
    if (count > 10) {
        // too many calls
        res.status(429).end("Sorry too many requests for this IP");
    } else {
        // ok to proceed
        next();
    }
}
*/