import {
  PathFinderRegistry,
  instance as pathFinderRegistryInstance,
} from '@civ-clone/core-world-path/PathFinderRegistry';
import {
  StrategyNoteRegistry,
  instance as strategyNoteRegistryInstance,
} from '@civ-clone/core-strategy/StrategyNoteRegistry';
import ActiveUnit from '@civ-clone/base-player-action-active-unit/ActiveUnit';
import Path from '@civ-clone/core-world-path/Path';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import Priority from '@civ-clone/core-rule/Priority';
import Routine from '@civ-clone/core-strategy/Routine';
import { generateKey } from '@civ-clone/base-unit-action-goto/GoTo';
import moveAlongPath from '@civ-clone/base-unit-action-goto/lib/moveAlongPath';
import Player from '@civ-clone/core-player/Player';

export class ContinueOnPath extends Routine {
  #pathFinderRegistry: PathFinderRegistry;
  #strategyNoteRegistry: StrategyNoteRegistry;

  constructor(
    pathFinderRegistry: PathFinderRegistry = pathFinderRegistryInstance,
    strategyNoteRegistry: StrategyNoteRegistry = strategyNoteRegistryInstance
  ) {
    super();

    this.#pathFinderRegistry = pathFinderRegistry;
    this.#strategyNoteRegistry = strategyNoteRegistry;
  }
  attempt(action: PlayerAction): boolean {
    if (!(action instanceof ActiveUnit)) {
      return false;
    }

    const unit = action.value(),
      existingTargetNote = this.#strategyNoteRegistry.getByKey<Path>(
        generateKey(unit)
      );

    if (!existingTargetNote) {
      return false;
    }

    const path = existingTargetNote.value();

    moveAlongPath(unit, path);

    return true;
  }

  // Fixed really high priority to handle this scenario before anything else
  priority(player: Player): Priority {
    return new Priority(0);
  }
}

export default ContinueOnPath;
