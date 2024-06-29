const mbook = {
  image: [
    { file: "mbook/image/stu.webp", name: "stu" },
    { file: "mbook/image/elf.webp", name: "elf" },
    { file: "mbook/image/holyarea.webp", name: "holyarea" },
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
    { file: "mbook/image/arimg/engrave.webp", name: "engrave" },
    { file: "mbook/image/arimg/totem.webp", name: "totem" },
    { file: "mbook/image/arimg/geometry.webp", name: "geometry" },
  ],
  armark: [
    { file: "mbook/armark/engrave.mind", name: "engrave" },
    { file: "mbook/armark/totem.mind", name: "totem" },
  ],
};

window.setMbook = () => {
  return mbook;
};
