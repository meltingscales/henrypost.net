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
    category?: string
    name: string
    timeStudied: string
}

class MSkill {
    data: TSkill

    constructor(data: TSkill) {
        this.data = data;
    }

    static parseStringToMSKillList(s: string): MSkill[] {
        var split: string[] = s.split(',')
        split.forEach(it => it.trim())

        const skills: MSkill[] = []

        for (const someRawSkill in split) {
            skills.push(MSkill.parseStringToMSKill(someRawSkill))
        }

        return skills
    }

    public static parseStringToMSKill(someRawSkill: string): MSkill {
        const someSplitRawSkill: string[] = someRawSkill.split('(')
        const skillName = someSplitRawSkill[0]
            .replace('(', '')
            .replace(')', '')

        const timeStr = someSplitRawSkill[1]
            .replace('(', '')
            .replace(')', '')

        const theSkill: TSkill = {
            name: skillName,
            timeStudied: timeStr,
            // category: undefined
        };

        return new MSkill(theSkill);
    }

    static parseStringToTSKillList(thing: string): TSkill[] {
        var mskilllist = this.parseStringToMSKillList(thing)

        var tskillList = []

        mskilllist.forEach(it => tskillList.push(it.data))

        return tskillList
    }
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
            skills: MSkill.parseStringToTSKillList('Kubernetes (1y), Helm (1y), Groovy (2y), Programming (10y), Linux (4y), IT Administration (3y)Software Design (5y), Technical Documentation (4y), Computer Repair (5y), Circuitry (2y)'),
        };
    }

    renderResume() {
        return <>
            <Container>
                <p>this iz a resume for {this.data.name} :3c</p>
            </Container>
            <Container id={'skills'}>
                {this.renderSkills()}
            </Container>
        </>;
    }

    private renderSkills() {
        var daList = []

        for (const i in this.data.skills) {
            const daSkill = this.data.skills[i]
            daList.push(<>
                    {daSkill.name}
                </>
            )
        }


        return undefined;
    }
}
