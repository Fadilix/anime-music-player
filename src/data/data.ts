// Setting up the data for the application
import snk from "../sounds/snk_sasageyo.mp3";
import snkBg from "../assets/snk_sasageyo.jpg";
import blackC from "../sounds/black_clover_black_rover.mp3";
import kny from "../sounds/kny_op1.mp3";
import opm from "../sounds/opm.mp3";
import blackCbg from "../assets/bc.jpeg";
import knybg from "../assets/kny.jpg";
import opmbg from "../assets/opm.jpg";
import hxh from "../sounds/hxh_dep.mp3";
import hxhbg from "../assets/hxh.jpg";

export const soundtrack = [
  {
    name: "Shingeki no Kyojin 2 Opening - Shinzou wo Sasageyo!",
    src: snk,
    bg: snkBg,
  },
  {
    name: "One Punch Man Opening - THE HERO",
    src: opm,
    bg: opmbg,
  },

  {
    name: "Hunter x Hunter Opening - Departure",
    src: hxh,
    bg: hxhbg,
  },

  {
    name: "Kimetsu No Yaiba - Opening 1",
    src: kny,
    bg: knybg,
  },

  {
    name: "Black Clover Opening 3 - Black Rover",
    src: blackC,
    bg: blackCbg,
  },
];
