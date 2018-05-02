const debug = require('debug')('youtubePlaylistMarkdown');
const fs = require('fs');
const table = require('markdown-table');
const PlaylistSummary = require('youtube-playlist-summary');
const config = require('config');
const ps = new PlaylistSummary(config);

const getFieldNames = function() {
  return ['title', 'Published At'];
};

const getRow = function (config, item) {
  let videoTitle = `[${item.title}](${item.videoUrl})`;
  let publishedAt = item.publishedAt.substr(0, 10);
  return [videoTitle, publishedAt];
};

const generatorPlaylistItemTable = async function (file, playlist) {
  debug('=== generatorPlaylistItemTable ===');
  let tableContent = [];
  playlist.items.forEach(function (item, index) {
    if (index == 0) {
      tableContent.push(getFieldNames());
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
    debug(config);
  }

  async generatorPlaylist(playlistId) {
    debug('=== generatorPlaylist ===');
    try {
      let playlist = await ps.getPlaylistItems(playlistId);
      let file = fs.createWriteStream(this.config.MARKDOWN_FILE_NAME || `playlist-${playlistId}.md`);
      generatorPlaylistItemTable(file, playlist);
      file.end();
    } catch (error) {
      throw error;
    }
  }

  async generatorAll(channelId) {
    try {
      debug('=== generatorAll ===');
      let result = await ps.getSummary(channelId);
      let file = fs.createWriteStream(this.config.MARKDOWN_FILE_NAME || `channel-${channelId}.md`);
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