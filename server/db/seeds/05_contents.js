/** @format */

const Content = require("../../models/Content");

/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("contents").del();

	await knex.raw("ALTER SEQUENCE contents_id_seq RESTART WITH 1");

	// create(report_id, content, type, user_id);
	// every content should have ONE text content
	// you must correctly link both the report id and the user id
	await Content.create(1, `"On October 22nd, around 8 PM, I was walking through my neighborhood when I noticed an unmarked, undercover car pull up abruptly beside me. A man, who later identified himself as Officer Ohshane Cole, exited the vehicle and immediately approached me without any prior warning or indication that he was a police officer. I was surprised and confused, as I hadn’t done anything to warrant police attention. Officer Cole and his partner began questioning me in an aggressive manner, creating a highly intimidating atmosphere.
	
	Without providing a valid reason for stopping me, Officer Cole conducted a stop-and-frisk, an action that felt entirely unjustified and illegal. He patted me down, inspecting my pockets and personal belongings, including my fanny pack, all while his partner stood close by, verbally harassing and taunting me. They continued to demand that I ‘cooperate’ and ‘stay silent,’ despite my repeated attempts to ask why I was being searched in this manner.
	
	Officer Cole’s partner seemed more intent on provoking me than conducting any lawful procedure, making demeaning comments about my appearance and accusing me of carrying contraband without evidence. The entire ordeal felt like an orchestrated act of harassment under the guise of law enforcement. After they found nothing in my fanny pack or on my person, they finally left without providing any explanation, citation, or apology.
	
	This experience left me feeling violated, helpless, and deeply mistrustful of law enforcement. There was absolutely no reasonable suspicion or probable cause for this stop-and-frisk, and I am certain this incident was a direct violation of my Fourth Amendment rights. Since that night, I’ve been extremely anxious and fearful in public spaces, worried that this type of harassment could occur again, especially from officers who are supposed to uphold the law instead of misuse their authority."`, "text", 1);

	await Content.create(1, "https://res.cloudinary.com/dr0fnb0zr/video/upload/v1730338584/v12044gd0000ck5j6n3c77u6665ph0og_a7bjdh.mp4", "video", 1);
	/**- - - - - - - - - - - - - -  -- - - - - - - -  */
	await Content.create(2, `"On October 15th, around noon, I was driving home after a long shift at work. I was following the speed limit and hadn’t done anything that should have drawn attention. Out of nowhere, I noticed police lights flashing behind me, so I pulled over to the side of the road, expecting a routine check. I rolled down my window slightly, prepared to cooperate, but before I could even ask what was wrong, the officer opened my car door without permission. He didn’t introduce himself or provide any reason for stopping me. He simply ordered me to step out of the vehicle.

When I hesitated, caught off guard by his aggressive tone, he grabbed my arm and pulled me out of the car. I felt completely helpless and confused, wondering why this was happening, but every time I tried to ask, he cut me off, demanding that I 'comply.' I was then instructed to stand by the side of the road, with no explanation about why I had been stopped in the first place.

The officer continued to search my car without my consent while another officer stood by, watching me closely. I was left standing there, feeling exposed and frightened, with no clear understanding of what I’d done wrong. After what felt like an eternity, they finally allowed me to leave but provided no ticket, no explanation, and no apology.

The entire experience left me feeling violated, powerless, and targeted. I’m aware of my rights and believe there was no just cause for them to open my door and forcibly remove me from my car. Since this incident, I’ve felt nervous every time I see a police car, worried that something like this could happen again for no reason."`, "text", 2);

	await Content.create(2, "https://res.cloudinary.com/dr0fnb0zr/video/upload/v1730337473/v12044gd0000chafdcbc77ucrc4demv0_jvxoey.mp4", 'video', 2)
	/**- - - - - - - - - - - - - -  -- - - - - - - -  */


	// await Content.create(3, "this cop sucks too", "text", 2);

	// await Content.create(4, "this cop strip searched me", "text", 3);

	// oshane seeded report

	// await Content.create()
};
