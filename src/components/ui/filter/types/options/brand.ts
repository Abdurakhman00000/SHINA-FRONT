import { Options } from "../types";
import arvio from "../../../../../../public/assets/brands/350428_arivo_1660897679.svg";
import marshal from "../../../../../../public/assets/brands/136_marshal_1648552937.svg";
import formula from "../../../../../../public/assets/brands/1959_formula_1695300099.svg";
import dynamo from "../../../../../../public/assets/brands/338506_dynamo_1684145306.svg";
import landspider from "../../../../../../public/assets/brands/438199_landspider_1693899431.jpg";
import lassa from "../../../../../../public/assets/brands/438241_lassa_1739878665.svg";
import kapsen from "../../../../../../public/assets/brands/339_kapsen_1653037066.svg";
import kumho from "../../../../../../public/assets/brands/49_kumho_1648550138.svg";
import falken from "../../../../../../public/assets/brands/1941_falken_1648552906.svg";
import aplus from "../../../../../../public/assets/brands/347900_aplus_1682497859.jpg";
import michelin from "../../../../../../public/assets/brands/57_michelin_1648553518.svg";
import leao from "../../../../../../public/assets/brands/408206_leao_1695298515.svg";
import bFGoodrich from "../../../../../../public/assets/brands/7_bfgoodrich_1648553534.svg";
import lingLong from "../../../../../../public/assets/brands/347057_linglong_1660036635.svg";
// import centara from "../../../../../../public/assets/brands/347057_linglong_1660036635.svg";
import joyroad from "../../../../../../public/assets/brands/329163_joyroad_1657720275.svg";
// import bkarum from "../../../../../../public/assets/brands/347057_linglong_1660036635.svg";
import gT_Radial from "../../../../../../public/assets/brands/32_gt_radial_1648553591.svg";
import Armstrong from "../../../../../../public/assets/brands/438221_armstrong_1714113062.svg";
import Kormoran from "../../../../../../public/assets/brands/148_kormoran_1648550090.svg";
import Ikon_Tyres from "../../../../../../public/assets/brands/ikon_tyres.svg";
import Headway from "../../../../../../public/assets/brands/113_headway_1653037209.svg";
import Nokian_Nordman from "../../../../../../public/assets/brands/1961_nokian_nordman_1648553382.svg";
// import Delmax from "../../../../../../public/assets/brands/32_gt_radial_1648553591.svg";
import Altenzo from "../../../../../../public/assets/brands/252_altenzo_1648550113.svg";
import Firestone from "../../../../../../public/assets/brands/315_firestone_1653037336.svg";
import Cachland from "../../../../../../public/assets/brands/345136_cachland_1660036612.svg";
import Avatyre from "../../../../../../public/assets/brands/308_avatyre_1660036604.svg";
import HiFly from "../../../../../../public/assets/brands/251_hifly_1695300823.svg";
// import Cooper from "../../../../../../public/assets/brands/";
import Belshina from "../../../../../../public/assets/brands/364481_belshina_1663575305.svg";
import Antares_tires from "../../../../../../public/assets/brands/438178_antares_tires_1724077866.svg";
import Contyre from "../../../../../../public/assets/brands/139_contyre_1652445950.svg";
import Laufenn from "../../../../../../public/assets/brands/162_laufenn_1648552980.svg";
import Goodride from "../../../../../../public/assets/brands/363605_goodride_1663575362.svg";
import Gislaved from "../../../../../../public/assets/brands/30_gislaved_1648553215.svg";
import Matador from "../../../../../../public/assets/brands/140_matador_1648553610.svg";
import Goodyear from "../../../../../../public/assets/brands/31_goodyear_1648553469.svg";
//
import Forward from "../../../../../../public/assets/brands/408207_forward_1671175977.svg";
// import Evergreen from "../../../../../../public/assets/brands/";
import Delinte from "../../../../../../public/assets/brands/33541_delinte_1695296327.svg";
import Atlander from "../../../../../../public/assets/brands/438231_atlander_1725257106.svg";
import Gripmax from "../../../../../../public/assets/brands/377946_gripmax_1724079191.svg";
import Compasal from "../../../../../../public/assets/brands/347926_compasal_1699603740.svg";
import Nokian_Tyres from "../../../../../../public/assets/brands/63_nokian_1648553329.svg";
import Pirelli from "../../../../../../public/assets/brands/66_pirelli_1665646102.svg";
// import Amtel from "../../../../../../public/assets/brands/";
import Aeolus from "../../../../../../public/assets/brands/295427_aosen_1650880230.svg";
// import KingStar from "../../../../../../public/assets/brands/k";
import Nordman from "../../../../../../public/assets/brands/438182_nordman_1684932330.svg";
import Triangle from "../../../../../../public/assets/brands/86_triangle_1695295003.svg";
// import Kleber from "../../../../../../public/assets/brands/";
import Hankook from "../../../../../../public/assets/brands/33_hankook_1648550491.svg";
// import Nankang from "../../../../../../public/assets/brands/nan";
// import Haida from "../../../../../../public/assets/brands/";
import Austone from "../../../../../../public/assets/brands/438223_austone_1724078166.svg";
import Cordiant from "../../../../../../public/assets/brands/112_cordiant_1695292604.svg";
import iLINK from "../../../../../../public/assets/brands/438197_ilink_1692340891.jpg";
import DoubleStar from "../../../../../../public/assets/brands/351266_doublestar_1660898531.svg";
import Yokohama from "../../../../../../public/assets/brands/91_yokohama_1741691909.svg";
import Bridgestone from "../../../../../../public/assets/brands/9_bridgestone_1660306079.svg";
import Nexen from "../../../../../../public/assets/brands/116_nexen_1695300472.svg";
import Mirage from "../../../../../../public/assets/brands/438200_mirage_1707392773.svg";
import Sailun from "../../../../../../public/assets/brands/129_sailun_1648553678.svg";
import General_Tire from "../../../../../../public/assets/brands/311_general_tire_1648552379.svg";
import Dunlop from "../../../../../../public/assets/brands/21_dunlop_1648552754.svg";
import Fortune from "../../../../../../public/assets/brands/438218_fortune_1724078515.svg";
import Firemax from "../../../../../../public/assets/brands/438185_firemax_1695296112.svg";
import Landsail from "../../../../../../public/assets/brands/314_landsail_1648552961.svg";
// import Jinyu from "../../../../../../public/assets/brands/";
// import Bearway from "../../../../../../public/assets/brands/";
import Boto from "../../../../../../public/assets/brands/438187_boto_1687166278.png";
// import Imperial from "../../../../../../public/assets/brands/";
import Maxxis from "../../../../../../public/assets/brands/54_maxxis_1648552887.svg";
import Continental from "../../../../../../public/assets/brands/15_continental_1648553011.svg";

export const brands: Options[] = [
  { id: 1, label: "Arivo", value: "Arivo", img: arvio },
  { id: 2, label: "Marshal", value: "Marshal", img: marshal },
  { id: 3, label: "Formula", value: "Formula", img: formula },
  { id: 4, label: "Dynamo", value: "Dynamo", img: dynamo },
  { id: 5, label: "Landspider", value: "Landspider", img: landspider },
  { id: 6, label: "Lassa", value: "Lassa", img: lassa },
  { id: 7, label: "Kapsen", value: "Kapsen", img: kapsen },
  { id: 8, label: "Kumho", value: "Kumho", img: kumho },
  { id: 9, label: "Falken", value: "Falken", img: falken },
  { id: 10, label: "Aplus", value: "Aplus", img: aplus },
  { id: 11, label: "Michelin", value: "Michelin", img: michelin },
  { id: 12, label: "Leao", value: "Leao", img: leao },
  { id: 13, label: "BFGoodrich", value: "BFGoodrich", img: bFGoodrich },
  { id: 14, label: "LingLong", value: "LingLong", img: lingLong },
  { id: 15, label: "Centara", value: "Centara" },
  { id: 16, label: "Joyroad", value: "Joyroad", img: joyroad },
  { id: 17, label: "Barum", value: "Barum" },
  { id: 18, label: "GT_Radial", value: "GT_Radial", img: gT_Radial },
  { id: 19, label: "Armstrong", value: "Armstrong", img: Armstrong },
  { id: 20, label: "Kormoran", value: "Kormoran", img: Kormoran },
  { id: 21, label: "Ikon_Tyres", value: "Ikon_Tyres", img: Ikon_Tyres },
  { id: 22, label: "Headway", value: "Headway", img: Headway },
  {
    id: 23,
    label: "Nokian_Nordman",
    value: "Nokian_Nordman",
    img: Nokian_Nordman,
  },
  { id: 24, label: "Delmax", value: "Delmax" },
  { id: 25, label: "Altenzo", value: "Altenzo", img: Altenzo },
  { id: 26, label: "Firestone", value: "Firestone", img: Firestone },
  { id: 27, label: "Cachland", value: "Cachland", img: Cachland },
  { id: 28, label: "Avatyre", value: "Avatyre", img: Avatyre },
  { id: 29, label: "HiFly", value: "HiFly", img: HiFly },
  { id: 30, label: "Cooper", value: "Cooper" },
  { id: 31, label: "Belshina", value: "Belshina", img: Belshina },
  {
    id: 32,
    label: "Antares_tires",
    value: "Antares_tires",
    img: Antares_tires,
  },
  { id: 33, label: "Contyre", value: "Contyre", img: Contyre },
  { id: 34, label: "Laufenn", value: "Laufenn", img: Laufenn },
  { id: 35, label: "Goodride", value: "Goodride", img: Goodride },
  { id: 36, label: "Gislaved", value: "Gislaved", img: Gislaved },
  { id: 37, label: "Matador", value: "Matador", img: Matador },
  { id: 38, label: "Goodyear", value: "Goodyear", img: Goodyear },
  //
  { id: 39, label: "Forward", value: "Forward", img: Forward },
  { id: 40, label: "Evergreen", value: "Evergreen" },
  { id: 41, label: "Delinte", value: "Delinte", img: Delinte },
  { id: 42, label: "Atlander", value: "Atlander", img: Atlander },
  { id: 43, label: "Gripmax", value: "Gripmax", img: Gripmax },
  { id: 44, label: "Compasal", value: "Compasal", img: Compasal },
  { id: 45, label: "Nokian_Tyres", value: "Nokian_Tyres", img: Nokian_Tyres },
  { id: 46, label: "Pirelli", value: "Pirelli", img: Pirelli },
  { id: 47, label: "Amtel", value: "Amtel" },
  { id: 48, label: "Aeolus", value: "Aeolus", img: Aeolus },
  { id: 49, label: "KingStar", value: "KingStar" },
  { id: 50, label: "Nordman", value: "Nordman", img: Nordman },
  { id: 51, label: "Triangle", value: "Triangle", img: Triangle },
  { id: 52, label: "Kleber", value: "Kleber" },
  { id: 53, label: "Hankook", value: "Hankook", img: Hankook },
  { id: 54, label: "Nankang", value: "Nankang" },
  { id: 55, label: "Haida", value: "Haida" },
  { id: 56, label: "Austone", value: "Austone", img: Austone },
  { id: 57, label: "Cordiant", value: "Cordiant", img: Cordiant },
  { id: 58, label: "iLINK", value: "iLINK", img: iLINK },
  { id: 59, label: "DoubleStar", value: "DoubleStar", img: DoubleStar },
  { id: 60, label: "Yokohama", value: "Yokohama", img: Yokohama },
  { id: 61, label: "Bridgestone", value: "Bridgestone", img: Bridgestone },
  { id: 62, label: "Nexen", value: "Nexen", img: Nexen },
  { id: 63, label: "Mirage", value: "Mirage", img: Mirage },
  { id: 64, label: "Sailun", value: "Sailun", img: Sailun },
  { id: 65, label: "General_Tire", value: "General_Tire", img: General_Tire },
  { id: 66, label: "Dunlop", value: "Dunlop", img: Dunlop },
  { id: 67, label: "Fortune", value: "Fortune", img: Fortune },
  { id: 68, label: "Firemax", value: "Firemax", img: Firemax },
  { id: 69, label: "Landsail", value: "Landsail", img: Landsail },
  { id: 70, label: "Jinyu", value: "Jinyu" },
  { id: 71, label: "Bearway", value: "Bearway" },
  { id: 72, label: "Boto", value: "Boto", img: Boto },
  { id: 73, label: "Imperial", value: "Imperial" },
  { id: 74, label: "Maxxis", value: "Maxxis", img: Maxxis },
  { id: 75, label: "Continental", value: "Continental", img: Continental },
];
