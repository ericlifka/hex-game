export interface Grass {
    type: "grass"
}

export interface Sand {
    type: "sand"
}

export interface Water {
    type: "water"
}

export type Terrain = Grass | Sand | Water;
