import type { Terrain } from ".";
import { grass, sand, water } from "./builders";

export function buildWorld(): Terrain[][] {
    return [[water(0,0), water(1,0), water(2,0), water(3,0), water(4,0), water(5,0), water(6,0)]
           ,[water(0,1), sand(1,1), sand(2,1), sand(3,1), sand(4,1), sand(5,1), water(6,1)]
           ,[water(0,2), sand(1,2), grass(2,2), grass(3,2), grass(4,2), sand(5,2), water(6,2)]
           ,[water(0,3), sand(1,3), grass(2,3), grass(3,3), grass(4,3), sand(5,3), water(6,3)]
           ,[water(0,4), sand(1,4), grass(2,4), grass(3,4), grass(4,4), sand(5,4), water(6,4)]
           ,[water(0,5), sand(1,5), sand(2,5), sand(3,5), sand(4,5), sand(5,5), water(6,5)]
           ,[water(0,6), water(1,6), water(2,6), water(3,6), water(4,6), water(5,6), water(6,6)]];
}
