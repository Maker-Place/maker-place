const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
// This file empties the Books collection and inserts the memberships below
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/makerplace",
    {
        useMongoClient: true
    }
);

const membershipsSeed = [
    {
        membership_type: "1 Year Prepaid",
        annual_cost: "$1,296",
        monthly_cost: "($52/month)",
        discount: "(Save 33%)",
        description: "Free Shop Orientation. After completion of the commitment period the membership will continue to automatically renew until member cancels. The member will be notified prior to any price increases."
    },
    {
        membership_type: "6 Months Prepaid",
        annual_cost: "$720",
        monthly_cost: "$120/month",
        discount: "(Save 25%)",
        description: "Free Shop Orientation. After completion of the commitment period the membership will continue to automatically renew until member cancels. The member will be notified prior to any price increases."
    },
    {
        membership_type: "3 Months Prepaid",
        annual_cost: "$408",
        monthly_cost: "($136/month)",
        discount: "(Save 15%)",
        description: "Free Shop Orientation. After completion of the commitment period the membership will continue to automatically renew until member cancels. The member will be notified prior to any price increases."
    },
    {
        membership_type: "Month to Month",
        annual_cost: "$160/month",
        monthly_cost: "",
        discount: "",
        description: "Free Shop Orientation. After completion of the commitment period the membership will continue to automatically renew until member cancels. The member will be notified prior to any price increases."
    },
    {
        membership_type: "Fabrication",
        annual_cost: "$79/month",
        monthly_cost: "",
        discount: "",
        description: "This level gives member access to the craft room, assembly room and 3D printing areas only. Does not require any specific duration commitment. Membership will be automatically renewed and the associated debit/credit card will be charged at the current list price until cancelled. The member will be notified prior to any price increases."
    },
    {
        membership_type: "10 Day Punch Card",
        annual_cost: "$375/month",
        monthly_cost: "",
        discount: "",
        description: "Valid for 10 days of membership and does not need to be used consecutively. Purchase of this pass does not include Shop Orientation or membership discounts on classes. Does not require any specific duration commitment. Promotional value valid for 1 year from date of purchase."
    }
];

db.Membership
.remove({})
.then (() => db.Membership.insertMany(membershipsSeed))
    .then(data => {
        data.map(item => (
          console.log(item._id)
        ));
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
