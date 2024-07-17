const river = {
  image: [
    { file: "river/image/taskImg/cover.webp", name: "cover" },
    { file: "river/image/taskImg/unknown.webp", name: "unknown" },
    { file: "river/image/clueobj/brick.webp", name: "brick" },
    { file: "river/image/evtbg/bgblack.webp", name: "bgblack" },
    { file: "river/image/arimg/flower.webp", name: "flower" },
    { file: "river/image/arimg/tree.webp", name: "tree" },
  ],
  armark: [
    { file: "river/armark/flower.mind", name: "flower" },
    { file: "river/armark/tree.mind", name: "tree" },
  ],
  armodel: [],
  music: [
    { file: "river/music/rivergod01.MP3", name: "rivergod01" },
  ],
  video: [],
};

window.setRiver = () => {
  return river;
};
