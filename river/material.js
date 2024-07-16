const river = {
  image: [
    { file: "river/image/taskImg/cover.webp", name: "cover" },
    { file: "river/image/taskImg/unknown.webp", name: "unknown" },
    { file: "river/image/clueobj/brick.webp", name: "brick" },
    { file: "river/image/evtbg/bgblack.webp", name: "bgblack" },
  ],
  armark: [],
  armodel: [],
  music: [
    { file: "river/music/rivergod01.MP3", name: "rivergod01" },
  ],
  video: [],
};

window.setRiver = () => {
  return river;
};
