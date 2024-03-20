import level from "@/app/[troop]/[troopName]/components/Level";

export class TroopFormatter {
    // Returns an array start at 1, iterating to the highest level. Eg. 1,2... 12
    static getLevelArray(levels) {
        let maxLevel = 0;
        let levelArr = [];

        // find the highest level
        for (let i = 0; i < levels.length; i++) {
            if (levels[i] > maxLevel) {
                maxLevel = levels[i];
            }
        }
        for (let i = 1; i <= maxLevel; i++) {
            levelArr.push(i);
        }
        return levelArr;
    }
}