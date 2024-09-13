const river = {
  image: [
    // 用戶照片
    { file: "river/image/design/clientphoto.webp", name: "clientphoto" },

    // 角色
    { file: "river/image/role/rivergod.webp", name: "rivergod" },
    { file: "river/image/role/dragon.webp", name: "dragon" },
    { file: "river/image/role/fish.webp", name: "fish" },
    { file: "river/image/role/kirin.webp", name: "kirin" },
    { file: "river/image/role/peony.webp", name: "peony" },
    { file: "river/image/role/tree.webp", name: "tree" },

    // 背景
    { file: "river/image/evtbg/entrance.webp", name: "entrance" },
    { file: "river/image/evtbg/bgblack.webp", name: "bgblack" },

    // 任務
    { file: "river/image/taskImg/cover.webp", name: "cover" },
    { file: "river/image/taskImg/preamble1.webp", name: "preamble1" },
    { file: "river/image/taskImg/preamble2.webp", name: "preamble2" },
    { file: "river/image/taskImg/unknown.webp", name: "unknown" },
    { file: "river/image/taskImg/floortiles.webp", name: "floortiles" },
    { file: "river/image/taskImg/steamtrain.webp", name: "steamtrain" },

    // 線索
    { file: "river/image/clueobj/floortiles.webp", name: "floortiles" },
    { file: "river/image/clueobj/chaojiangpoetry.webp", name: "chaojiangpoetry" },
    { file: "river/image/clueobj/ciyoupoetry.webp", name: "ciyoupoetry" },
    { file: "river/image/clueobj/fordpoetry.webp", name: "fordpoetry" },
    { file: "river/image/clueobj/guangfupoetry.webp", name: "guangfupoetry" },
    { file: "river/image/clueobj/treepoetry.webp", name: "treepoetry" },
    { file: "river/image/clueobj/wenchangpoetry.webp", name: "wenchangpoetry" },

    // 事件項目
    { file: "river/image/evtItem/earth.webp", name: "earth" },
    { file: "river/image/evtItem/fire.webp", name: "fire" },
    { file: "river/image/evtItem/gold.webp", name: "gold" },
    { file: "river/image/evtItem/grass.webp", name: "grass" },
    { file: "river/image/evtItem/water.webp", name: "water" },
    { file: "river/image/evtItem/wood.webp", name: "wood" },


    // 標記
    { file: "river/image/arimg/chaojiang.webp", name: "chaojiang" },
    { file: "river/image/arimg/ciyoupalace.webp", name: "ciyoupalace" },
    { file: "river/image/arimg/ford.webp", name: "ford" },
    { file: "river/image/arimg/guangfu.webp", name: "guangfu" },
    { file: "river/image/arimg/wenchang.webp", name: "wenchang" },
    { file: "river/image/arimg/bigtree.webp", name: "bigtree" },
  ],

  armark: [
    { file: "river/armark/chaojiang.mind", name: "chaojiang" },
    { file: "river/armark/ciyoupalace.mind", name: "ciyoupalace" },
    { file: "river/armark/ford.mind", name: "ford" },
    { file: "river/armark/guangfu.mind", name: "guangfu" },
    { file: "river/armark/wenchang.mind", name: "wenchang" },
    { file: "river/armark/temple.mind", name: "temple" },
    { file: "river/armark/bigtree.mind", name: "bigtree" },
  ],
  armodel: [],
  music: [
    { file: "river/music/0-河神打招呼.mp3", name: "0-河神打招呼" },
    { file: "river/music/1-廣福宮.mp3", name: "1-廣福宮" },
    { file: "river/music/2-新莊福德宮.mp3", name: "2-新莊福德宮" },
    { file: "river/music/3-大樹公.mp3", name: "3-大樹公" },
    { file: "river/music/4-慈祐宮.mp3", name: "4-慈祐宮" },
    { file: "river/music/5-潮江寺.mp3", name: "5-潮江寺" },
    { file: "river/music/6-文昌祠.mp3", name: "6-文昌祠" },
    { file: "river/music/7-列車廣播-劉銘傳鐵路.mp3", name: "7-列車廣播-劉銘傳鐵路" },
    { file: "river/music/8-列車廣播-即將到站.mp3", name: "8-列車廣播-即將到站" },
  ],
  video: [],
};

window.setRiver = () => {
  return river;
};
