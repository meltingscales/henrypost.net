type TJobWorked = {
    title: string
}

type TResume = {
    name: string
    jobsWorked: TJobWorked[]
}

export class MResume {

    data: TResume

    constructor(data: TResume) {
        this.data = data
    }

}
