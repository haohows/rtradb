const baseSet = {
  image: [
    { file: "basesetting/image/avatar.webp", name: "品牌LOGO" },
    { file: "basesetting/image/tiger.webp", name: "tiger" },
    { file: "basesetting/image/whale.webp", name: "whale" },
  ],
  armark: [
    { file: "basesetting/armark/aropt.mind", name: "aropt" },
    { file: "basesetting/armark/whale.mind", name: "whale" },
  ],
  armodel: [],
  music: [],
  video: [],
};

window.setBaseSet = () => {
  return baseSet;
};
