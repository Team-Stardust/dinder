const yelpData = {};
const axios = require('axios')
yelpData.filterData = async (req, res, next)=>{
    axios.get('https://api.yelp.com/v3/businesses/search?location=1600 Main St 1st floor, Venice, CA 90291', {
        method: 'get',
        headers: {
            Authorization: `Bearer MfDMUex5QqBEmikkv_loFMylwePCLv5V68l3okBXaqK0wjTkwcIlackwCcAsUOg0Gf2c3KEa59wz1RyiV1CFiMF_lkxc268shpIysJXuZhVwEN1nDyTWEci4q1-GXXYx`
          },
          params: {
            categories: 'restaurants, All',
            limit: 50,
        }
    })
    .then(response =>{
        const businessList = [];
        for (let restaurant of response.data.businesses) {
            // console.log(restaurant)
            const businessObj = {
              yelpid: restaurant.id,
              name: restaurant.name,
              address:
                restaurant.location.display_address[0] +
                ', ' +
                restaurant.location.display_address[1],
              imgurl: restaurant.image_url,
              yelpurl: restaurant.url,
              rating: restaurant.rating,
              phone: restaurant.phone,
              reviewCount: restaurant.review_count
            };
            businessList.push(businessObj);
          }
        res.locals.businessList = businessList;
        return next();
    })
    .catch(err =>{
        return new Error(err);
    })
}

module.exports = yelpData;