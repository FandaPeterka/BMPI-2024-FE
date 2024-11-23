// src/mock/mockData.js

export const mockActors = [
  { id: "28-4532-1", name: "John Doe" },
  { id: "28-4532-2", name: "Jane Smith" },
  { id: "28-4532-3", name: "Alice Johnson" },
  { id: "28-4532-4", name: "Bob Brown" },
  { id: "28-4532-5", name: "Charlie Davis" },
  { id: "28-4532-6", name: "Diana Evans" },
  { id: "28-4532-7", name: "Ethan Foster" },
  { id: "28-4532-8", name: "Fiona Green" },
  { id: "28-4532-9", name: "George Harris" },
  { id: "28-4532-10", name: "Hannah Ingram" },
  { id: "28-4532-11", name: "Ian Jacobs" },
  { id: "28-4532-12", name: "Julia King" },
  { id: "28-4532-13", name: "Kevin Lee" },
  { id: "28-4532-14", name: "Laura Martinez" },
  { id: "28-4532-15", name: "Michael Nelson" },
  { id: "28-4532-16", name: "Nina Owens" },
  { id: "28-4532-17", name: "Oliver Perez" },
  { id: "28-4532-18", name: "Paula Quinn" },
  { id: "28-4532-19", name: "Quentin Ross" },
  { id: "28-4532-20", name: "Rachel Scott" },
  { id: "28-4532-21", name: "Samuel Turner" },
  { id: "28-4532-22", name: "Tina Underwood" },
  { id: "28-4532-23", name: "Uma Vance" },
  { id: "28-4532-24", name: "Victor White" },
  { id: "28-4532-25", name: "Wendy Xavier" },
  { id: "28-4532-26", name: "Xander Young" },
  { id: "28-4532-27", name: "Yvonne Zimmerman" },
  { id: "28-4532-28", name: "Zachary Allen" },
  // Additional actors can be added here if needed
];

export const mockPlays = [
  { id: "101", name: "Hamlet" },
  { id: "102", name: "Othello" },
  { id: "103", name: "Macbeth" },
  { id: "104", name: "Romeo and Juliet" },
  { id: "105", name: "King Lear" },
  { id: "106", name: "The Tempest" },
  { id: "107", name: "A Midsummer Night's Dream" },
  { id: "108", name: "Twelfth Night" },
  { id: "109", name: "Julius Caesar" },
  { id: "110", name: "Much Ado About Nothing" },
  // Additional plays can be added here if needed
];

export const mockScenes = [
  // Scenes for "Hamlet"
  {
    id: "001",
    name: "The Ghostly Encounter",
    playId: "101",
    notes: "Hamlet meets the ghost of his father.",
    figures: [
      { id: "f1", name: "Hamlet", assignedUser: "28-4532-1" },
      { id: "f2", name: "Ghost of King Hamlet", assignedUser: "28-4532-3" },
    ],
    isFinished: false,
  },
  {
    id: "002",
    name: "Polonius's Advice",
    playId: "101",
    notes: "Polonius gives advice to Laertes.",
    figures: [
      { id: "f3", name: "Polonius", assignedUser: "28-4532-4" },
      { id: "f4", name: "Laertes", assignedUser: "28-4532-5" },
    ],
    isFinished: false,
  },
  {
    id: "003",
    name: "The Duel",
    playId: "101",
    notes: "Hamlet fights Laertes.",
    figures: [
      { id: "f5", name: "Hamlet", assignedUser: "28-4532-1" },
      { id: "f6", name: "Laertes", assignedUser: "28-4532-5" },
      { id: "f7", name: "Ophelia", assignedUser: "28-4532-2" },
    ],
    isFinished: false,
  },

  // Scenes for "Othello"
  {
    id: "004",
    name: "Iago's Plot",
    playId: "102",
    notes: "Iago begins his scheme against Othello.",
    figures: [
      { id: "f8", name: "Iago", assignedUser: "28-4532-6" },
      { id: "f9", name: "Roderigo", assignedUser: "28-4532-7" },
    ],
    isFinished: false,
  },
  {
    id: "005",
    name: "The Handkerchief",
    playId: "102",
    notes: "Othello entrusts his handkerchief to Desdemona.",
    figures: [
      { id: "f10", name: "Othello", assignedUser: "28-4532-8" },
      { id: "f11", name: "Desdemona", assignedUser: "28-4532-9" },
    ],
    isFinished: false,
  },
  {
    id: "006",
    name: "The Tragic Conclusion",
    playId: "102",
    notes: "Othello's realization and the tragic end.",
    figures: [
      { id: "f12", name: "Othello", assignedUser: "28-4532-8" },
      { id: "f13", name: "Emilia", assignedUser: "28-4532-10" },
    ],
    isFinished: false,
  },

  // Scenes for "Macbeth"
  {
    id: "007",
    name: "The Witches' Prophecy",
    playId: "103",
    notes: "Macbeth and Banquo encounter the witches.",
    figures: [
      { id: "f14", name: "Macbeth", assignedUser: "28-4532-11" },
      { id: "f15", name: "Banquo", assignedUser: "28-4532-12" },
      { id: "f16", name: "First Witch", assignedUser: "28-4532-13" },
    ],
    isFinished: false,
  },
  {
    id: "008",
    name: "Lady Macbeth's Ambition",
    playId: "103",
    notes: "Lady Macbeth persuades Macbeth to seize power.",
    figures: [
      { id: "f17", name: "Lady Macbeth", assignedUser: "28-4532-14" },
      { id: "f18", name: "Macbeth", assignedUser: "28-4532-11" },
    ],
    isFinished: false,
  },
  {
    id: "009",
    name: "The Banquet",
    playId: "103",
    notes: "Macbeth hosts a banquet disturbed by Banquo's ghost.",
    figures: [
      { id: "f19", name: "Macbeth", assignedUser: "28-4532-11" },
      { id: "f20", name: "Lady Macbeth", assignedUser: "28-4532-14" },
      { id: "f21", name: "Banquo's Ghost", assignedUser: "28-4532-15" },
    ],
    isFinished: false,
  },

  // Scenes for "Romeo and Juliet"
  {
    id: "010",
    name: "The Balcony Scene",
    playId: "104",
    notes: "Romeo and Juliet declare their love.",
    figures: [
      { id: "f22", name: "Romeo", assignedUser: "28-4532-16" },
      { id: "f23", name: "Juliet", assignedUser: "28-4532-17" },
    ],
    isFinished: false,
  },
  {
    id: "011",
    name: "The Tragic Deaths",
    playId: "104",
    notes: "Romeo and Juliet both take their lives.",
    figures: [
      { id: "f24", name: "Romeo", assignedUser: "28-4532-16" },
      { id: "f25", name: "Juliet", assignedUser: "28-4532-17" },
      { id: "f26", name: "Friar Laurence", assignedUser: "28-4532-18" },
    ],
    isFinished: false,
  },

  // Scenes for "King Lear"
  {
    id: "012",
    name: "The Division of the Kingdom",
    playId: "105",
    notes: "King Lear divides his kingdom among his daughters.",
    figures: [
      { id: "f27", name: "King Lear", assignedUser: "28-4532-19" },
      { id: "f28", name: "Goneril", assignedUser: "28-4532-20" },
      { id: "f29", name: "Regan", assignedUser: "28-4532-21" },
      { id: "f30", name: "Cordelia", assignedUser: "28-4532-22" },
    ],
    isFinished: false,
  },
  {
    id: "013",
    name: "The Betrayal",
    playId: "105",
    notes: "Goneril and Regan betray King Lear.",
    figures: [
      { id: "f31", name: "Goneril", assignedUser: "28-4532-20" },
      { id: "f32", name: "Regan", assignedUser: "28-4532-21" },
      { id: "f33", name: "King Lear", assignedUser: "28-4532-19" },
    ],
    isFinished: false,
  },
  {
    id: "014",
    name: "The Storm",
    playId: "105",
    notes: "King Lear wanders in a storm, expressing his anguish.",
    figures: [
      { id: "f34", name: "King Lear", assignedUser: "28-4532-19" },
      { id: "f35", name: "Edgar", assignedUser: "28-4532-23" },
      { id: "f36", name: "Gloucester", assignedUser: "28-4532-24" },
    ],
    isFinished: false,
  },

  // Scenes for "The Tempest"
  {
    id: "015",
    name: "Prospero's Magic",
    playId: "106",
    notes: "Prospero uses magic to control the island and its inhabitants.",
    figures: [
      { id: "f37", name: "Prospero", assignedUser: "28-4532-25" },
      { id: "f38", name: "Ariel", assignedUser: "28-4532-26" },
      { id: "f39", name: "Caliban", assignedUser: "28-4532-27" },
    ],
    isFinished: false,
  },
  {
    id: "016",
    name: "Miranda and Ferdinand",
    playId: "106",
    notes: "Miranda meets Ferdinand and they fall in love.",
    figures: [
      { id: "f40", name: "Miranda", assignedUser: "28-4532-28" },
      { id: "f41", name: "Ferdinand", assignedUser: "28-4532-1" },
    ],
    isFinished: false,
  },
  {
    id: "017",
    name: "The Final Reconciliation",
    playId: "106",
    notes: "Prospero forgives his enemies and relinquishes his magic.",
    figures: [
      { id: "f42", name: "Prospero", assignedUser: "28-4532-25" },
      { id: "f43", name: "Antonio", assignedUser: "28-4532-2" },
      { id: "f44", name: "Sebastian", assignedUser: "28-4532-3" },
      { id: "f45", name: "Gonzalo", assignedUser: "28-4532-4" },
    ],
    isFinished: false,
  },

  // Scenes for "A Midsummer Night's Dream"
  {
    id: "018",
    name: "The Lovers' Flight",
    playId: "107",
    notes: "Hermia, Lysander, Demetrius, and Helena flee to the forest.",
    figures: [
      { id: "f46", name: "Hermia", assignedUser: "28-4532-5" },
      { id: "f47", name: "Lysander", assignedUser: "28-4532-6" },
      { id: "f48", name: "Demetrius", assignedUser: "28-4532-7" },
      { id: "f49", name: "Helena", assignedUser: "28-4532-8" },
    ],
    isFinished: false,
  },
  {
    id: "019",
    name: "The Fairies' Mischief",
    playId: "107",
    notes: "Puck uses magic to cause confusion among the lovers.",
    figures: [
      { id: "f50", name: "Puck", assignedUser: "28-4532-9" },
      { id: "f51", name: "Oberon", assignedUser: "28-4532-10" },
      { id: "f52", name: "Titania", assignedUser: "28-4532-11" },
    ],
    isFinished: false,
  },
  {
    id: "020",
    name: "The Play Within the Play",
    playId: "107",
    notes: "The mechanicals perform their play for the Duke's wedding.",
    figures: [
      { id: "f53", name: "Bottom", assignedUser: "28-4532-12" },
      { id: "f54", name: "Snout", assignedUser: "28-4532-13" },
      { id: "f55", name: "Snug", assignedUser: "28-4532-14" },
      { id: "f56", name: "Starveling", assignedUser: "28-4532-15" },
    ],
    isFinished: false,
  },

  // Scenes for "Twelfth Night"
  {
    id: "021",
    name: "Viola Disguises as Cesario",
    playId: "108",
    notes: "Viola decides to disguise herself as Cesario.",
    figures: [
      { id: "f57", name: "Viola", assignedUser: "28-4532-16" },
      { id: "f58", name: "Orsino", assignedUser: "28-4532-17" },
      { id: "f59", name: "Olivia", assignedUser: "28-4532-18" },
    ],
    isFinished: false,
  },
  {
    id: "022",
    name: "Sir Toby's Mischief",
    playId: "108",
    notes: "Sir Toby and Maria plot to disrupt Malvolio.",
    figures: [
      { id: "f60", name: "Sir Toby Belch", assignedUser: "28-4532-19" },
      { id: "f61", name: "Maria", assignedUser: "28-4532-20" },
      { id: "f62", name: "Malvolio", assignedUser: "28-4532-21" },
    ],
    isFinished: false,
  },
  {
    id: "023",
    name: "The Final Revelations",
    playId: "108",
    notes: "All disguises are revealed and conflicts are resolved.",
    figures: [
      { id: "f63", name: "Viola", assignedUser: "28-4532-16" },
      { id: "f64", name: "Orsino", assignedUser: "28-4532-17" },
      { id: "f65", name: "Olivia", assignedUser: "28-4532-18" },
      { id: "f66", name: "Malvolio", assignedUser: "28-4532-21" },
    ],
    isFinished: false,
  },

  // Scenes for "Julius Caesar"
  {
    id: "024",
    name: "The Ides of March",
    playId: "109",
    notes: "The conspiracy against Caesar is formed.",
    figures: [
      { id: "f67", name: "Julius Caesar", assignedUser: "28-4532-22" },
      { id: "f68", name: "Brutus", assignedUser: "28-4532-23" },
      { id: "f69", name: "Cassius", assignedUser: "28-4532-24" },
    ],
    isFinished: false,
  },
  {
    id: "025",
    name: "The Assassination",
    playId: "109",
    notes: "Caesar is assassinated in the Senate.",
    figures: [
      { id: "f70", name: "Julius Caesar", assignedUser: "28-4532-22" },
      { id: "f71", name: "Brutus", assignedUser: "28-4532-23" },
      { id: "f72", name: "Cassius", assignedUser: "28-4532-24" },
      { id: "f73", name: "Casca", assignedUser: "28-4532-25" },
    ],
    isFinished: false,
  },
  {
    id: "026",
    name: "Mark Antony's Oration",
    playId: "109",
    notes: "Antony's famous speech turning public opinion.",
    figures: [
      { id: "f74", name: "Mark Antony", assignedUser: "28-4532-26" },
      { id: "f75", name: "Brutus", assignedUser: "28-4532-23" },
    ],
    isFinished: false,
  },

  // Scenes for "Much Ado About Nothing"
  {
    id: "027",
    name: "Beatrice and Benedick's Banter",
    playId: "110",
    notes: "Beatrice and Benedick engage in witty exchanges.",
    figures: [
      { id: "f76", name: "Beatrice", assignedUser: "28-4532-27" },
      { id: "f77", name: "Benedick", assignedUser: "28-4532-28" },
    ],
    isFinished: false,
  },
  {
    id: "028",
    name: "Don John's Deception",
    playId: "110",
    notes: "Don John schemes to create discord among the lovers.",
    figures: [
      { id: "f78", name: "Don John", assignedUser: "28-4532-1" },
      { id: "f79", name: "Claudio", assignedUser: "28-4532-2" },
      { id: "f80", name: "Hero", assignedUser: "28-4532-3" },
    ],
    isFinished: false,
  },
  {
    id: "029",
    name: "The Final Reconciliation",
    playId: "110",
    notes: "Misunderstandings are cleared, and couples unite.",
    figures: [
      { id: "f81", name: "Beatrice", assignedUser: "28-4532-27" },
      { id: "f82", name: "Benedick", assignedUser: "28-4532-28" },
      { id: "f83", name: "Claudio", assignedUser: "28-4532-2" },
      { id: "f84", name: "Hero", assignedUser: "28-4532-3" },
    ],
    isFinished: false,
  },
];

export const mockRehearsals = [
  {
    id: "501",
    playName: "Hamlet",
    locationId: "301",
    date: "2024-04-10T09:00:00.000Z",
    valid: true,
    sceneList: ["001", "002", "003"],
    presenceList: [
      { userId: "28-4532-1", status: null },
      { userId: "28-4532-2", status: null },
      { userId: "28-4532-3", status: null },
    ],
  },
  {
    id: "502",
    playName: "Othello",
    locationId: "302",
    date: "2024-04-12T14:00:00.000Z",
    valid: true,
    sceneList: ["004", "005", "006"],
    presenceList: [
      { userId: "28-4532-6", status: null },
      { userId: "28-4532-7", status: null },
      { userId: "28-4532-8", status: null },
    ],
  },
  {
    id: "503",
    playName: "Macbeth",
    locationId: "303",
    date: "2024-04-14T11:00:00.000Z",
    valid: false,
    sceneList: ["007", "008", "009"],
    presenceList: [
      { userId: "28-4532-11", status: null },
      { userId: "28-4532-12", status: null },
      { userId: "28-4532-13", status: null },
    ],
  },
  {
    id: "504",
    playName: "Romeo and Juliet",
    locationId: "304",
    date: "2024-04-16T10:00:00.000Z",
    valid: true,
    sceneList: ["010", "011"],
    presenceList: [
      { userId: "28-4532-16", status: null },
      { userId: "28-4532-17", status: null },
      { userId: "28-4532-18", status: null },
    ],
  },
  {
    id: "505",
    playName: "King Lear",
    locationId: "305",
    date: "2024-04-18T15:00:00.000Z",
    valid: false,
    sceneList: ["012", "013", "014"],
    presenceList: [
      { userId: "28-4532-19", status: null },
      { userId: "28-4532-20", status: null },
      { userId: "28-4532-21", status: null },
    ],
  },
  {
    id: "506",
    playName: "The Tempest",
    locationId: "306",
    date: "2024-04-20T09:00:00.000Z",
    valid: true,
    sceneList: ["015", "016", "017"],
    presenceList: [
      { userId: "28-4532-22", status: null },
      { userId: "28-4532-23", status: null },
      { userId: "28-4532-24", status: null },
    ],
  },
  {
    id: "507",
    playName: "A Midsummer Night's Dream",
    locationId: "307",
    date: "2024-04-22T14:00:00.000Z",
    valid: true,
    sceneList: ["018", "019", "020"],
    presenceList: [
      { userId: "28-4532-25", status: null },
      { userId: "28-4532-26", status: null },
      { userId: "28-4532-27", status: null },
    ],
  },
  {
    id: "508",
    playName: "Twelfth Night",
    locationId: "308",
    date: "2024-04-24T11:00:00.000Z",
    valid: true,
    sceneList: ["021", "022", "023"],
    presenceList: [
      { userId: "28-4532-28", status: null },
      { userId: "28-4532-1", status: null },
      { userId: "28-4532-2", status: null },
    ],
  },
  {
    id: "509",
    playName: "Julius Caesar",
    locationId: "309",
    date: "2024-04-26T10:00:00.000Z",
    valid: true,
    sceneList: ["024", "025", "026"],
    presenceList: [
      { userId: "28-4532-3", status: null },
      { userId: "28-4532-4", status: null },
      { userId: "28-4532-5", status: null },
    ],
  },
  {
    id: "510",
    playName: "Much Ado About Nothing",
    locationId: "310",
    date: "2024-04-28T15:00:00.000Z",
    valid: true,
    sceneList: ["027", "028", "029"],
    presenceList: [
      { userId: "28-4532-6", status: null },
      { userId: "28-4532-7", status: null },
      { userId: "28-4532-8", status: null },
    ],
  },
  // Additional rehearsals can be added here if needed
];

export const mockLocations = [
  {
    id: "301",
    name: "Main Stage",
    address: "123 Theater Ave, Cityville",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-01T14:00:00.000Z",
      mts: "2024-03-05T15:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "302",
    name: "Rehearsal Room A",
    address: "456 Studio Blvd, Cityville",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-02T10:00:00.000Z",
      mts: "2024-03-06T11:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "303",
    name: "Outdoor Arena",
    address: "789 Open Air St, Suburbia",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-03T13:00:00.000Z",
      mts: "2024-03-07T14:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "304",
    name: "Black Box Theater",
    address: "321 Broadway, Metropolis",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-04T09:00:00.000Z",
      mts: "2024-03-08T10:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "305",
    name: "The Grand Hall",
    address: "654 Concert Ln, Music City",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-05T16:00:00.000Z",
      mts: "2024-03-09T17:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "306",
    name: "Studio B",
    address: "987 Production Rd, Filmton",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-06T08:00:00.000Z",
      mts: "2024-03-10T09:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "307",
    name: "Amphitheater",
    address: "159 Stage St, Amphitown",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-07T12:00:00.000Z",
      mts: "2024-03-11T13:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "308",
    name: "Drama Hall",
    address: "753 Playhouse Ave, Drama City",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-08T11:00:00.000Z",
      mts: "2024-03-12T12:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "309",
    name: "Concert Hall",
    address: "852 Melody Blvd, Harmonia",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-09T15:00:00.000Z",
      mts: "2024-03-13T16:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "310",
    name: "Proscenium Stage",
    address: "951 Curtain Rd, Thespian City",
    active: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-10T14:00:00.000Z",
      mts: "2024-03-14T15:00:00.000Z",
      rev: 1,
    },
  },
  // Additional locations can be added here if needed
];

export const mockNotifications = [
  {
    id: "701",
    text: "Rehearsal for 'Hamlet' is scheduled on April 10th at Main Stage.",
    userId: "28-4532-1",
    seen: false,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-30T08:00:00.000Z",
      mts: "2024-03-30T09:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "702",
    text: "New scene added to 'Othello': The Handkerchief.",
    userId: "28-4532-2",
    seen: false,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-03-31T10:00:00.000Z",
      mts: "2024-03-31T11:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "703",
    text: "Reminder: 'Macbeth' rehearsal on April 14th at Outdoor Arena.",
    userId: "28-4532-3",
    seen: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-04-01T10:00:00.000Z",
      mts: "2024-04-01T11:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "704",
    text: "Theater maintenance scheduled for Black Box Theater on April 5th.",
    userId: "28-4532-4",
    seen: false,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-04-02T09:00:00.000Z",
      mts: "2024-04-02T10:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "705",
    text: "New actor auditioning for 'Romeo and Juliet'.",
    userId: "28-4532-5",
    seen: false,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-04-03T12:00:00.000Z",
      mts: "2024-04-03T13:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "706",
    text: "Cancellation: 'King Lear' rehearsal on April 18th due to weather.",
    userId: "28-4532-6",
    seen: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-04-04T10:00:00.000Z",
      mts: "2024-04-04T11:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "707",
    text: "Invitation: Attend the premiere of 'The Tempest' on May 1st.",
    userId: "28-4532-7",
    seen: false,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-04-05T14:00:00.000Z",
      mts: "2024-04-05T15:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "708",
    text: "Deadline: Submit costumes for 'A Midsummer Night's Dream' by April 20th.",
    userId: "28-4532-8",
    seen: false,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-04-06T09:00:00.000Z",
      mts: "2024-04-06T10:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "709",
    text: "Workshop: Voice training session for 'Twelfth Night' on April 25th.",
    userId: "28-4532-9",
    seen: false,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-04-07T11:00:00.000Z",
      mts: "2024-04-07T12:00:00.000Z",
      rev: 1,
    },
  },
  {
    id: "710",
    text: "Success: 'Julius Caesar' received positive reviews.",
    userId: "28-4532-10",
    seen: true,
    awid: "583ebf71c50ed33d7c03dda9",
    sys: {
      cts: "2024-04-08T13:00:00.000Z",
      mts: "2024-04-08T14:00:00.000Z",
      rev: 1,
    },
  },
  // Additional notifications can be added here if needed
];