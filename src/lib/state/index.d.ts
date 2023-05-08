import type { Terrain } from '$lib/terrain';
import type { Entity } from '$lib/entities';

export type Coord = { x: number, y: number }

export type GameModel = {
    world: Terrain[][]
    player: Entity
    active: { x: number, y: number }
};
export type GameModelSubscription = (model: GameModel) => void;


export type HoverEvent = {
    type: 'hover'
    target: Coord
}
export type ClickEvent = {
    type: 'click'
    target: Coord
}

export type GameEvent = HoverEvent | ClickEvent;