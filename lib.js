import { transform as transformBabel } from "@babel/standalone";
import solidPreset from "babel-preset-solid";

globalThis.transformSolid = (code, { solid = {}, babel = {} } = {}) =>
  transformBabel(code, {
    filename: "",
    ...babel,
    presets: [[solidPreset, solid], "typescript"],
  });
