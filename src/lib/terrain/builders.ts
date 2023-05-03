import type { Sand, Grass, Water } from "."

export const grass = (): Grass => ({
    type: "grass"
})

export const sand = (): Sand => ({
    type: "sand"
})

export const water = (): Water => ({
    type: "water"
})
