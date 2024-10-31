/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 
 */

const PublicComplaints = require("../../models/PublicComplaint");
exports.seed = async function (knex) {
  await PublicComplaints.create(
    "10/07/2024",
    "201211049",
    "1",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "2968",
    "797880",
    "Force",
    "Physical force",
    "20 < Age <= 24",
    "Male/Man",
    "White",
    "",
    "Complaint Withdrawn",
    "",
    "Complaint Withdrawn"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201306548",
    "2",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "3299",
    "851512",
    "Abuse of Authority",
    "Refusal to provide name/shield number",
    "29 < Age <= 34",
    "Male/Man",
    "Asian",
    "",
    "Unsubstantiated",
    "",
    "Unsubstantiated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "200909106",
    "1",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "1805",
    "637690",
    "Discourtesy",
    "Word",
    "34 < Age <= 39",
    "Male/Man",
    "Hispanic",
    "",
    "Unsubstantiated",
    "",
    "Unsubstantiated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "200903270",
    "2",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "1703",
    "663021",
    "Abuse of Authority",
    "Stop",
    "09 < Age <= 14",
    "Male/Man",
    "Hispanic",
    "",
    "Exonerated",
    "",
    "Exonerated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "200604635",
    "1",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "648",
    "444076",
    "Force",
    "Physical force",
    "",
    "NA",
    "",
    "",
    "Exonerated",
    "",
    "Exonerated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201900771",
    "2",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "5286",
    "1049355",
    "Abuse of Authority",
    "Strip-searched",
    "44 < Age <= 49",
    "Male/Man",
    "Hispanic",
    "",
    "Complainant Uncooperative",
    "",
    "Complainant Uncooperative"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201010609",
    "1",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "2221",
    "709542",
    "Force",
    "Physical force",
    "20 < Age <= 24",
    "Male/Man",
    "Hispanic",
    "",
    "Complainant Unavailable",
    "",
    "Complainant Unavailable"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201002589",
    "1",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "2059",
    "681699",
    "Force",
    "Physical force",
    "14 < Age <= 17",
    "Male/Man",
    "Hispanic",
    "",
    "Exonerated",
    "",
    "Exonerated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "200504766",
    "1",
    "934557",
    "POM",
    "Police Officer",
    "070 PCT",
    "303",
    "397349",
    "Force",
    "Physical force",
    "17 < Age <= 20",
    "Male/Man",
    "Black",
    "",
    "Unsubstantiated",
    "",
    "Unsubstantiated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "200903270",
    "2",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "1703",
    "663023",
    "Force",
    "Physical force",
    "09 < Age <= 14",
    "Male/Man",
    "Hispanic",
    "",
    "Unsubstantiated",
    "",
    "Unsubstantiated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201900771",
    "2",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "5286",
    "1049361",
    "Abuse of Authority",
    "Threat of arrest",
    "44 < Age <= 49",
    "Male/Man",
    "Hispanic",
    "",
    "Complainant Uncooperative",
    "",
    "Complainant Uncooperative"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201900771",
    "2",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "5286",
    "1049353",
    "Abuse of Authority",
    "Vehicle search",
    "44 < Age <= 49",
    "Male/Man",
    "Hispanic",
    "",
    "Complainant Uncooperative",
    "",
    "Complainant Uncooperative"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "202102960",
    "1",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "6155",
    "1128433",
    "Force",
    "Physical force",
    "49 < Age <= 54",
    "Male/Man",
    "Hispanic",
    "",
    "Complainant Unavailable",
    "",
    "Complainant Unavailable"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201310925",
    "2",
    "934557",
    "POM",
    "Police Officer",
    "072 PCT",
    "3385",
    "875480",
    "Discourtesy",
    "Word",
    "29 < Age <= 34",
    "Female/Woman",
    "Asian",
    "",
    "Exonerated",
    "",
    "Exonerated"
  );
};
