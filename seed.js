const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL);

const Book = require('./models/book');



async function seed() {
  await Book.create({
    title: "The Lost Apothecary",
    description: "An avenging woman in the guise of a quiet apothecary takes center stage in this propulsive historical fiction debut. In 18th-century London, women come to Nella when they need to take action against the abusive men in their life. Soon, the very young Eliza is involved with an act gone wrong, and a modern woman’s search for meaning, in the present-day, becomes irrevocably tied with the past. With immersive storytelling, a dark, gothic atmosphere and unforgettable characters, this is a subversive debut that should not be missed.",
    status: true,
    email: "tla@osgsmail.icu",
  });
  
  await Book.create({
    title: "Project Hail Mary",
    description: "The only hope for humanity rests with Dr. Ryland Grace—if only he could remember his mission. Andy Weir, the bestselling author of The Martian, delivers another perfect science-based thriller with Project Hail Mary, a tale of impending catastrophe, survival and interstellar adventure.",
    status: true,
    email: "phm@osgsmail.icu",
  });

  await Book.create({
    title: "The Four Winds",
    description: "Perfect for fans of Where the Crawdads Sing, Kristin Hannah’s stunningly beautiful and heart-wrenching dustbowl drama traces the conflicts and challenges faced by Elsa and her family, who journey west in search of a better life. Elsa's critical choices shape the lives of the people around her for generations to come.",
    status: true,
    email: "tfw@osgsmail.icu",
  });


  await Book.create({
    title: "The Things We Lost To The Water",
    description: "Things We Lost to the Water is a mesmerizing debut of familial bonds, assimilation and home that centers around an immigrant Vietnamese family. Separated from her husband, Huong must figure out how to make a life for herself and her two young sons in New Orleans while coming to terms with the fact that her life will never be as she imagined. The family adapts to American life in ways that sometimes threaten to cause a rift between them, and it is only when Hurricane Katrina devastates their new home city that they find their way back to one another.",
    status: true,
    email: "ttwlttw@osgsmail.icu",
  });




  mongoose.disconnect();
}

seed();