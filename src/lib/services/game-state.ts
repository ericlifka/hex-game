import type { Entity } from '$lib/entities';
import { player } from '$lib/entities/builders';
import type { Terrain } from '$lib/terrain';
import { buildWorld } from '$lib/terrain/world-map';
import { writable } from 'svelte/store';

export type GameModel = {
    world: Terrain[][]
    player: Entity
};
export type GameModelSubscription = (model: GameModel) => void;
export type GameEvent = void;

let initialState: GameModel = {
    world: buildWorld(),
    player: player(2, 2)
};
initialState.world[2][2].children.push(initialState.player);

const store = writable<GameModel>(initialState);

export function subscribe(fn: GameModelSubscription): void {
    store.subscribe(fn);
}

export function dispatch(event: GameEvent): void {

}
