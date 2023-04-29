export interface Grass {
    type: "grass"
}
export interface Coast {
    type: "coast"
}
export interface Water {
    type: "water"
}

export type Terrain = Grass | Coast | Water

export const grass = (): Grass => ({
    type: "grass"
})
export const coast = (): Coast => ({
    type: "coast"
})
export const water = (): Water => ({
    type: "water"
})
