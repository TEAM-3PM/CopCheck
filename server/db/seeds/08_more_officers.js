/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const Officer = require("../../models/Officer");
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  //Created entries
  await Officer.create(956218, 58, "Andrew", "Ronan", 8395, true, 5, 0);
  await Officer.create(978427, 53, "James", "Capodanno", 19737, true, 0, 0);
  await Officer.create(976660, 73, "Datra", "Felderlaing", 18880, true, 0, 0);
  await Officer.create(972158, 59, "Austin", "Parisi", 27253, true, 0, 0);
  await Officer.create(958368, 26, "Remil", "Caraballo", 5820, true, 0, 0);
  await Officer.create(906108, 62, "Michael", "Digeorgio", 20956, false, 2, 0);
  await Officer.create(903013, 28, "Ellen", "Summerville", 18428, false, 0, 0);
  await Officer.create(969980, 11, "Ralph", "Mercedes", 23577, false, 0, 0);
  await Officer.create(921847, 26, "John", "Walsh", 10066, false, 1, 0);
  await Officer.create(946281, 56, "Shawn", "Sooklall", 29511, true, 1, 0);
  await Officer.create(927012, 5, "Michael", "Jurena", 24700, false, 2, 0);
  await Officer.create(
    941811,
    50,
    "Jessica",
    "Giannonecamacho",
    25903,
    false,
    1,
    0
  );
  await Officer.create(946737, 60, "Salvatore", "Alongi", 11508, true, 3, 0);
  await Officer.create(969357, 28, "Thomas", "Scheer", 9869, true, 0, 0);
  await Officer.create(976145, 26, "Alexander", "Gill", 939, true, 0, 0);
  await Officer.create(955438, 71, "Joseph", "Sanabria", 31657, false, 0, 0);
  await Officer.create(905170, 45, "David", "Tilatitsky", 16664, false, 0, 0);
  await Officer.create(950373, 51, "Ryan", "Elliott", 27044, false, 0, 0);
  await Officer.create(974972, 58, "Andrew", "Lauriguet", 17384, true, 0, 0);
  await Officer.create(964166, 59, "Kathleen", "Meyer", 14420, true, 0, 0);
  await Officer.create(891910, 29, "Rudolph", "Parker", 203, false, 0, 0);
  await Officer.create(965426, 9, "Brian", "Prestigiacomo", 29483, true, 1, 0);
  await Officer.create(971784, 68, "Ashley", "Addonisio", 31247, true, 0, 0);
  await Officer.create(902447, 29, "Michael", "Sullivan", 0, false, 5, 0);
  await Officer.create(971166, 34, "Ralph", "Nicholson", 23125, true, 1, 0);
  await Officer.create(959941, 31, "Claudia", "Rodriguez", 2056, true, 2, 0);
  await Officer.create(962050, 46, "John", "Reid", 4212, true, 1, 0);
};
