angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
// var message = "Steven Vincent "Steve" Buscemi (/buːˈsɛmi/ boo-sem-ee[1] born December 13, 1957) is an American actor, director, writer, and retired firefighter. Buscemi has starred and supported in successful Hollywood and indie films, including Parting Glances, New York Stories, Mystery Train, Reservoir Dogs, Desperado, Con Air, Armageddon, The Grey Zone, Ghost World, Big Fish, and The Sopranos. He is also known for his appearances in many films by the Coen brothers: Miller's Crossing, Barton Fink, The Hudsucker Proxy, Fargo, and The Big Lebowski. Buscemi provides the voice of Randall Boggs in the Monsters, Inc. franchise.From 2010 to 2014, he portrayed Enoch 'Nucky' Thompson in the critically acclaimed series Boardwalk Empire, which earned him two Screen Actors Guild Awards, a Golden Globe, and two nominations for an Emmy Award. He made his directorial debut in 1996, with Trees Lounge, in which he also starred. Other works include Animal Factory (2000), Lonesome Jim (2005) and Interview (2007). He has also directed numerous episodes of TV shows, including Homicide: Life on the Street, The Sopranos, Oz, 30 Rock, and Nurse Jackie. He currently hosts the Emmy Award-nominated AOL On comedy talk-show Park Bench. Steven Vincent Steve Buscemi (/buːˈsɛmi/ boo-sem-ee[1] born December 13, 1957) is an American actor, director, writer, and retired firefighter. Buscemi has starred and supported in successful Hollywood and indie films, including Parting Glances, New York Stories, Mystery Train, Reservoir Dogs, Desperado, Con Air, Armageddon, The Grey Zone, Ghost World, Big Fish, and The Sopranos. He is also known for his appearances in many films by the Coen brothers: Miller's Crossing, Barton Fink, The Hudsucker Proxy, Fargo, and The Big Lebowski. Buscemi provides the voice of Randall Boggs in the Monsters, Inc. franchise.From 2010 to 2014, he portrayed Enoch Nucky Thompson in the critically acclaimed series Boardwalk Empire, which earned him two Screen Actors Guild Awards, a Golden Globe, and two nominations for an Emmy Award. He made his directorial debut in 1996, with Trees Lounge, in which he also starred. Other works include Animal Factory (2000), Lonesome Jim (2005) and Interview (2007). He has also directed numerous episodes of TV shows, including Homicide: Life on the Street, The Sopranos, Oz, 30 Rock, and Nurse Jackie. He currently hosts the Emmy Award-nominated AOL On comedy talk-show Park Bench.Steven Vincent Steve Buscemi (/buːˈsɛmi/ boo-sem-ee[1] born December 13, 1957) is an American actor, director, writer, and retired firefighter. Buscemi has starred and supported in successful Hollywood and indie films, including Parting Glances, New York Stories, Mystery Train, Reservoir Dogs, Desperado, Con Air, Armageddon, The Grey Zone, Ghost World, Big Fish, and The Sopranos. He is also known for his appearances in many films by the Coen brothers: Miller's Crossing, Barton Fink, The Hudsucker Proxy, Fargo, and The Big Lebowski. Buscemi provides the voice of Randall Boggs in the Monsters, Inc. franchise.From 2010 to 2014, he portrayed Enoch Nucky Thompson in the critically acclaimed series Boardwalk Empire, which earned him two Screen Actors Guild Awards, a Golden Globe, and two nominations for an Emmy Award. He made his directorial debut in 1996, with Trees Lounge, in which he also starred. Other works include Animal Factory (2000), Lonesome Jim (2005) and Interview (2007). He has also directed numerous episodes of TV shows, including Homicide: Life on the Street, The Sopranos, Oz, 30 Rock, and Nurse Jackie. He currently hosts the Emmy Award-nominated AOL On comedy talk-show Park Bench.";
  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
