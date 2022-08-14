import {Container} from "react-bootstrap";

type TJobWorked = {
    title: string
    startDate: Date
    endDate: Date | undefined
    description: string
    responsibilities: string[]
    location: string
}

type TSkill = {
    category: string | undefined
    name: string
    timeStudied: string
}

type TProject = {
    title: string
    date: Date
    description: string
}

type TEducation = {
    institutionName: string
    startDate: Date
    endDate: Date | undefined
    degreeName: string
    description: string
    extraDescription: string
}

//TODO build out cert type...
type TCertification = {
    institutionName: string
    startDate: Date
    endDate: Date | undefined
    certificationName: string
    description: string
    extraDescription: string
}

type TResume = {
    name: string
    jobsWorked: TJobWorked[]
    projects: TProject[]
    skills: TSkill[]
    education: TEducation[]
    certifications: TCertification[]
}

export class MResume {

    data: TResume

    constructor(data: TResume) {
        this.data = data
    }

    public static henryResumeData(): TResume {
        return {
            name: "Henry Post",
            certifications: [],
            education: [],
            jobsWorked: [],
            projects: [],
            skills: [],
        };
    }

    renderResume() {
        return <>
            <Container>
                <p>this iz a resume for {this.data.name} :3c</p>
            </Container>
        </>;
    }

}
