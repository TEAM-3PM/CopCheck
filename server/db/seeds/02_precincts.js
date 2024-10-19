/** @format */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("precincts").del();

  await knex.raw("ALTER SEQUENCE precincts_id_seq RESTART WITH 1");
  //all precincts
  await knex("precincts").insert([
    {
      borough: `Manhattan`,
      name: "1st Precinct",
      address: "16 Ericsson Place",
    },
    {
      borough: `Manhattan`,
      name: "5th Precinct",
      address: "19 Elizabeth Street",
    },
    {
      borough: `Manhattan`,
      name: "6th Precinct",
      address: "233 West 10 Street",
    },
    {
      borough: `Manhattan`,
      name: "7th Precinct ",
      address: "19 1/2 Pitt Street",
    },
    {
      borough: `Manhattan`,
      name: "9th Precinct",
      address: "321 East 5 Street",
    },
    {
      borough: `Manhattan`,
      name: "10th Precinct",
      address: "230 West 20th Street",
    },
    {
      borough: `Manhattan`,
      name: "13th Precinct",
      address: "230 East 21st Street",
    },
    {
      borough: `Manhattan`,
      name: "Midtown South Precinct",
      address: "357 West 35th Street",
    },
    {
      borough: `Manhattan`,
      name: "17th Precinct",
      address: "167 East 51st Street",
    },
    {
      borough: `Manhattan`,
      name: "Midtown North Precinct",
      address: "306 West 54th Street",
    },
    {
      borough: `Manhattan`,
      name: "19th Precinct",
      address: "153 East 67th Street",
    },
    {
      borough: `Manhattan`,
      name: "20th Precinct",
      address: "120 West 82nd Street",
    },
    {
      borough: `Manhattan`,
      name: "Central Park Precinct",
      address: "86th St & Transverse Road",
    },
    {
      borough: `Manhattan`,
      name: "23rd Precinct",
      address: "164 East 102nd Street",
    },
    {
      borough: `Manhattan`,
      name: "24th Precinct",
      address: "151 West 100th Street",
    },
    {
      borough: `Manhattan`,
      name: "25th Precinct",
      address: "120 East 119th Street",
    },
    {
      borough: `Manhattan`,
      name: "26th Precinct",
      address: "520 West 126th Street",
    },
    {
      borough: `Manhattan`,
      name: "28th Precinct",
      address: "2271-89 8th Avenue",
    },
    {
      borough: `Manhattan`,
      name: "30th Precinct",
      address: "451 West 151st Street",
    },
    {
      borough: `Manhattan`,
      name: "32nd Precinct",
      address: "250 West 135th Street",
    },
    {
      borough: `Manhattan`,
      name: "33rd Precinct",
      address: "2207 Amsterdam Avenue",
    },
    { borough: `Manhattan`, name: "34th Precinct", address: "4295 Broadway" },
    {
      borough: `Bronx`,
      name: "40th Precinct",
      address: "257 Alexander Avenue",
    },
    {
      borough: `Bronx`,
      name: "41st Precinct",
      address: "1035 Longwood Avenue",
    },
    {
      borough: `Bronx`,
      name: "42nd Precinct",
      address: "830 Washington Avenue",
    },
    { borough: `Bronx`, name: "43rd Precinct", address: "900 Fteley Avenue" },
    { borough: `Bronx`, name: "44th Precinct", address: "2 East 169th Street" },
    { borough: `Bronx`, name: "45th Precinct", address: "2877 Barkley Avenue" },
    { borough: `Bronx`, name: "46th Precinct", address: "2120 Ryer Avenue" },
    { borough: `Bronx`, name: "47th Precinct", address: "4111 Laconia Avenue" },
    {
      borough: `Bronx`,
      name: "48th Precinct",
      address: "450 Cross Bronx Expressway",
    },
    {
      borough: `Bronx`,
      name: "49th Precinct",
      address: "2121 Eastchester Road",
    },
    {
      borough: `Bronx`,
      name: "50th Precinct",
      address: "3450 Kingsbridge Avenue",
    },
    { borough: `Bronx`, name: "52nd Precinct", address: "3016 Webster Avenue" },
    {
      borough: `Brooklyn`,
      name: "60th Precinct",
      address: "2951 West 8th Street",
    },
    {
      borough: `Brooklyn`,
      name: "61st Precinct",
      address: "2575 Coney Island Avenue",
    },
    { borough: `Brooklyn`, name: "62nd Precinct", address: "	1925 Bath Avenue" },
    {
      borough: `Brooklyn`,
      name: "63rd Precinct",
      address: "1844 Brooklyn Avenue",
    },
    { borough: `Brooklyn`, name: "66th Precinct", address: "5822 16th Avenue" },
    {
      borough: `Brooklyn`,
      name: "67th Precinct",
      address: "2820 Snyder Avenue",
    },
    { borough: `Brooklyn`, name: "68th Precinct", address: "333 65th Street" },
    {
      borough: `Brooklyn`,
      name: "69th Precinct",
      address: "9720 Foster Avenue",
    },
    {
      borough: `Brooklyn`,
      name: "70th Precinct",
      address: "154 Lawrence Avenue",
    },
    {
      borough: `Brooklyn`,
      name: "71st Precinct",
      address: "421 Empire Boulevard",
    },
    { borough: `Brooklyn`, name: "72nd Precinct", address: "830 4th Avenue" },
    {
      borough: `Brooklyn`,
      name: "73rd Precinct",
      address: "1470 East New York Avenue",
    },
    {
      borough: `Brooklyn`,
      name: "75th Precinct",
      address: "1000 Sutter Avenue",
    },
    { borough: `Brooklyn`, name: "76th Precinct", address: "191 Union Street" },
    { borough: `Brooklyn`, name: "77th Precinct", address: "127 Utica Avenue" },
    { borough: `Brooklyn`, name: "78th Precinct", address: "65 6th Avenue" },
    {
      borough: `Brooklyn`,
      name: "79th Precinct",
      address: "263 Tompkins Avenue",
    },
    { borough: `Brooklyn`, name: "81st Precinct", address: "30 Ralph Avenue" },
    {
      borough: `Brooklyn`,
      name: "83rd Precinct",
      address: "480 Knickerbocker Avenue",
    },
    { borough: `Brooklyn`, name: "84th Precinct", address: "301 Gold Street" },
    {
      borough: `Brooklyn`,
      name: "88th Precinct",
      address: "298 Classon Avenue",
    },
    { borough: `Brooklyn`, name: "90th Precinct", address: "211 Union Avenue" },
    {
      borough: `Brooklyn`,
      name: "94th Precinct",
      address: "100 Meserole Avenue",
    },
    {
      borough: `Queens`,
      name: "100th Precinct",
      address: "92-24 Rockaway Beach Boulevard",
    },
    { borough: `Queens`, name: "101st Precinct", address: "16-12 Mott Avenue" },
    {
      borough: `Queens`,
      name: "102nd Precinct",
      address: "87-34 118th Street",
    },
    {
      borough: `Queens`,
      name: "103rd Precinct",
      address: "168-02 P.O Edward Byrne Ave",
    },
    {
      borough: `Queens`,
      name: "104th Precinct",
      address: "64-2 Catalpa Avenue",
    },
    {
      borough: `Queens`,
      name: "105th Precinct",
      address: "92-08 222nd Street",
    },
    {
      borough: `Queens`,
      name: "106th Precinct",
      address: "103-53 101st Street",
    },
    {
      borough: `Queens`,
      name: "107th Precinct",
      address: "71-01 Parsons Boulevard",
    },
    { borough: `Queens`, name: "108th Precinct", address: "5-47 50th Avenue" },
    {
      borough: `Queens`,
      name: "109th Precinct",
      address: "37-05 Union Street",
    },
    { borough: `Queens`, name: "110th Precinct", address: "94-41 43rd Avenue" },
    {
      borough: `Queens`,
      name: "111th Precinct",
      address: "45-06 215th Street",
    },
    {
      borough: `Queens`,
      name: "112th Precinct",
      address: "68-40 Austin Street",
    },
    {
      borough: `Queens`,
      name: "113th Precinct",
      address: "167-02 Baisley Boulevard",
    },
    {
      borough: `Queens`,
      name: "114th Precinct",
      address: "34-16 Astoria Boulevard",
    },
    {
      borough: `Queens`,
      name: "115th Precinct",
      address: "92-15 Northern Boulevard",
    },
    {
      borough: `Staten Island`,
      name: "120th Precinct",
      address: "78 Richmond Terrace",
    },
    {
      borough: `Staten Island`,
      name: "121st Precinct",
      address: "970 Richmond Avenue",
    },
    {
      borough: `Staten Island`,
      name: "122nd Precinct",
      address: "2320 Hylan Boulevard",
    },
    {
      borough: `Staten Island`,
      name: "123rd Precinct",
      address: "116 Main Street",
    },
    {
      borough: `All Boroughs`,
      name: "Intel Criminal Intelligence Section Field Intelligence Officer Program",
      address: "One Police Plaza",
    },
  ]);
};
