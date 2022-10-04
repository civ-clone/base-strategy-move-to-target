import {
  PathFinderRegistry,
  instance as pathFinderRegistryInstance,
} from '@civ-clone/core-world-path/PathFinderRegistry';
import {
  StrategyNoteRegistry,
  instance as strategyNoteRegistryInstance,
} from '@civ-clone/core-strategy/StrategyNoteRegistry';
import Strategy from '@civ-clone/core-strategy/Strategy';
import ContinueOnPath from './Routines/ContinueOnPath';

export class MoveToTarget extends Strategy {
  constructor(
    pathFinderRegistry: PathFinderRegistry = pathFinderRegistryInstance,
    strategyNoteRegistry: StrategyNoteRegistry = strategyNoteRegistryInstance
  ) {
    super(new ContinueOnPath(pathFinderRegistry, strategyNoteRegistry));
  }
}

export default MoveToTarget;
