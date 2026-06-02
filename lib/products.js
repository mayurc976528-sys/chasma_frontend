// Product catalogue. `category` keys map to the Collection page filter tabs.
// Photos are real Specsmakers product shots served over their Shopify CDN.
// Every product uses a DISTINCT image — no duplicates. Each entry was
// HTTP-verified (200) and visually confirmed to show eyewear on white.

export const categories = [
  { key: "all", label: "All" },
  { key: "spectacles", label: "Spectacles" },
  { key: "sunglasses", label: "Sunglasses" },
  { key: "computer", label: "Computer Glasses" },
];

// Drop-in overrides for your own product photos. Add an image to
// public/products/ (e.g. public/products/ce-100.jpg) and map it here to
// replace the CDN photo, e.g. "ce-100": "/products/ce-100.jpg".
const customImages = {};

// [name, category, image url]
const defs = [
  ["Specsmakers Half-Rim Oval Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/TitaniumShootCataSet6_004.jpg?v=1780296813"],
  ["Core Full-Rim Rectangle Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/TitaniumShootCataSet3_010.jpg?v=1780132479"],
  ["Core Full-Rim Round Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/TitaniumShootCata_028.jpg?v=1780058491"],
  ["Core Full-Rim Geometric Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/TitaniumShootCata_010.jpg?v=1780059058"],
  ["Core Full-Rim Pilot Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/TitaniumShootCataSet2_011.jpg?v=1780122876"],
  ["Core Full-Rim Square Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/TitaniumShootCataSet4_028.jpg?v=1780138452"],
  ["Aero Rimless Rectangle Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/TitaniumShootCataSet5_028.jpg?v=1780291326"],
  ["Aero Blue Zero Rimless Cateye Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_7191.jpg?v=1779966050"],
  ["Aero Blue Zero Rimless Cateye Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/053A0397.jpg?v=1779965628"],
  ["Core Blue Zero Full-Rim Rectangle Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_7016.jpg?v=1779952222"],
  ["Core Blue Zero Full-Rim Geometric Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_7020.jpg?v=1779947849"],
  ["Happster Titanium Full-Rim Geometric Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_7022.jpg?v=1779965005"],
  ["Happster Titanium Half-Rim Rectangle Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_7026.jpg?v=1779964781"],
  ["Happster Titanium Rimless Rectangle Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_7186.jpg?v=1779964374"],
  ["Happster Titanium Rimless Oval Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/053A0391.jpg?v=1779955164"],
  ["Core Blue Zero Half-Rim Square Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/CH7_4839_d4533778-4ca0-4e14-9ed2-804a0d643e96.jpg?v=1773140233"],
  ["Core Half-Rim Square Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/CH7_4839.jpg?v=1773140218"],
  ["Blue Zero Oval Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/fmhbrsbr49smo3044-1.jpg?v=1629811317"],
  ["Dura Geometric Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/fmhbrsbr49smo3044-1_83ecc59c-59b9-4d2c-92f7-bab45f5df29a.jpg?v=1700386561"],
  ["Streak Polarized Full-Rim Pilot Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_8542_7379b6b9-f734-4f29-9814-32b6155c0d39.jpg?v=1778846851"],
  ["Happster Ace Blue Zero Full-Rim Rectangle Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1497.jpg?v=1778914048"],
  ["Aero Blue Zero Rimless Geometric Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1854_20e942fc-588a-41aa-a088-87677bbaeb2a.jpg?v=1778850957"],
  ["Core Blue Zero Full-Rim Round Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1490.jpg?v=1778842228"],
  ["Core Blue Zero Full-Rim Oval Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1705_721d1865-56ad-49c1-ac3b-49a6a2016a83.jpg?v=1778933651"],
  ["Core Blue Zero Full-Rim Square Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1502_d600dab9-a138-4a25-b28b-7b22d049a7f3.jpg?v=1778840614"],
  ["Happster Ace Full-Rim Rectangle Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1497_b5cfb611-6803-426f-adad-3a78124cef6c.jpg?v=1778914069"],
  ["Aero Rimless Geometric Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1854.jpg?v=1778850945"],
  ["Aero Rimless Cateye Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1851_bd497cbd-d823-445f-a3e7-21795d4a4f32.jpg?v=1778849539"],
  ["Core Full-Rim Oval Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1705.jpg?v=1778933648"],
  ["Aero Blue Zero Rimless Rectangle Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_8816.jpg?v=1778054301"],
  ["Happster Active Full-Rim Square Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/SMX918_2897.jpg?v=1777532339"],
  ["Core Half-Rim Rectangle Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_8709_1bd01b4f-be2a-45dd-a1b7-371d97e74c0c.jpg?v=1777963930"],
  ["Specsmakers Full-Rim Geometric Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/SM2284_2698_967df394-a7d5-425b-bd10-27dbd83de143.jpg?v=1777450295"],
  ["Specsmakers Full-Rim Cateye Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/SM2283_2706.jpg?v=1777877711"],
  ["Happster Active Blue Zero Full-Rim Square Computer Glasses", "computer", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/SMX918_2897_abae8b8b-8dcc-4513-8dfd-c949f42686b7.jpg?v=1777532549"],
  ["Streak Drip Polarized Full-Rim Rectangle Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_9356.jpg?v=1775629173"],
  ["Streak Drip Polarized Full-Rim Square Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_9345.jpg?v=1775628656"],
  ["Happster Flip-up Full-Rim Square Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1543.jpg?v=1773917252"],
  ["Happster Flip-up Full-Rim Rectangle Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_1535.jpg?v=1773917035"],
  ["Happster Titanium Rimless Geometric Eyeglasses", "spectacles", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_9944.jpg?v=1776342357"],
  ["Streak Polarized Full-Rim Rectangle Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/CH7_1601.jpg?v=1773135218"],
  ["Streak Polarized Full-Rim Square Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/1_877eae54-d9ae-4bb8-b099-bb7392764868.jpg?v=1711457851"],
  ["Happster Polarized Astralis Aquarius Full-Rim Square Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/3_452dc31d-c5ce-4c86-9d42-870526060860.jpg?v=1757330519"],
  ["Happster Full-Rim Geometric Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/1_748d2785-48f8-4b91-afd3-f6f2199fdf8d.jpg?v=1718198577"],
  ["Happster Full-Rim Square Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/1_e40e7a57-7224-494f-8939-d2ae0ff70389.jpg?v=1691562643"],
  ["Happster Full-Rim Round Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/1_bbc3a376-c8a9-484c-a589-1e96b6307089.jpg?v=1691559309"],
  ["Happster Polarized Full-Rim Round Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/1_01dc037b-9931-442f-84aa-d488d9020b7b.jpg?v=1716922622"],
  ["Happster Polarized Astralis Pisces Full-Rim Cateye Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/DSC_8419_b23a11f9-e07b-4349-a0a9-bee52b299f0d.jpg?v=1761301764"],
  ["Happster Polarized Full-Rim Rectangle Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/3_13633da0-e0ce-484b-a16e-ab229d5cd773.jpg?v=1746536384"],
  ["Happster Polarized Full-Rim Square Sunglasses", "sunglasses", "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/1_10b3430c-f6e8-4de9-b3b5-cb4cdf35017b.jpg?v=1706523467"],
];

export const products = defs.map(([name, category, image], i) => {
  const id = `ce-${100 + i}`;
  return {
    id,
    name,
    category,
    image: customImages[id] || image,
  };
});

// A varied mix (spectacles + sunglasses + computer) for the homepage grid.
export const popularPicks = [1, 19, 9, 43, 2, 22].map((i) => products[i]);
