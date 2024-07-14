const mbook = {
  image: [
    // 角色
    { file: "mbook/image/player/normal.webp", name: "normal" },
    { file: "mbook/image/player/confuse.webp", name: "confuse" },
    { file: "mbook/image/player/surprise.webp", name: "surprise" },
    { file: "mbook/image/player/maincharacter.webp", name: "maincharacter" },
    { file: "mbook/image/elf/normal.webp", name: "normal" },
    { file: "mbook/image/elf/confuse.webp", name: "confuse" },

    // 背景
    { file: "mbook/image/evtbg/entrance.webp", name: "entrance" },
    { file: "mbook/image/evtbg/campus.webp", name: "campus" },
    { file: "mbook/image/evtbg/stonestarrysky.webp", name: "stonestarrysky" },
    { file: "mbook/image/evtbg/monument.webp", name: "monument" },
    { file: "mbook/image/evtbg/cemetery.webp", name: "cemetery" },
    { file: "mbook/image/evtbg/brickwall.webp", name: "brickwall" },
    { file: "mbook/image/evtbg/lightmonument.webp", name: "lightmonument" },
    { file: "mbook/image/evtbg/hall.webp", name: "hall" },
    { file: "mbook/image/evtbg/church.webp", name: "church" },

    // 任務圖
    { file: "mbook/image/evtimg/gamecover.webp", name: "gamecover" },
    { file: "mbook/image/evtimg/arrowdiagram.webp", name: "arrowdiagram" },
    { file: "mbook/image/evtimg/damaged.webp", name: "damaged" },
    { file: "mbook/image/evtimg/exam.webp", name: "exam" },
    { file: "mbook/image/evtimg/explorer.webp", name: "explorer" },
    { file: "mbook/image/evtimg/finger.webp", name: "finger" },
    { file: "mbook/image/evtimg/portal.webp", name: "portal" },
    { file: "mbook/image/evtimg/storm.webp", name: "storm" },
    { file: "mbook/image/evtimg/wing.webp", name: "wing" },
    { file: "mbook/image/evtimg/ao.webp", name: "ao" },
    { file: "mbook/image/evtimg/headmaster.webp", name: "headmaster" },
    { file: "mbook/image/evtimg/sah.webp", name: "sah" },
    { file: "mbook/image/evtimg/sclchurch.webp", name: "sclchurch" },
    { file: "mbook/image/evtimg/smst.webp", name: "smst" },
    { file: "mbook/image/evtimg/smsttwo.webp", name: "smsttwo" },
    { file: "mbook/image/evtimg/polytechnic.webp", name: "polytechnic" },
    { file: "mbook/image/evtimg/dormitory.webp", name: "dormitory" },

    // 事件項目圖
    {
      file: "mbook/image/evtitembg/starryskymural.webp",
      name: "starryskymural",
    },
    { file: "mbook/image/evtitembg/phoenix.webp", name: "phoenix" },
    { file: "mbook/image/evtitembg/stele.webp", name: "stele" },

    // 線索物件
    { file: "mbook/image/clueobj/arrow.webp", name: "arrow" },
    { file: "mbook/image/clueobj/coordinate.webp", name: "coordinate" },
    { file: "mbook/image/clueobj/decoding.webp", name: "decoding" },
    { file: "mbook/image/clueobj/flamewings.webp", name: "flamewings" },
    { file: "mbook/image/clueobj/position.webp", name: "position" },
    { file: "mbook/image/clueobj/textsymbols.webp", name: "textsymbols" },
    { file: "mbook/image/clueobj/guard.webp", name: "guard" },
    { file: "mbook/image/clueobj/nirvana.webp", name: "nirvana" },
    { file: "mbook/image/clueobj/revelation.webp", name: "revelation" },
    { file: "mbook/image/clueobj/shuttle.webp", name: "shuttle" },
    { file: "mbook/image/clueobj/ao.webp", name: "ao" },

    // AR顯示圖
    { file: "mbook/image/arimg/engrave.webp", name: "engrave" },
    { file: "mbook/image/arimg/totem.webp", name: "totem" },
    { file: "mbook/image/arimg/geometry.webp", name: "geometry" },
  ],
  armark: [
    { file: "mbook/armark/engrave.mind", name: "engrave" },
    { file: "mbook/armark/geometry.mind", name: "geometry" },
  ],
  armodel: [],
  music: [],
  video: [],
};

window.setMbook = () => {
  return mbook;
};
