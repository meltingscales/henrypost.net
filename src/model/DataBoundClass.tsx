/**
 * I will probably regret this later, but for now, who cares :3c
 */
export class DataBoundClass<T> {

    public data: T

    constructor(data: T) {
        this.data = data;
    }
}