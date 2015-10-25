var io = null
  , leader = null
  , online = 0;

main();

function main() {

  io = require('socket.io')(8902);
  log('Server is running at port 8902 ...');

  io.on('connection', function(client) {

    onConnect(client);

    client.on('disconnect', onDisconnect.bind(null, client));
    client.on('syncRequest', syncRequest.bind(null, client));
    client.on('setBlock', setBlock.bind(null, client));
    client.on('removeBlock', removeBlock.bind(null, client));

  });

}

function onConnect(client) {

  log('User connected:', client.id);

  online++;

  if (online === 1) {

    leader = client.id;

    log('New game starts.');

    client.emit('syncResponse', null);

    return;

  }

  requestSyncToLeader(client, function(data) {

    client.emit('syncResponse', data);

  });


}

function onDisconnect(client) {

  log('User disconnected:', client.id);

  online--;

  if (online === 0) {

    log('Noone is there.');

    return;

  }

  if (leader === client.id) {

    leader = io.sockets.connected[Object.keys(io.sockets.connected)[0]].id;

    log('The leader was changed since old leader has left:', leader);

  }

}

function syncRequest(client) {

  log('Sync-request by:', client.id);

  requestSyncToLeader(client, function(data) {

    client.emit('syncResponse', data);

  });

}

function setBlock(client, data) {

  log('Set-block by:', client.id);

  io.sockets.emit('setBlock', data);

}

function removeBlock(client, data) {

  log('remove-block by:', client.id);

  io.sockets.emit('removeBlock', data);

}

function requestSyncToLeader(client, callback) {

  var leaderClient = io.sockets.connected[leader];

  leaderClient.emit('syncRequest', client.id);

  leaderClient.one('syncResponse-' + client.id, callback);

}

function log() {

  var prefix = '[WebSocket]'
    , args = arguments;

  Array.prototype.unshift.call(args, (prefix));

  console.log.apply(console, args)

}
