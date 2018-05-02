const debug = require('debug')('youtubePlaylistMarkdown');
const fs = require('fs');
const table = require('markdown-table');
const PlaylistSummary = require('youtube-playlist-summary');
const R = require('ramda');
const config = require('config');
const ps = new PlaylistSummary(config);

const getFieldNames = function(config) {
  let fieldNames = ['TODO', 'title', 'Published At'];
  if (config.TODO) return fieldNames;
  return R.slice(1, fieldNames.length, fieldNames);
};

const getRow = function (config, item) {
  let videoTitle = `[${item.title}](${item.videoUrl})`;
  let publishedAt = item.publishedAt.substr(0, 10);
  let row = ['[ ]', videoTitle, publishedAt];
  if (config.TODO) return row;
  return R.slice(1, row.length, row);
};

const generatorPlaylistItemTable = async function (file, playlist) {
  debug('=== generatorPlaylistItemTable ===');
  let tableContent = [];
  playlist.items.forEach(function (item, index) {
    if (index == 0) {
      tableContent.push(getFieldNames(config));
    }
    tableContent.push(getRow(config, item));
  });
  file.write(`\n\n#### [${playlist.playlistTitle}](${playlist.playlistUrl}) created by [${playlist.channelTitle}](${playlist.channelUrl})\n\n`);
  file.write(`* video count: ${playlist.items.length} \n\n`);
  file.write(table(tableContent));
  debug(table(tableContent));
};

class PlaylistMarkdown {

  constructor(config) {
    this.config = config;
    this.CHANNEL_ID = config.CHANNEL_ID;
    this.PLAYLIST_ID = config.PLAYLIST_ID;
    debug(config);
  }

  async generatorPlaylist() {
    debug('=== generatorPlaylist ===');
    try {
      let playlist = await ps.getPlaylistItems(this.PLAYLIST_ID);
      let file = fs.createWriteStream(this.config.MARKDOWN_FILE_NAME || `playlist-${this.PLAYLIST_ID}.md`);
      generatorPlaylistItemTable(file, playlist);
      file.end();
    } catch (error) {
      throw error;
    }
  }

  async generatorAll() {
    try {
      debug('=== generatorAll ===');
      let result = await ps.getSummary(this.CHANNEL_ID);
      let file = fs.createWriteStream(this.config.MARKDOWN_FILE_NAME || `channel-${this.CHANNEL_ID}.md`);
      file.write(`### [${result.channelTitle}](${result.channelUrl})`);
      result.items.forEach(function (playlist) {
        generatorPlaylistItemTable(file, playlist);
      });
      file.end();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PlaylistMarkdown;