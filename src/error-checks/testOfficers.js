// This test checks to see whether all the officers in the JSON file have the necessary parameters
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

export function checkOfficers(officerArray) {

    for (let i = 1; i < officerArray.length; i++) {
        if (!officerArray[i].name) {
            throw new ValidationError("Missing officer name in JSON for officer #" + i.toString())
        }
        if (!officerArray[i].position) {
            throw new ValidationError("Missing officer position in JSON for officer #" + i.toString())
        }
        if (!officerArray[i].image) {
            throw new ValidationError("Missing officer image file name in JSON for officer #" + i.toString())
        }
        if (!officerArray[i].description) {
            throw new ValidationError("Missing officer description in JSON for officer #" + i.toString())
        }
    }

    
}