import type { Entity } from ".";

let _id = 0;

export const player = (x: number, y: number): Entity => ({
    id: ++_id, sprite: "characters/sword-lady.png", coord: { x, y }
})