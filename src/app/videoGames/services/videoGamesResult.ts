import {IVideoGame} from '../../interfaces/videoGame/videoGame.interface';

export const videoGames: Array<IVideoGame> = [
  {
    id: '1',
    title: 'The Legend of Zelda: Breath of the Wild',
    platform: 'Nintendo Switch',
    description: 'description',
    youtubeUrl: 'https://www.youtube.com/embed/zw47_q9wbBE',
    imageUrl: 'http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/2017/01/27/zelda-breath-wild.jpg'
  },
  {
    id: '2',
    title: 'Super Mario Odyssey',
    platform: 'Nintendo Switch',
    description: 'description',
    youtubeUrl: 'https://www.youtube.com/embed/5kcdRBHM7kM',
    imageUrl: 'http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperMarioOdyssey.jpg'
  },
  {
    id: '3',
    title: 'Pillars of Eternity 2: Deadfire',
    platform: 'PC',
    description: 'description',
    youtubeUrl: 'https://www.youtube.com/embed/ln_plWALAoI',
    imageUrl: 'https://www.pcgamesn.com/sites/default/files/pillars%20of%20eternity%202%20campaign.png'
  },
  {
    id: '4',
    title: 'Fire Emblem Echoes: Shadows of Valentia',
    platform: 'Nintendo 3DS',
    description: 'description',
    youtubeUrl: 'https://www.youtube.com/embed/LOnvfYnp2ww',
    imageUrl: 'https://serenesforest.net/wp-content/uploads/2017/01/echoes-boxart.png'
  }
];
