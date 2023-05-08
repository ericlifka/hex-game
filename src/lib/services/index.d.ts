import type { Terrain } from '$lib/terrain';
import type { Entity } from '$lib/entities';


export type GameModel = {
    world: Terrain[][]
    player: Entity
    active: { x: number, y: number }
};
export type GameModelSubscription = (model: GameModel) => void;


export type ClickEvent = {
    type: 'click'
    target: { x: number, y: number }
}

export type GameEvent = ClickEvent;