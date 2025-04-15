const baseSet = {
  image: [
    { file: "basesetting/image/avatar.webp", name: "品牌LOGO" },
    { file: "basesetting/image/tiger.webp", name: "tiger" },
    { file: "basesetting/image/whale.webp", name: "whale" },
    { file: "basesetting/image/jprestaurant.webp", name: "jprestaurant" },
    { file: "basesetting/image/sushi.webp", name: "sushi" },
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
