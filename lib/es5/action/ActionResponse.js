export class ActionResponse {
    constructor(type) {
        this._type = type;
    }
    getType() {
        return this._type;
    }
}
