const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
const { fetch } = require('./Query.node.js');

async function getAllImages() {
  const results = await fetch(
    `
  {
    photos {
      nodes {
        rowId
        filepath
      }
    }
  }
  `,
    {}
  );
  if (results.status !== 200 && !results.data.hasOwnProperty('data')) {
    console.log('Error!');
    return null;
  }
  return results.data.data.photos.nodes;
}

async function updateImageMagick(id, filepath, data) {
  try {
    const results = await fetch(
      `
      mutation {
        updatePhoto(input: {
          patch: {
            identifyCommand: "${getImageMagickCommand(filepath).join(' ')}",
            identifyVerbose: "${JSON.stringify(data).replace(/"/g, '\\"')}"
          },
          rowId: ${id}
        }) {
          clientMutationId
          photo {
            identifyVerbose
          }
        }
      }
    `.trim()
    );
    return results.data;
  } catch (e) {
    debugger;
    console.log('error');
  }
}

function getImageMagickCommand(filepath) {
  return ['convert', `public/photos/${filepath}`, 'json:-'];
}

async function getImageMagickJSON(filepath) {
  const [magick, ...args] = getImageMagickCommand(filepath);
  const { stdout } = await execFile(magick, args);
  return JSON.parse(stdout)[0].image;
}

async function commitImageMagick(id, filepath) {
  const data = await getImageMagickJSON(filepath);
  return updateImageMagick(id, filepath, data);
}

(async () => {
  const images = await getAllImages();
  const results = await Promise.all(
    images.map(({ rowId, filepath }) => commitImageMagick(rowId, filepath))
  );
  console.log(results);
})();
