
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: "Red Sister", description: "At the Convent of Sweet Mercy young girls are raised to be killers. In a few the old bloods show, gifting talents rarely seen since the tribes beached their ships on Abeth. Sweet Mercy hones its novices’ skills to deadly effect: it takes ten years to educate a Red Sister in the ways of blade and fist.",author: 'Mark Lawrence', image: 'https://images.gr-assets.com/books/1481038440l/25895524.jpg', genre: 'Fantasy'},
        {title: "Throne of Glass", description: "After serving out a year of hard labor in the salt mines of Endovier for her crimes, 18-year-old assassin Celaena Sardothien is dragged before the Crown Prince. Prince Dorian offers her her freedom on one condition: she must act as his champion in a competition to find a new royal assassin.",author: 'Sara J Mass', image: 'https://images.gr-assets.com/books/1495278054l/7896527.jpg', genre: 'Fantasy'},
        {title: "Defy the Stars", description: "Noemi Vidal is seventeen years old and sworn to protect her planet, Genesis. She’s willing to risk anything—including her own life. To their enemies on Earth, she’s a rebel.",author: 'Claudia Gray', image: 'https://images.gr-assets.com/books/1484967166l/31423196.jpg', genre: 'Fantasy'},
        {title: "Borne", description: "In a ruined, nameless city of the future, a woman named Rachel, who makes her living as a scavenger, finds a creature she names “Borne” entangled in the fur of Mord, a gigantic, despotic bear. Mord once prowled the corridors of the biotech organization known as the Company, which lies at the outskirts of the city, until he was experimented on, grew large, learned to fly and broke free. Driven insane by his torture at the Company, Mord terrorizes the city even as he provides sustenance for scavengers like Rachel." ,author: 'Jeff VanderMerr', image: 'https://images.gr-assets.com/books/1480788387l/28225843.jpg', genre: 'Fantasy'}
      ]);
    });
};
