import { ClientRegistry } from '@civ-clone/core-client/ClientRegistry';
import { PathFinderRegistry } from '@civ-clone/core-world-path/PathFinderRegistry';
import { StrategyNoteRegistry } from '@civ-clone/core-strategy/StrategyNoteRegistry';
import TurnStart from '@civ-clone/core-player/Rules/TurnStart';
export declare const getRules: (
  clientRegistry?: ClientRegistry,
  pathFinderRegistry?: PathFinderRegistry,
  strategyNoteRegistry?: StrategyNoteRegistry
) => TurnStart[];
export default getRules;
