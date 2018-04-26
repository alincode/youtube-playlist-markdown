const debug = require('debug')('youtubePlaylistMarkdown');
const fs = require('fs')
const table = require('markdown-table')
const PlaylistSummary = require('youtube-playlist-summary');
const R = require('ramda');
const config = require('config');
const ps = new PlaylistSummary(config);

const getFieldNames = function(config) {
  let fieldNames = ['TODO', 'title', 'Published At'];
  if (config.TODO) return fieldNames;
  return R.slice(1, fieldNames.length, fieldNames);
}

const getRow = function (config, item) {
  let videoTitle = `[${item.title}](${item.videoUrl})`;
  let publishedAt = item.publishedAt.substr(0, 10);
  let row = ['[ ]', videoTitle, publishedAt]
  if (config.TODO) return row;
  return R.slice(1, row.length, row);
}

const generator = async function (config) {
  debug('=== generator ===');
  try {
    let result = await ps.getSummary(config.CHANNEL_ID);
    let file = fs.createWriteStream(config.MARKDOWN_FILE_NAME || `${config.CHANNEL_ID}.md`);
    file.write(`### [${result.title}](${result.channelUrl}) \n\n`);

    result.items.forEach(function (playlist, index) {
      let tableContent = [];
      playlist.items.forEach(function (item, index2) {
        if (index2 == 0) {
          tableContent.push(getFieldNames(config));
        }
        tableContent.push(getRow(config, item));
      });
      file.write(`#### ${playlist.title} \n\n`);
      file.write(`* [playlist link](${playlist.playlistUrl}) \n`);
      file.write(`* video count: ${playlist.items.length} \n\n`);
      file.write(table(tableContent));
      debug(table(tableContent));
    });
    file.end();
  } catch (error) {
    throw error;
  }
};

module.exports = generator;
