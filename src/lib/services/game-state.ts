import type { Terrain } from '$lib/terrain';
import { buildWorld } from '$lib/terrain/world-map';
import { writable } from 'svelte/store';

export type GameModel = {
    world: Terrain[][]
};
export type GameModelSubscription = (model: GameModel) => void;
export type GameEvent = void;


const store = writable<GameModel>({
    world: buildWorld()
});

export function subscribe(fn: GameModelSubscription): void {
    store.subscribe(fn);
}

export function dispatch(event: GameEvent): void {

}
