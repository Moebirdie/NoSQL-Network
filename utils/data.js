const usernames = ["Sarah Johnson",
"David Smith",
"Emily Davis",
"Michael Wilson",
"Jennifer Lee",
"Robert Anderson",
"Jessica Brown",
"William Thomas",
"Samantha Garcia",
"James Martinez",
"Olivia Rodriguez",
"Daniel Clark",
"Sophia Baker",
"Benjamin Hall",
"Ava Turner",
"Christopher Harris",
"Mia Jackson",
"Joseph White",
"Charlotte Martin",
"Ethan Adams",
"Grace Thompson",
"Alexander Green",
"Lily Carter",
"Samuel Mitchell",
"Madison Wright",
"Matthew King",
"Harper Turner",
"Andrew Foster",
"Zoe Parker",
"Henry Nelson"
];

const email = [
"sarah.johnson@email.com",
"david.smith@email.com",
"emily.davis@email.com",
"michael.wilson@email.com",
"jennifer.lee@email.com",
"robert.anderson@email.com",
"jessica.brown@email.com",
"william.thomas@email.com",
"samantha.garcia@email.com",
"james.martinez@email.com",
"olivia.rodriguez@email.com",
"daniel.clark@email.com",
"sophia.baker@email.com",
"benjamin.hall@email.com",
"ava.turner@email.com",
"christopher.harris@email.com",
"mia.jackson@email.com",
"joseph.white@email.com",
"charlotte.martin@email.com",
"ethan.adams@email.com",
"grace.thompson@email.com",
"alexander.green@email.com",
"lily.carter@email.com",
"samuel.mitchell@email.com",
"madison.wright@email.com",
"matthew.king@email.com",
"harper.turner@email.com",
"andrew.foster@email.com",
"zoe.parker@email.com",
"henry.nelson@email.com"
];

const thoughtTexts = [
  "If time travel were possible, would you visit the past or the future?",
"The smell of freshly baked bread is like a warm hug for the soul.",
"Imagine a world where everyone communicated through dance instead of words.",
"What if animals could talk, and we could have conversations with our pets?",
"The feeling of sand between your toes on a beach is pure bliss.",
"What if our dreams were glimpses into parallel universes?",
"The sound of rain on a rooftop is one of nature's most soothing symphonies.",
"If laughter truly is the best medicine, why don't we have laughter prescriptions?",
"What if we had the ability to instantly learn any skill just by touching an object related to it?",
"The concept of infinity is mind-boggling. Can our brains even comprehend it?",
"How different would the world be if we had no need for sleep?",
"Imagine a world where kindness was the currency of choice.",
"What if we could see emotions as colors, like a living, ever-changing rainbow?",
"The beauty of a sunset can make all your worries disappear, if only for a moment.",
"If books could transport you to the worlds they describe, which one would you choose to enter?",
"What if there were portals to other dimensions hidden in the most ordinary places?",
"The taste of a perfectly ripe mango is a slice of heaven on Earth.",
"Can we ever truly understand the mysteries of the universe and our place in it?",
"Imagine being able to relive your favorite memories like a movie in your mind.",
"The smell of a library is a nostalgia trip like no other.",
"If you could have a conversation with any historical figure, who would it be?",
"What if we could communicate with other species on Earth, like dolphins or elephants?",
"The feeling of holding a baby's tiny hand is a reminder of the innocence in the world.",
"If music didn't exist, how would human emotions be expressed?",
"Imagine a world where we could taste colors and see flavors.",
"The power of a genuine smile can brighten even the darkest days.",
"What if we had the ability to rewind and replay moments of our lives like a video?",
"The first snowfall of winter has a magical quality that never gets old.",
"If we could harness the energy of thunderstorms, we might have limitless power.",
"Imagine a world where every act of kindness had a visible ripple effect.",
"The concept of fate and destiny is both comforting and mysterious.",
"If we could hear the thoughts of others, would it bring us closer or tear us apart?",
"The vastness of the ocean reminds us of the infinite possibilities in life.",
"What if our dreams were actually messages from our subconscious trying to guide us?",
"The feeling of accomplishment after a long, hard day's work is deeply satisfying.",
"If we could travel to distant galaxies, what wonders and mysteries would we discover?",
"Imagine a world where mistakes were celebrated as opportunities for growth.",
"The scent of a loved one's perfume can transport you to a different time and place.",
"What if we could experience all the emotions of a lifetime in a single day?",
"The idea of parallel universes raises intriguing questions about the choices we make and their consequences."
];

const reactionTexts = [
  "Wow, that's amazing!",
"I can't believe it!",
"Incredible!",
"No way!",
"That's mind-blowing.",
"Impressive!",
"You're kidding, right?",
"Unbelievable!",
"I'm speechless.",
"That's unbelievable!",
"Absolutely stunning.",
"I'm in awe.",
"That's awesome!",
"Remarkable!",
"I'm impressed.",
"You must be joking!",
"Astounding!",
"That's astonishing.",
"I'm flabbergasted.",
"You're joking, right?",
"No, you didn't!",
"You're incredible!",
"I'm floored.",
"That's fantastic!",
"You're a genius!",
"I'm blown away.",
"That's out of this world.",
"You're a legend!",
"I'm amazed.",
"That's outlandish.",
"You're a wizard!",
"I'm gobsmacked.",
"That's genius!",
"You're a rockstar!",
"I'm dumbfounded.",
"That's pure genius.",
"You're a miracle worker!",
"I'm astounded.",
"That's legendary!",
"You're a mastermind!",
"I'm thunderstruck.",
"That's epic!",
"You're a virtuoso!",
"I'm stupefied.",
"That's legendary!",
"You're a prodigy!",
"I'm flummoxed.",
"That's extraordinary!",
"You're a savant!",
"I'm left speechless."
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username info
const getRandomUsername = () => {
  const randomUsername = getRandomArrItem(usernames);
  const index = usernames.indexOf(randomUsername);
  return { username: randomUsername, index: index };
};

const getRandomUserInfo = getRandomUsername(); 

const getRandomUserEmail = (username) => {
  const index = usernames.indexOf(username);
  if (index !== -1) {
  return email[index];
}
  return null;
};

// Function to generate random thoughts that we can add to the database. Includes reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtTexts),
      username: `${getRandomUserInfo.username}`,
      reactions: [...getRandomReactions(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each application
const getRandomReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(reactionTexts);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactionTexts),
      username: `${getRandomUserInfo.username}`,
    });
  }
  return results;
};

const getRandomFriends = (int) => {
  if (int === 1) {
    return getRandomArrItem(usernames._id);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      id: getRandomArrItem(usernames._id),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUserEmail, getRandomUsername, getRandomThoughts, getRandomReactions, getRandomFriends, getRandomUserEmail };