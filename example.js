const YoutubePlaylistMarkdown = require('./index');
const config = require('config');

let ypm = new YoutubePlaylistMarkdown(config);

ypm.generatorPlaylist();
ypm.generatorAll();