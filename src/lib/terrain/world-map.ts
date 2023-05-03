import type { Terrain } from ".";
import { grass, sand, water } from "./builders";

export function buildWorld(): Terrain[][] {
    return [[water(), water(), water(), water(), water(), water(), water()]
           ,[water(), sand(), sand(), sand(), sand(), sand(), water()]
           ,[water(), sand(), grass(), grass(), grass(), sand(), water()]
           ,[water(), sand(), grass(), grass(), grass(), sand(), water()]
           ,[water(), sand(), grass(), grass(), grass(), sand(), water()]
           ,[water(), sand(), sand(), sand(), sand(), sand(), water()]
           ,[water(), water(), water(), water(), water(), water(), water()]];
}
