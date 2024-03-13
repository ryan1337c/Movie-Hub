import mongoose from "mongoose";

const movieIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const actionMovieIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const horrorMovieIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const thrillerMovieIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const newReleases = [
  {
    _id: movieIds[0],
    title: "Avatar The Way of Water",
    description:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    picturePath: "avatarTWOW.JPG",
    videoPath: "avatarTWOW.mp4",
    genre: "Action",
    isTrending: true,
    date: new Date(2022, 12, 16),
  },
  {
    _id: movieIds[1],
    title: "Babylon",
    description:
      "It features an ensemble cast including Brad Pitt, Margot Robbie, Diego Calva, Jean Smart, Jovan Adepo, and Li Jun Li. It chronicles the rise and fall of multiple characters during Hollywood's transition from silent to sound films in the late 1920s.",
    picturePath: "babylon.JPG",
    videoPath: "babylon.mp4",
    genre: "Action",
    isTrending: true,
    date: new Date(2023, 21, 3),
  },
  {
    _id: movieIds[2],
    title: "Black Adam",
    description:
      "It stars Dwayne Johnson as Teth-Adam / Black Adam, an ancient superhuman who is released from his magic imprisonment by a group of archeologists to free the nation of Kahndaq from the crime syndicate Intergang, whose local leader plans to obtain an ancient relic called the Crown of Sabbac to take control of the nation.",
    picturePath: "blackAdam.JPG",
    videoPath: "blackAdam.mp4",
    genre: "Action",
    isTrending: true,
    date: new Date(2022, 10, 21),
  },
  {
    _id: movieIds[3],
    title: "Creed 3",
    description:
      "Plot. In 2002 Los Angeles, a young Adonis 'Donnie' Creed sneaks out with his best friend, Golden Gloves champion Damian 'Diamond Dame' Anderson, to watch him compete in an underground boxing match. After Dame's victory, he tells Donnie about his aspirations to turn professional and become a world champion.",
    picturePath: "creed3.JPG",
    videoPath: "creed3.mp4",
    genre: "Action",
    isTrending: true,
    date: new Date(2023, 3, 3),
  },
  {
    _id: movieIds[4],
    title: "Puss in Boots",
    description:
      "'Puss in Boots' (Italian: Il gatto con gli stivali; French: Le Maître chat ou le Chat botté; German: Der gestiefelte Kater) is a European fairy tale about an anthropomorphic cat who uses trickery and deceit to gain power, wealth, and the hand in marriage of a princess for his penniless and low-born master.",
    picturePath: "pussAndBoots.JPG",
    videoPath: "pussAndBoots.mp4",
    genre: "Action",
    isTrending: true,
    date: new Date(2022, 12, 21),
  },
  {
    _id: movieIds[5],
    title: "Scream: VI",
    description:
      "Scream VI is a 2023 American slasher film directed by Matt Bettinelli-Olpin and Tyler Gillett, and written by James Vanderbilt and Guy Busick. It is the sequel to Scream (2022) and the sixth installment in the Scream film series.",
    picturePath: "scream6.JPG",
    videoPath: "scream6.mp4",
    genre: "Action",
    isTrending: true,
    date: new Date(2023, 3, 10),
  },
  {
    _id: movieIds[6],
    title: "John Wick 4",
    description:
      "John Wick continues his struggle against the High Table, which is the ultimate authority in the criminal world. Wick has been deemed 'excommunicado' — exiled from the league of assassins — for breaking the rules of the High Table and has a bounty on his head.",
    picturePath: "johnwick4.webp",
    videoPath: "johnwick4.mp4",
    genre: "Action",
    isTrending: true,
    date: new Date(2023, 3, 31),
  },
  {
    _id: movieIds[7],
    title: "The Whale",
    description:
      "The plot follows a reclusive, morbidly obese English teacher who tries to restore his relationship with his teenage daughter. The Whale premiered at the 79th Venice International Film Festival on September 4, 2022.",
    picturePath: "theWhale.JPG",
    videoPath: "theWhale.mp4",
    genre: "Action",
    isTrending: true,
    date: new Date(2022, 12, 21),
  },
];

export const action = [
  {
    _id: actionMovieIds[0],
    title: "Dungeons & Dragons: Honor Among Thieves",
    description:
      "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    picturePath: "d&d.jpg",
    genre: "Action",
    isTrending: false,
    date: new Date(2023, 3, 10),
  },
  {
    _id: actionMovieIds[1],
    title: "John Wick 4",
    description:
      "John Wick continues his struggle against the High Table, which is the ultimate authority in the criminal world. Wick has been deemed 'excommunicado' — exiled from the league of assassins — for breaking the rules of the High Table and has a bounty on his head.",
    picturePath: "johnwick4.webp",
    videoPath: "johnwick4.mp4",
    genre: "Action",
    isTrending: false,
    date: new Date(2023, 3, 31),
  },
  {
    _id: actionMovieIds[2],
    title: "Murder Mystery 2",
    description:
      "Full-time detectives Nick and Audrey are struggling to get their private eye agency off the ground. They find themselves at the center of international abduction when their friend Maharaja, is kidnapped at his own lavish wedding.",
    picturePath: "murderMystery2.jpg",
    genre: "Action",
    isTrending: false,
    date: new Date(2023, 3, 24),
  },
  {
    _id: actionMovieIds[3],
    title: "Shazam! Fury of the Gods",
    description:
      "The film continues the story of teenage Billy Batson who, upon reciting the magic word 'SHAZAM!' is transformed into his adult Super Hero alter ego, Shazam.",
    picturePath: "shazam.jpg",
    genre: "Action",
    isTrending: false,
    date: new Date(2023, 3, 17),
  },
  {
    _id: actionMovieIds[4],
    title: "Blue Beetle",
    description:
      "A Mexican teenager finds an alien beetle that gives him superpowered armor.",
    picturePath: "bluebeetle.webp",
    genre: "Action",
    isTrending: false,
    date: new Date(2023, 8, 18),
  },
  {
    _id: actionMovieIds[5],
    title: "Spider-Man: Across the Spider-Verse",
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    picturePath: "spidermanAcross.jpg",
    genre: "Action",
    isTrending: false,
    date: new Date(2023, 6, 2),
  },
  {
    _id: actionMovieIds[6],
    title: "Kill Boksoon",
    description:
      "A single mother who is a renowned hired killer finds it difficult to achieve a balance between her personal and work life.",
    picturePath: "killBok.jpg",
    genre: "Action",
    isTrending: false,
    date: new Date(2023, 3, 31),
  },
  {
    _id: actionMovieIds[7],
    title: "Guardians of the Galaxy Vol. 3",
    description:
      "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
    picturePath: "gg3.jpg",
    genre: "Action",
    isTrending: false,
    date: new Date(2023, 5, 5),
  },
];

export const thriller = [
  {
    _id: thrillerMovieIds[0],
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    picturePath: "darkknight.jpg",
    genre: "Thriller",
    isTrending: false,
    date: new Date(2008, 7, 18),
  },
  {
    _id: thrillerMovieIds[1],
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    picturePath: "inception.jpg",
    genre: "Thriller",
    isTrending: false,
    date: new Date(2010, 7, 16),
  },
  {
    _id: thrillerMovieIds[2],
    title: "Parasite",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    picturePath: "parasite.jpg",
    genre: "Thriller",
    isTrending: false,
    date: new Date(2019, 5, 30),
  },
  {
    _id: thrillerMovieIds[3],
    title: "Joker",
    description:
      "The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gotham's clown prince and leader of the revolution.",
    picturePath: "joker.jpg",
    genre: "Thriller",
    isTrending: false,
    date: new Date(2019, 5, 30),
  },
  {
    _id: thrillerMovieIds[4],
    title: "V for Vendetta",
    description:
      "In a future British dystopian society, a shadowy freedom fighter, known only by the alias of 'V', plots to overthrow the tyrannical government - with the help of a young woman.",
    picturePath: "vendeta.jpg",
    genre: "Thriller",
    isTrending: false,
    date: new Date(2006, 3, 17),
  },
  {
    _id: thrillerMovieIds[5],
    title: "Mad Max: Fury Road",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.",
    picturePath: "madmax.jpg",
    genre: "Thriller",
    isTrending: false,
    date: new Date(2015, 6, 15),
  },
  {
    _id: thrillerMovieIds[6],
    title: "Logan",
    description:
      "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
    picturePath: "logan.jpg",
    genre: "Thriller",
    isTrending: false,
    date: new Date(2017, 3, 3),
  },
  {
    _id: thrillerMovieIds[7],
    title: "Shutter Island",
    description:
      "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    picturePath: "shutter.jpg",
    genre: "Thriller",
    isTrending: false,
    date: new Date(2010, 2, 19),
  },
];

export const horror = [
  {
    _id: horrorMovieIds[0],
    title: "Evil Dead Rise",
    description:
      "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    picturePath: "evildead.jpg",
    genre: "Horror",
    isTrending: false,
    date: new Date(2023, 4, 21),
  },
  {
    _id: horrorMovieIds[1],
    title: "Scream VI",
    description:
      "In the next installment, the survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.",
    picturePath: "scream6.JPG",
    genre: "Horror",
    isTrending: false,
    date: new Date(2023, 3, 10),
  },
  {
    _id: horrorMovieIds[2],
    title: "Bodies Bodies Bodies",
    description:
      "When a group of rich 20-somethings plan a hurricane party at a remote family mansion, a party game turns deadly in this fresh and funny look at backstabbing, fake friends, and one party gone very, very wrong.",
    picturePath: "bodies.JPG",
    genre: "Horror",
    isTrending: false,
    date: new Date(2022, 3, 14),
  },
  {
    _id: horrorMovieIds[3],
    title: "Terrifier 2",
    description:
      "After being resurrected by a sinister entity, Art the Clown returns to the timid town of Miles County where he targets a teenage girl and her younger brother on Halloween night.",
    picturePath: "terrifier2.jpg",
    genre: "Horror",
    isTrending: false,
    date: new Date(2022, 10, 6),
  },
  {
    _id: horrorMovieIds[4],
    title: "A Quiet Place Part II",
    description:
      "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.",
    picturePath: "quietplace2.jpg",
    genre: "Horror",
    isTrending: false,
    date: new Date(2021, 5, 28),
  },
  {
    _id: horrorMovieIds[5],
    title: "The Shining",
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    picturePath: "shining.jpg",
    genre: "Horror",
    isTrending: false,
    date: new Date(1980, 5, 23),
  },
  {
    _id: horrorMovieIds[6],
    title: "American Psycho",
    description:
      "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
    picturePath: "americanPsycho.jpg",
    genre: "Horror",
    isTrending: false,
    date: new Date(2000, 4, 14),
  },
  {
    _id: horrorMovieIds[7],
    title: "It",
    description:
      "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
    picturePath: "IT.jpg",
    genre: "Horror",
    isTrending: false,
    date: new Date(2017, 9, 8),
  },
];
