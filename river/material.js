const river = {
  image: [
    // 用戶照片
    { file: "river/image/design/clientphoto.webp", name: "clientphoto" },

    // 角色
    { file: "river/image/role/dragon.webp", name: "dragon" },
    { file: "river/image/role/fish.webp", name: "fish" },
    { file: "river/image/role/kirin.webp", name: "kirin" },
    { file: "river/image/role/peony.webp", name: "peony" },
    { file: "river/image/role/tree.webp", name: "tree" },

    // 背景
    { file: "river/image/evtbg/bgblack.webp", name: "bgblack" },

    // 任務
    { file: "river/image/taskImg/cover.webp", name: "cover" },
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

    // 標記
    { file: "river/image/arimg/chaojiang.webp", name: "chaojiang" },
    { file: "river/image/arimg/ciyoupalace.webp", name: "ciyoupalace" },
    { file: "river/image/arimg/ford.webp", name: "ford" },
    { file: "river/image/arimg/guangfu.webp", name: "guangfu" },
    { file: "river/image/arimg/wenchang.webp", name: "wenchang" },
  ],

  armark: [
    { file: "river/armark/chaojiang.mind", name: "chaojiang" },
    { file: "river/armark/ciyoupalace.mind", name: "ciyoupalace" },
    { file: "river/armark/ford.mind", name: "ford" },
    { file: "river/armark/guangfu.mind", name: "guangfu" },
    { file: "river/armark/wenchang.mind", name: "wenchang" },
    { file: "river/armark/temple.mind", name: "temple" },
  ],
  armodel: [],
  music: [{ file: "river/music/rivergod01.MP3", name: "rivergod01" }],
  video: [],
};

window.setRiver = () => {
  return river;
};
