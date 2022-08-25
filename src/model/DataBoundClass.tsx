/**
 * I will probably regret this later, but for now, who cares :3c
 */
import {Component} from "react";

export class DataBoundClass<T> {

    public data: T

    constructor(data: T) {
        this.data = data;
    }
}

//TODO this seems extremely cursed, ask David Kotaev what the correct thing to do here it.
//      Am I doing ReactJS state management totally wrong? Or just frankensteining my way through it?

// export class DataBoundComponent<T1, T2> extends Component<T2> {
//     public data: T1
//
//     constructor(props: T2, data: T1) {
//         super(this.props);
//         this.data = data;
//     }
//
// }