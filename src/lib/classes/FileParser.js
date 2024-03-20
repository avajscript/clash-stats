const troops = import("../../data/.json");
class FileParser {

    static shrinkTroops() {
        const newTroopArray = [];
        for (let troop of troops) {
            const troop = troops[i];
            const newTroop = {
                name: troop.name,
                url: troop.name.replace(" ", "_") + ".png"
            };
            newTroopArray.push(newTroop);
        }
        return newTroopArray;
    }
}

console.log(FileParser.shrinkTroops());