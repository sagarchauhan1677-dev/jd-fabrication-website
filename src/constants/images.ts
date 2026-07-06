// Local uploaded project images — served from /public
const BASE = '/images';

export const IMAGES = {
  // Core categories (URL-encoded paths for spaces)
  industrialSheds: `${BASE}/Industrial%20Sheds/WhatsApp_Image_2026-07-05_at_12.58.59_PM.jpeg`,
  pebBuildings: `${BASE}/PEB%20Buildings/WhatsApp_Image_2026-07-05_at_12.58.58_PM.jpeg`,
  warehouse: `${BASE}/Warehouse/WhatsApp_Image_2026-07-05_at_12.58.57_PM.jpeg`,
  steelFabrication: `${BASE}/Steel%20Fabrication/WhatsApp_Image_2026-07-05_at_12.58.56_PM_(2).jpeg`,
  roofing: `${BASE}/Roofing/WhatsApp_Image_2026-07-05_at_12.58.56_PM_(1).jpeg`,
} as const;
