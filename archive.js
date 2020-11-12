var videos = [
  //Commercials
  {id: "K1nUKXdOVJ0", title: "Trip to Chuck E Cheese's", year: "2004"},
  {id: "sdx-VnJrA_E", title: "Reese's Puffs | Amazing Things Can Happen", year: "2005"},
  {id: "zsDGttfpm9k", title: "Airheads | Spongebob", year: "2004"},
  {id: "aVS1zoQhd44", title: "Airheads | Blast Off", year: "2007"},
  {id: "ngwSbRDiIjA", title: "Gusher's | Mystery", year: "1999"},
  {id: "iUv7RWQYx5s", title: "Gusher's | Sneeze", year: "2006"},
  {id: "aaH0aOwdFk4", title: "Nestle Wonder Ball | Disney", year: "2000"},
  {id: "x46JalVxg48", title: "Nestle Wonder Ball | Pokemon", year: "2000"},
  {id: "fqW_NX84gXg", title: "Lucky Charms | Great Green Clover", year: "2004"},
  {id: "hgo5Z_3vki4", title: "Mighty Beanz | Rock Star", year: "2002"},
  {id: "QXhOyL5LfI4", title: "Trix | The Great Train Robbery", year: "2003"},
  {id: "DrW1QXFRV2E", title: "Trix | The Great Train Robbery", year: "2003"},
  {id: "aWsmA6KY4Xs", title: "Kidz Bop 6", year: "2004"},
  {id: "HN997cdAsJ4", title: "Kidz Bop 3", year: "2003"},
  {id: "CL6KYrFmb0U", title: "Fruity Pebbles | Robot Dog", year: "2002"},
  {id: "RcB1U7i3Eq8", title: "Baby Bottle Pop | Candy Crunch", year: "2005"},
  {id: "OF1Ef4mzXJg", title: "FurReal Friends | Newborn Puppies", year: "2004"},
  {id: "1H_thVb4Tmk", title: "Frosted Flakes | Hey Tony", year: "2003"},
  {id: "zny7-XIaTus", title: "Kool Aid Jammers", year: "2005"},
  {id: "EWX2XUgmbEA", title: "Super Swimmers | Shark Attack", year: "2002"},
  {id: "IEeQx75dAaA", title: "Nerf | Showtime Hoops", year: "2006"},
  {id: "NcguChS6Px0", title: "Star Wars Lightsaber", year: "2003"},
  {id: "61aIZGW5les", title: "McDonald's | He-Man Happy Meal", year: "2000"},
  {id: "6T0ZXKunoD0", title: "Honey-Combs | Recipe for Disaster", year: "2003"},
  {id: "w_idrCKT_Tw", title: "Lunchables | Scooby Doo", year: "2002"},
  {id: "DlE44JiupaQ", title: "Lunchables | The Great Dillini", year: "2002"},
  {id: "D3PbmjVaO1Q", title: "Cheetos | Fishing", year: "2005"},
  {id: "aX2q7dAWIPI", title: "Capri Sun", year: "2002"},
  {id: "-SesasYdKVI", title: "Capri Sun | Respect the Pouch", year: "2007"},
  {id: "VDDf7DSJBNI", title: "Cap'n Crunch | Babysitter", year: "2007"},
  {id: "y0AJPk_Xic4", title: "Burger King | Foster's Home for Imaginary Friends Kids Meal", year: "2006"},
  {id: "2jyQE1_Sq7M", title: "Go Gurt | Dexter's Laboratory", year: "2003"},
  {id: "U3Ax8UslBis", title: "Go Gurt | Skateboarding", year: "2003"},
  //Promos
  {id: "cwptAQgsbjg", title: "30th Nicktoon Promo", year: "2007"},
  {id: "rUu5SQSrjD8", title: "The Times They Are A'Changin'", year: "2003"},
  {id: "x_JapK1zN7A", title: "Ed, Edd n Eddy Promo", year: "1999"},
  {id: "UGcNYV4geuI", title: "Dexter's Laboratory Station ID", year: "1997"},
  {id: "yCm_2XV0Ej4", title: "Kid's Choice Awards 2005 Promo", year: "2005"},
  {id: "HGoD8Lj7zjE", title: "Nicktoons | Not Just Cartoons", year: "2002"},
  {id: "Azu5gsncKAs", title: "Cartoon Cartoon Fridays Promo", year: "2002"},
  {id: "oWlZzfrSoA4", title: "Out of Jimmy's Head Promo", year: "2007"},
  {id: "7hO-IlgWawU", title: "Disney Channel TTI | Lousy Friend", year: "2006"},
  {id: "n7LvuC4zeuQ", title: "Disney Channel TTI | Glasses", year: "2006"},
  {id: "fr-xinCZnLI", title: "Disney Channel 411 | ToonTown", year: "2007"},
  {id: "kzsPSQlIqJ8", title: "Disney Channel 411 | Radio Disney Music Awards", year: "2005"},
  {id: "F5DVk4VjQho", title: "Disney Channel Hobbies | Magic", year: "2004"},
  {id: "869ro0Mjmi0", title: "Disney Channel Hobbies | Yo Yo", year: "2004"},
  {id: "41FhUUOwA2Q", title: "Disney Channel Show Your Stuff | Snowglobes", year: "2004"},
  //Dexter's Laboratory
  {id: "Y3wxBrpYy6s", title: "Dexter's Laboratory – Rude Removal", year: "1998"},
  //Fairly Odd Parents
  {id: "M_L35ETuB8s", title: "Fairly OddParents | A Wish Too Far!; Tiny Timmy!", year: "2001"},
  {id: "q7Vyse2dsAs", title: "Fairly OddParents | Scary Godparents", year: "2002"},
  {id: "ZOib-0zYpm0", title: "Fairly OddParents | Timmy TV", year: "2005"},
  {id: "YYe_pFMgLUs", title: "Fairly OddParents | Ruled Out; That's Life", year: "2002"},
  {id: "YYe_pFMgLUs", title: "Fairly OddParents | Cosmo Con; Wanda's Day Off", year: "2003"},
  {id: "r3P0Q3WK7rU", title: "Fairly OddParents | Timmy's 2-D House of Horror; It's a Wishful Life", year: "2005"},
  {id: "QMETZf_D58E", title: "Fairly OddParents | Beddy Bye; The Grass is Greener", year: "2003"},
  //CatDog
  {id: "RrtXZi-ATuY", title: "CatDog | All You Need is Lube", year: "1998"},
  {id: "tOSyUddZCA4", title: "CatDog | Diamond Fever; The Pet", year: "1998"},
  {id: "Fi_vNW9_LMU", title: "CatDog | Dog Gone; All You Can't Eat", year: "1998"},
  {id: "c3xKh4u4gWU", title: "CatDog | Shriek Loves Dog; Workforce", year: "1998"},
  //Angry Beavers
  {id: "PRi79dHYI3c", title: "Angry Beavers | Bug-a-Boo", year: "1997"},
  {id: "pY9h07k0Hbw", title: "Angry Beavers | I Dare You", year: "1997"},
  {id: "hsFGboWHQjM", title: "Angry Beavers | Moby Dopes", year: "2000"},
  {id: "FsSdWz2xR9c", title: "Angry Beavers | Born to be Beavers; Up All Night", year: "1997"},
  //Yakkity Yak
  {id: "U7AlHmIIX-8", title: "Yakkity Yak | Pineapple Upside Dead Cake", year: "2002"},
  {id: "jqqmDuXVgUw", title: "Yakkity Yak | Snow Biz", year: "2002"},
  {id: "9FsdoR4z1yg", title: "Yakkity Yak | Yakstravaganza", year: "2002"},
  {id: "Jt1_AP6_Tf4", title: "Yakkity Yak | Nature Calls", year: "2002"},
  //Rocko's Modern Life
  {id: "HaJzW_icrmc", title: "Rocko's Modern Life | Spitballs; Popcorn Pandemonium", year: "1993"},
  {id: "wREBKTEtRPA", title: "Rocko's Modern Life | Leap Frogs; Bedfellows", year: "1993"},
  {id: "QTd4EFwUzTI", title: "Rocko's Modern Life | Sucker for the Suck-O-Matic; Canned", year: "1993"},
  {id: "11KHUIb6AiI", title: "Rocko's Modern Life | Rocko's Happy Sack; Flu In U Enza", year: "1993"},
  //Codename: Kids Next Door
  {id: "boaNiyZcZdU", title: "Codename: Kids Next Door | Operation: T.U.R.N.I.P.; Operation: M.I.N.I.G.O.L.F.", year: "1998"},
  {id: "qRYrdduPAtc", title: "Codename: Kids Next Door | Operation: I-S.C.R.E.A.M.; Operation: C.A.N.N.O.N.", year: "1998"},
  //My Life as a Teenage Robot
  {id: "8z1--u_jP_o", title: "My Life as a Teenage Robot | Doom with a View", year: "1999"},
  {id: "pI1G2-MK4mk", title: "My Life as a Teenage Robot | Attack of the 5 1/2 Foot Geek", year: "1999"},
  {id: "nZsUa1JME6E", title: "My Life as a Teenage Robot | Class Action", year: "1999"},
  {id: "7dqEsjA-L60", title: "My Life as a Teenage Robot | Raggedy Android", year: "1999"},
  {id: "i3KVxL7SNwk", title: "My Life as a Teenage Robot | Pest Control", year: "1999"},
  //Watch My Chops
  {id: "eBJdxS7ssXA", title: "Watch My Chops | Stroke of Genius", year: "2003"},
  {id: "3KXjYx3tkxk", title: "Watch My Chops | Panic On Board", year: "2003"},
  {id: "9Tux6O3QRsE", title: "Watch My Chops | Moon Stroke", year: "2003"},
  //Kids Choice Awards
  //{id: "PjBCryIYNMk", title: "Kids' Choice Awards", year: "2000"},
  //{id: "yVHzalaqFqs", title: "Kids' Choice Awards", year: "2004"},
  {id: "_xU2I-eO-HM", title: "Kids' Choice Awards", year: "2002"},
  //Nickelodeon Guts
  {id: "M-rG2LPVZLc", title: "Nickelodeon Guts | Chad Joy Wayne", year: "1995"},
  {id: "RJoEVC8FUhw", title: "Nickelodeon Guts | Michael Jason Brandy", year: "1994"},
  {id: "4dvfs6GcDM4", title: "Nickelodeon Guts | Nick Tiff Brandon", year: "1994"},
  //The Amanda Show
  {id: "ZWF-VXM6Tlo", title: "The Amanda Show | S01 E11", year: "2000"},
  {id: "HW9w84ZWAJo", title: "The Amanda Show | S02 E03", year: "2000"},
  //SpongeBob SquarePants
  {id: "ZlGcM0cZzAY", title: "SpongeBob SquarePants | I'm With Stupid", year: "2001"},
  {id: "s8dIyIey4JE", title: "SpongeBob SquarePants | Band Geeks", year: "2001"},
  {id: "XUhrGCWLbaw", title: "SpongeBob SquarePants | The Camping Episode", year: "2002"},
  {id: "X_CaTFocvjA", title: "SpongeBob SquarePants | Sandy, SpongeBob, and the Worm", year: "2001"},
  {id: "KTy8iBPgETU", title: "SpongeBob SquarePants | Prehibernation Week", year: "2001"},
  {id: "aXtcLyva9RI", title: "SpongeBob SquarePants | Help Wanted", year: "1999"},
  {id: "l5mUYC_vXDA", title: "SpongeBob SquarePants | Fools in April", year: "2000"},
  {id: "O5U0UeSZPks", title: "SpongeBob SquarePants | SB-129", year: "1999"},
  {id: "ynkj620d1ac", title: "SpongeBob SquarePants | Pickles", year: "1999"},
  {id: "_X-NZEoqrjo", title: "SpongeBob SquarePants | Ripped Pants", year: "1999"},
  //Mr. Meaty
  {id: "kp3iPwca7Xk", title: "Mr. Meaty | Crispy Hand", year: "2005"},
  {id: "FxL6YNvIz5o", title: "Mr. Meaty | Chicken Country", year: "2005"},
  {id: "BfG0ZQVozb0", title: "Mr. Meaty | Puberty Fairy", year: "2009"},
  {id: "4_JRBZdDGhE", title: "Mr. Meaty | Flinga Flonga", year: "2009"},
  {id: "-1OIMAYPoCI", title: "Mr. Meaty | Dream of the Dead", year: "2009"},
  {id: "BngZ7lqc6ek", title: "Mr. Meaty | A Nightmare on Josh Street", year: "2008"},
  //KaBlam!
  {id: "hA78Wi6yBNk", title: "KaBlam! | KaBlam! Gets Results", year: "1996"},
  {id: "B_8BObK6Ieg", title: "KaBlam! | Harold's Glow-in-the-Dark Brand Butter", year: "1997"},
  {id: "2WwlRGajQfs", title: "KaBlam! | Won't Crack or Peel", year: "1997"},
  {id: "2Lm9cELRc3g", title: "KaBlam! | Cartoon Cramming Since 1627", year: "1997"},
  {id: "pcr1xojsA-c", title: "KaBlam! | Your Real Best Friend", year: "1996"},
  //Hey Arnold!
  {id: "HNaEdUeh6DU", title: "Hey Arnold! | A Day in the Life of a Class Room", year: "2003"},
  {id: "Mv3RwrAwQWc", title: "Hey Arnold! | April Fool's Day", year: "2002"},
  {id: "nD87lyl06UQ", title: "Hey Arnold! | Magic Show; 24 Hours to Live", year: "1996"},
  {id: "UEzLzm6e3v4", title: "Hey Arnold! | Arnold's Valentine", year: "1997"},
  //Drake and Josh
  {id: "1r2dJ-2WraA", title: "Drake & Josh | Pool Shark", year: "2004"},
  {id: "fOZirNsqnWs", title: "Drake & Josh | Pilot", year: "2004"},
  {id: "2UZer9Dhmb8", title: "Drake & Josh | Dune Buggy", year: "2004"},
  {id: "OWSOJMs32Jo", title: "Drake & Josh | Believe Me, Brother", year: "2004"},
  {id: "XYOhuxXOJ4k", title: "Drake & Josh | Smart Girl", year: "2004"},
  //Rocket Power
  {id: "WyHYuhq88hY", title: "Rocket Power | New Squid on the Block", year: "1999"},
  //Crash box
  {id: "KI7qp0IrF4I", title: "Crashbox | Episode 10", year: "1999"},
  {id: "sGmxWTQMHYE", title: "Crashbox | Episode 12", year: "1999"},
  {id: "P-HZMvp2MYQ", title: "Crashbox | Episode 46", year: "1999"},
  {id: "PmqIcsp_g6Y", title: "Crashbox | Episode 41", year: "1999"},
  //Jimmy Neutron
  {id: "j-7MjDGnNDU", title: "Jimmy Neutron | The Tomorrow Boys", year: "2005"},
  {id: "ozznyq3hWV0", title: "Jimmy Neutron | Jimmy Goes to College", year: "2005"},
  {id: "6rBqacwnMoc", title: "Jimmy Neutron | Stranded", year: "2005"},
  {id: "r9LxqwnlPBo", title: "Jimmy Neutron | Who's Your Mommy", year: "2005"},
  {id: "XjtKBjw37YY", title: "Jimmy Neutron | Lights! Camera! Danger!", year: "2005"},
  {id: "x7_KuPTs4FM", title: "Jimmy Neutron | Fundemonium", year: "2005"},
  //Rugrats
  {id: "y-LilGg-Als", title: "Rugrats | Tommy's First Birthday", year: "1991"},
  {id: "aH9hLKrWGug", title: "Rugrats | Runaway Reptar", year: "1999"},
  {id: "Kq0ZbaJs_l0", title: "Rugrats | Runaway Reptar", year: "1997"},
  //Catscratch
  {id: "tSck-fJmrcY", title: "Catscratch | Duck and Cover", year: "2007"},
  {id: "3NcJuQk1Lnc", title: "Catscratch | Spindango Fundulation", year: "2007"},
  {id: "5lyJiXaWJWw", title: "Catscratch | Core-uption", year: "2006"},
  //Ed, Edd N Eddy
  {id: "nwF7KEfVv1c", title: "Ed Edd n Eddy | The Edtouchables", year: "2000"},
  //Wild Thornberrys
  {id: "nb_e8O7asog", title: "The Wild Thornberrys | Eliza Unpluggeed", year: "2006"},
  {id: "nb_e8O7asog", title: "The Wild Thornberrys | Eliza Unpluggeed", year: "2006"},
  //Marvelous Misadventures of Flapjack
  {id: "nBLvKuVKLiI", title: "The Marvelous Misadventures of Flapjack | Low Tidings", year: "2009"},
  {id: "Nlmxt4NVRkQ", title: "The Marvelous Misadventures of Flapjack | Down with the Ship", year: "2009"},
  {id: "j0TZlX5itRc", title: "The Marvelous Misadventures of Flapjack | Rye Ruv Roo", year: "2009"},
  {id: "V1SQmR60hnU", title: "The Marvelous Misadventures of Flapjack | Flagship", year: "2007"},
  {id: "uyGMRdbhQW0", title: "The Marvelous Misadventures of Flapjack | Fishmonger", year: "2007"},
  {id: "wjf9V_j1ad8", title: "The Marvelous Misadventures of Flapjack | Sea Sick", year: "2007"},
  {id: "qIEHk6920Hs", title: "The Marvelous Misadventures of Flapjack | Starry Night", year: "2007"},
  //Grim & Evil
  {id: "KSssfTZYWSk", title: "The Grim Adventures of Billy & Mandy | Billy & Mandy's Jacked Up Halloween", year: "2003"},
  {id: "bON6mKS4mwY", title: "The Grim Adventures of Billy & Mandy | Senior Power!", year: "2007"},
  {id: "25ZEClhhzIc", title: "The Grim Adventures of Billy & Mandy | Death of the Party", year: "2007"},
  {id: "KYY91S6QvFs", title: "Billy's Birthday Shorties | Macaronie Man", year: "2006"},
  {id: "AF6frCEJtlc", title: "Billy's Birthday Shorties | The Uninvited", year: "2006"},
  {id: "OyyhSmQMCYw", title: "Billy's Birthday Shorties | Cake It to the Limit", year: "2006"},
  {id: "DcqsMCbXpIQ", title: "Billy's Birthday Shorties | Makeover the Top", year: "2006"},
  //Foster's
  {id: "Yz5jwPIyB1I", title: "Foster's Home for Imaginary Friends | Neighborhood Wash", year: "2006"},
  {id: "yXaZgaxw_dk", title: "Foster's Home for Imaginary Friends | Fistfull of Cereal", year: "2006"},
  {id: "oDhbKINF_Y4", title: "Foster's Home for Imaginary Friends | Hide and Bloo Seek", year: "2007"},
  //As the Bell Rings
  {id: "XJTCIW8QVv4", title: "As the Bell Rings | Bad Boys", year: "2007"},
  {id: "0s85rxssCCo", title: "As the Bell Rings | Flower Day", year: "2007"},
  {id: "c3Myt0is1lE", title: "As the Bell Rings | The Talent Show", year: "2007"},
  {id: "PTILPa7cCQQ", title: "As the Bell Rings | The Dance", year: "2007"},
  {id: "czLEUyWc9ok", title: "As the Bell Rings | To Go Or Not To Go", year: "2007"},
]
