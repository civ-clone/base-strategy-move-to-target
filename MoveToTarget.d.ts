import { PathFinderRegistry } from '@civ-clone/core-world-path/PathFinderRegistry';
import { StrategyNoteRegistry } from '@civ-clone/core-strategy/StrategyNoteRegistry';
import Strategy from '@civ-clone/core-strategy/Strategy';
export declare class MoveToTarget extends Strategy {
  constructor(
    pathFinderRegistry?: PathFinderRegistry,
    strategyNoteRegistry?: StrategyNoteRegistry
  );
}
export default MoveToTarget;
