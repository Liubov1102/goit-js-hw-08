import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle((data) => 
  localStorage.setItem(CURRENT_TIME, data.seconds), 1000)
);

const saveTime = localStorage.getItem(CURRENT_TIME);
  if (saveTime) {
  player.setCurrentTime(saveTime);
};
    
