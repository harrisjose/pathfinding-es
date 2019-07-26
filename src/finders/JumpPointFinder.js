/**
 * @author aniero / https://github.com/aniero
 */
import DiagonalMovement from '../core/DiagonalMovement';

import JPFNeverMoveDiagonally from './JPFNeverMoveDiagonally';
import JPFAlwaysMoveDiagonally from './JPFAlwaysMoveDiagonally';
import JPFMoveDiagonallyIfNoObstacles from './JPFMoveDiagonallyIfNoObstacles';
import JPFMoveDiagonallyIfAtMostOneObstacle from './JPFMoveDiagonallyIfAtMostOneObstacle';

/**
 * Path finder using the Jump Point Search algorithm
 * @param {Object} opt
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {DiagonalMovement} opt.diagonalMovement Condition under which diagonal
 *      movement will be allowed.
 */
function JumpPointFinder(opt) {
    opt = opt || {};
    if (opt.diagonalMovement === DiagonalMovement.Never) {
        return new JPFNeverMoveDiagonally(opt);
    } else if (opt.diagonalMovement === DiagonalMovement.Always) {
        return new JPFAlwaysMoveDiagonally(opt);
    } else if (opt.diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
        return new JPFMoveDiagonallyIfNoObstacles(opt);
    } else {
        return new JPFMoveDiagonallyIfAtMostOneObstacle(opt);
    }
}

export default JumpPointFinder;
