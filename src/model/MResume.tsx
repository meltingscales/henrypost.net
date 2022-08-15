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

class MSkill {
    data: TSkill

    constructor(data: TSkill) {
        this.data = data;
    }

    static parseStringToMSKillList(rawData: string): MSkill[] {
        var split: string[] = rawData.split(',')
        split = split.map(it => it.trim())

        console.log(split)

        const skills: MSkill[] = []

        for (const i in split) {
            var someRawSkill = split[i]

            skills.push(MSkill.parseStringToMSKill(someRawSkill))
        }

        return skills
    }

    public static parseStringToMSKill(someRawSkill: string): MSkill {
        const someSplitRawSkill: string[] = someRawSkill.split('(')

        console.log(someSplitRawSkill)

        console.assert(someSplitRawSkill.length === 2)

        const skillName = someSplitRawSkill[0]
            .replace('(', '')
            .replace(')', '')
            .trim()

        const timeStr = someSplitRawSkill[1]
            .replace('(', '')
            .replace(')', '')
            .trim()

        const theSkill: TSkill = {
            name: skillName,
            timeStudied: timeStr,
            // category: undefined
        };

        return new MSkill(theSkill);
    }

    static parseStringToTSKillList(rawData: string): TSkill[] {
        var mskilllist = this.parseStringToMSKillList(rawData)

        var tskillList = []

        //just extract data property
        mskilllist.forEach(it => tskillList.push(it.data))

        return tskillList
    }
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
            skills: MSkill.parseStringToTSKillList(`
Kubernetes (1y), Helm (1y), Groovy (2y), Programming (10y), Linux (4y), IT Administration (3y), Software Design (5y), Technical Documentation (4y), Computer Repair (5y), Circuitry (2y)
            `),
        };
    }

    renderResume() {
        return <>
            <Container>
                <h1>{this.data.name}</h1>
            </Container>
            {this.renderJobs()}
            {this.renderSkills()}
        </>;
    }

    private renderSkills() {
        var skillsElts = []

        for (const i in this.data.skills) {
            const skill = this.data.skills[i]
            skillsElts.push(
                <li>
                    <p>{skill.name}&nbsp;
                        <i>({skill.timeStudied})</i>
                    </p>
                </li>
            )
        }


        return <Container id={'skills'}>
            <h2>Skills</h2>
            <ul>
                {skillsElts}
            </ul>
        </Container>
            ;
    }

    private renderJobs() {
        return <Container id={'jobs'}>
            <h2>Employment History</h2>
            TODO
        </Container>
    }
}
