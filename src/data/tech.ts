// Logos for the tech belt. Brand marks come from Simple Icons (CC0, bundled at build time — no runtime requests).
// Brands not available there get a neutral line glyph instead of an imitation of their trademark.
import {
  siAndroid,
  siAndroidstudio,
  siAppwrite,
  siApple,
  siBluetooth,
  siClaudecode,
  siCodemagic,
  siDart,
  siDotnet,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siJavascript,
  siKotlin,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPython,
  siReact,
  siSwift,
  siVercel,
  siXcode,
  type SimpleIcon,
} from "simple-icons";

export type GlyphName = "cloud" | "database" | "search" | "link" | "pipeline" | "csharp";

export type Tech =
  | { name: string; kind: "brand"; path: string; hex: string }
  | { name: string; kind: "glyph"; glyph: GlyphName };

const brand = (icon: SimpleIcon, name = icon.title): Tech => ({
  name,
  kind: "brand",
  path: icon.path,
  hex: `#${icon.hex}`,
});
const glyph = (name: string, g: GlyphName): Tech => ({ name, kind: "glyph", glyph: g });

/** Two rows that drift in opposite directions. */
export const techBelt: [Tech[], Tech[]] = [
  [
    brand(siFlutter),
    brand(siDart),
    brand(siKotlin),
    brand(siSwift),
    brand(siAndroid),
    brand(siApple, "iOS"),
    brand(siOpenjdk, "Java"),
    brand(siDotnet, ".NET / MAUI"),
    glyph("C#", "csharp"),
    brand(siJavascript),
    brand(siReact),
    brand(siNextdotjs),
    brand(siPython),
    brand(siNodedotjs),
  ],
  [
    brand(siFirebase),
    glyph("Azure AD B2C", "cloud"),
    glyph("Typesense", "search"),
    glyph("SQL Server", "database"),
    glyph("Branch.io", "link"),
    brand(siAppwrite),
    brand(siCodemagic),
    glyph("Azure DevOps", "pipeline"),
    brand(siGit),
    brand(siGithub),
    brand(siClaudecode),
    brand(siBluetooth, "Bluetooth LE"),
    brand(siVercel),
    brand(siXcode),
    brand(siAndroidstudio),
  ],
];
