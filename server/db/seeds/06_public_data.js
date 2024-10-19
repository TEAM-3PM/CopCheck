const PublicComplaints = require("../../models/PublicComplaint");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw("ALTER SEQUENCE contents_id_seq RESTART WITH 1");

  await PublicComplaints.create(
    "10/07/2024",
    "200907595",
    "1",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "2146",
    "642562",
    "Abuse of Authority",
    "Premises entered and/or searched",
    "",
    "NA",
    "",
    "",
    "Complainant Uncooperative",
    "",
    "Complainant Uncooperative"
  );
  await PublicComplaints.create(
    "10/07/2024",
    "201504263",
    "1",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "4340",
    "919547",
    "	Abuse of Authority",
    "Refusal to obtain medical treatment",
    "20 < Age <= 24",
    "Female/Woman",
    "Other Race",
    "",
    "Complainant Uncooperative",
    "",
    "Complainant Uncooperative"
  );
  await PublicComplaints.create(
    "10/07/2024",
    "201012873",
    "3",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "2637",
    "717227",
    "Force",
    "Physical force",
    "34 < Age <= 39",
    "Male/Man",
    "Black",
    "",
    "Exonerated",
    "",
    "Exonerated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "200412925",
    "1",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "547",
    "381575",
    "Abuse of Authority",
    "Refusal to process civilian complaint",
    "20 < Age <= 24",
    "Female/Woman",
    "Black",
    "",
    "Complainant Uncooperative",
    "",
    "Complainant Uncooperative"
  );
  await PublicComplaints.create(
    "10/07/2024",
    "201304231",
    "1",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "3588",
    "829442",
    "Force",
    "Physical force",
    "44 < Age <= 49",
    "Female/Woman",
    "Black",
    "",
    "Unsubstantiated",
    "",
    "Unsubstantiated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201012873",
    "3",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "2637",
    "717228",
    "Abuse of Authority",
    "Gun Drawn",
    "",
    "",
    "NA",
    "",
    "Exonerated",
    "",
    "Exonerated"
  );
  await PublicComplaints.create(
    "10/07/2024",
    "201304605",
    "1",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "3619",
    "830833",
    "Discourtesy",
    "Word",
    "34 < Age <= 39",
    "Male/Man",
    "Black",
    "",
    "Unsubstantiated",
    "",
    "Unsubstantiated"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201304231",
    "1",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "3588",
    "829441",
    "Force",
    "Chokehold",
    "44 < Age <= 49",
    "Female/Woman",
    "Black",
    "",
    "Unsubstantiated",
    "",
    "Unsubstantiated"
  );
  await PublicComplaints.create(
    "10/07/2024",
    "201106264",
    "1",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "2874",
    "742373",
    "Abuse of Authority",
    "Threat of arrest",
    "",
    "Female/Woman",
    "",
    "",
    "Alleged Victim Uncooperative",
    "",
    "	Alleged Victim Uncooperative"
  );
  await PublicComplaints.create(
    "10/07/2024",
    "201213754",
    "1",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "3391",
    "807033",
    "Abuse of Authority",
    "Refusal to provide name/shield number",
    "",
    "Male/Man",
    "",
    "",
    "Complainant Uncooperative",
    "",
    "Complainant Uncooperative"
  );

  await PublicComplaints.create(
    "10/07/2024",
    "201012873",
    "3",
    "932637",
    "POM",
    "Police Officer",
    "113 PCT",
    "2637",
    "717226",
    "Abuse of Authority",
    "Premises entered and/or searched",
    "",
    "",
    "NA",
    "",
    "Exonerated",
    "",
    "Exonerated"
  );
};
