const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : {
        filename :{
           type : String, 
            default : "listingimage",
        },
        url:{
        type : String,
        default : "https://i.pinimg.com/736x/c0/3c/5d/c03c5d112b2f15a764f2c466cae70136.jpg",
        },
    //    set : (v) => 
    //     v === "" 
    //    ? "https://i.pinimg.com/736x/c0/3c/5d/c03c5d112b2f15a764f2c466cae70136.jpg" 
    //    : v,
    
    },
    price : Number,
    location : String,
    country : String,
    
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;