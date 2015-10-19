import loading from './scenes/scene-loading.js';
import game    from './scenes/scene-game.js';
import result  from './scenes/scene-result.js';

class Main {

  constructor() {

    //loading.enter();
    game.enter();

    // TODO: デバッグ用のシーン切り替え
    debug(function() {

      window.scene = {
        loading: function() { game.leave(loading.enter.bind(loading)); result.leave(loading.enter.bind(loading)) },
        game: function() { loading.leave(game.enter.bind(game)); result.leave(game.enter.bind(game)); },
        result: function() { loading.leave(result.enter.bind(result)); game.leave(result.enter.bind(result)); }
      };

    });

    (function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();stats.domElement.style.cssText='position:fixed;left:0;top:0;z-index:10000';document.body.appendChild(stats.domElement);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()

  }

}

new Main();
