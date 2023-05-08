import type { Entity } from '$lib/entities';

interface BaseTerrain {
    type: string
    children: Entity[]
    coord: { x: number, y: number }
}

export interface Grass extends BaseTerrain {
    type: "grass"
}

export interface Sand extends BaseTerrain {
    type: "sand"
}

export interface Water extends BaseTerrain {
    type: "water"
}

export type Terrain = Grass | Sand | Water;
