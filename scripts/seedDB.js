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
        annual_cost: "$1,296/year",
        monthly_cost: "($52/month)",
        discount: "(Save 33%)",
        description: "Free Shop Orientation. After completion of the commitment period the membership will continue to automatically renew until member cancels. The member will be notified prior to any price increases."
    },
    {
        membership_type: "6 Months Prepaid",
        annual_cost: "$720/year",
        monthly_cost: "$120/month",
        discount: "(Save 25%)",
        description: "Free Shop Orientation. After completion of the commitment period the membership will continue to automatically renew until member cancels. The member will be notified prior to any price increases."
    },
    {
        membership_type: "3 Months Prepaid",
        annual_cost: "$408/year",
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
        membership_type: "Fabrication Pass",
        annual_cost: "$79/month",
        monthly_cost: "",
        discount: "",
        description: "Access to the craft room, assembly room, and 3D printing area. Membership will be automatically renewed and the associated debit/credit card will be charged at the current list price until cancelled. The member will be notified prior to any price increases."
    },
    {
        membership_type: "10 Day Punch Card",
        annual_cost: "$375/month",
        monthly_cost: "",
        discount: "",
        description: "Valid for 10 days of membership and does not need to be used consecutively. Purchase of this pass does not include Shop Orientation or membership discounts on classes. Does not require any specific duration commitment. Promotional value valid for 1 year from date of purchase."
    }
];

const toollistSeed = [
    {
        category: "Wood",
        tool_type: "Saws",
        tool_name: "Scroll Saws"
    },
    {
        category: "Wood",
        tool_type: "Saws",
        tool_name: "Miter Saw (dewalt 12 in.)"
    },
    {
        category: "Wood",
        tool_type: "Saws",
        tool_name: "Panel Saw (Mikwaukee 6486-20)"
    },
    {
        category: "Wood",
        tool_type: "Saws",
        tool_name: "Table Saw (SawStop 10 in.)"
    },
    {
        category: "Wood",
        tool_type: "Saws",
        tool_name: "Vertical Band Saw (Startsite 18-V-10)"
    },
    {
        category: "Wood",
        tool_type: "Saws",
        tool_name: "Horizontal Band Saw (Jet HBS 814-GH)"
    },
    {
        category: "Wood",
        tool_type: "Sanders",
        tool_name: "Belt Sander"
    },
    {
        category: "Wood",
        tool_type: "Sanders",
        tool_name: "Table Sander"
    },
    {
        category: "Wood",
        tool_type: "Sanders",
        tool_name: "Flapper Sander"
    },
    {
        category: "Wood",
        tool_type: "Sanders",
        tool_name: "Spindle Sander"
    },
    {
        category: "Wood",
        tool_type: "Sanders",
        tool_name: "Pedestal Sander"
    },
    {
        category: "Wood",
        tool_type: "Large Machines",
        tool_name: "Jointer (Delta DJ-20)"
    },
    {
        category: "Wood",
        tool_type: "Large Machines",
        tool_name: "Planer (Powermatic 15 in. HH)"
    },
    {
        category: "Wood",
        tool_type: "Large Machines",
        tool_name: "Lathe (Jet JWL-1442VS)"
    },
    {
        category: "Wood",
        tool_type: "Drills",
        tool_name: "Drill Press (Delta 11-980 10 in.)"
    },
    {
        category: "Metal",
        tool_type: "Metal Cutters",
        tool_name: "Shear (Jet PS-1652T)"
    },
    {
        category: "Metal",
        tool_type: "Metal Benders",
        tool_name: "35 Ton Hydraulic Press Brake"
    },
    {
        category: "Metal",
        tool_type: "Metal Benders",
        tool_name: "Finger Brake (Jet BP-1648H)"
    },
    {
        category: "Metal",
        tool_type: "CNC Machines",
        tool_name: "4-Axis CNC Mill (Tormach PCNC 1100)"
    },
    {
        category: "Metal",
        tool_type: "CNC Machines",
        tool_name: "3-Axis CNC Mill (Prototrak)"
    },
    {
        category: "Metal",
        tool_type: "Milling Machines",
        tool_name: "Vertical Mills (Bridgeport)"
    },
    {
        category: "Metal",
        tool_type: "Welders",
        tool_name: "MIG Welder"
    },
    {
        category: "Metal",
        tool_type: "Welders",
        tool_name: "TIG Welder"
    },
    {
        category: "Metal",
        tool_type: "Welders",
        tool_name: "Oxy Welder"
    },
    {
        category: "Metal",
        tool_type: "Welders",
        tool_name: "Acetylene Welder"
    },
    {
        category: "Metal",
        tool_type: "Other Machines",
        tool_name: "Metal Lathes"
    },
    {
        category: "Craft",
        tool_type: "Embroidery Machines",
        tool_name: "CNC Embroidery (Baby Lock Endurance BND9)"
    },
    {
        category: "Craft",
        tool_type: "Sewing Machines",
        tool_name: "Serger (Baby Lock Eclipse)"
    },
    {
        category: "Craft",
        tool_type: "Sewing Machines",
        tool_name: "Sewing Machines (Janome Memory Craft 6600P)"
    },
    {
        category: "Craft",
        tool_type: "Sewing Machines",
        tool_name: "Industrial Sewing Machine (Columbia)"
    },
    {
        category: "Craft",
        tool_type: "Screen Printing",
        tool_name: "Six Color Screen Printing Station and Dryer"
    },
    {
        category: "Craft",
        tool_type: "Plotters",
        tool_name: "Vinyl Plotter (Summa Sign DG10)"
    },
    {
        category: "Craft",
        tool_type: "Printers",
        tool_name: "Large Format Color Printers (Cannon 1PF710)"
    },
    {
        category: "Craft",
        tool_type: "Printers",
        tool_name: "3D Printers (Dimension BST 1200 & Robo3D)"
    },
    {
        category: "Craft",
        tool_type: "Lasers",
        tool_name: "Lasers (Hurricane 80W and 100W; Epilog)"
    },
    {
        category: "Crafts",
        tool_type: "Other Tools",
        tool_name: "Oscilloscopes"
    },
    {
        category: "Crafts",
        tool_type: "Other Tools",
        tool_name: "Function Generators"
    },
    {
        category: "Crafts",
        tool_type: "Other Tools",
        tool_name: "Soldering Irons"
    },
    {
        category: "Crafts",
        tool_type: "Other Tools",
        tool_name: "Wide variety of hand tools"
    }
];
function seedDB() {
    db.Membership
    .remove({})
    .then (() => db.Membership.insertMany(membershipsSeed))
        .then(data => {
            data.map(item => (
              console.log(item._id)
            ));
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
    db.ToolList
    .remove({})
    .then (() => db.ToolList.insertMany(toollistSeed))
        .then(data => {
            data.map(item => (
              console.log(item._id)
            ));
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
};
seedDB();