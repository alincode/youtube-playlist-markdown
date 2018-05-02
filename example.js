const YoutubePlaylistMarkdown = require('./index');

let config = {
  GOOOGLE_API_KEY: process.env.GOOOGLE_API_KEY
};

let ypm = new YoutubePlaylistMarkdown(config);

const playlistId = 'PLrG78JjvL7hWqX2FW54Ck8UP45fbWQXcu';
ypm.generatorPlaylist(playlistId);

const channelId = 'UCJi9ZAuo99MqMuJUXiJjpsA';
ypm.generatorAll(channelId);