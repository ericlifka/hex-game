import type { Sand, Grass, Water } from "."

export const grass = (x: number, y: number): Grass => ({
    type: "grass", coord: { x, y }, children: []
})

export const sand = (x: number, y: number): Sand => ({
    type: "sand", coord: { x, y }, children: []
})

export const water = (x: number, y: number): Water => ({
    type: "water", coord: { x, y }, children: []
})