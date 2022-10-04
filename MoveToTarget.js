"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveToTarget = void 0;
const PathFinderRegistry_1 = require("@civ-clone/core-world-path/PathFinderRegistry");
const StrategyNoteRegistry_1 = require("@civ-clone/core-strategy/StrategyNoteRegistry");
const Strategy_1 = require("@civ-clone/core-strategy/Strategy");
const ContinueOnPath_1 = require("./Routines/ContinueOnPath");
class MoveToTarget extends Strategy_1.default {
    constructor(pathFinderRegistry = PathFinderRegistry_1.instance, strategyNoteRegistry = StrategyNoteRegistry_1.instance) {
        super(new ContinueOnPath_1.default(pathFinderRegistry, strategyNoteRegistry));
    }
}
exports.MoveToTarget = MoveToTarget;
exports.default = MoveToTarget;
//# sourceMappingURL=MoveToTarget.js.map