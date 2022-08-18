import {Card, Container} from "react-bootstrap";
import {SomeCrappyUtilitiesClass} from "../service/ServiceCrappyUtilities";

type TJobWorked = {
    title: string
    companyName?: string
    startDate: Date
    endDate?: Date
    description?: string
    responsibilities?: string[]
    location?: string
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
    institutionLocation?: string
    startDate: Date
    endDate?: Date
    degreeName: string
    description?: string
    extraDescription?: string
}

type TCertification = {
    institutionName: string
    startDate: Date
    endDate?: Date
    certificationName: string
    description?: string
    extraDescription?: string
}

type TResume = {
    name: string
    jobsWorked: TJobWorked[]
    projects: TProject[]
    skills: TSkill[]
    education: TEducation[]
    certifications: TCertification[]
}

const LeftRightText = (props: { left: any, right: any }) => {
    return <>
        <table width={'100%'}>
            <tr>
                <td>
                    {props.left}
                </td>
                <td style={{textAlign: 'right'}}>
                    {props.right}
                </td>
            </tr>
        </table>
    </>
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
            education: [
                {
                    institutionName: 'Illinois Institute of Technology',
                    institutionLocation: 'Chicago',
                    degreeName: `Bachelor's in Information Technology Management`,
                    startDate: new Date('September 2015'),
                    endDate: new Date('December 2019'),
                    description: "Dean's list: Spring 2016, Fall 2018, Fall 2019"
                },
                {
                    institutionName: 'New York University',
                    institutionLocation: 'New York',
                    degreeName: `Master's in Cybersecurity`,
                    startDate: new Date('October 2021'),
                },
            ],
            jobsWorked: [
                {
                    title: "Tutor",
                    location: "Chicago",
                    companyName: "Illinois Institute of Chicago",
                    startDate: new Date('February 2017'),
                    endDate: new Date('September 2017'),
                    responsibilities: [
                        'Explaining basic programming concepts such as OOP, lists, control flow, compilation vs interpretation, etc.',
                        'Teaching data structures such as linked lists, binary trees, heaps, skip lists, etc.',
                        'Responsible for managing multiple tutees at once, often switching rapidly between different languages and subjects.',
                        'Drawing diagrams, creating pieces of example code to illustrate a point, aiding in test prep by quizzing students.'
                    ],
                },
            ],
            projects: [],
            skills: MSkill.parseStringToTSKillList(`
Kubernetes (1y), Helm (1y), Groovy (2y), Programming (10y), Linux (4y), IT Administration (3y), Software Design (5y), 
Technical Documentation (4y), Computer Repair (5y), Circuitry (2y)
            `,
            ),
        };
    }


    renderResume() {
        return <>
            <Container>
                <h1 style={{textAlign: "center"}}>{this.data.name}</h1>
            </Container>
            {this.renderContactMe()}
            {this.renderEducation()}
            {this.renderProjects()}
            {this.renderSkills()}
            {this.renderJobs()}
            {this.renderExtracurricular()}
            {this.renderPersonalTraits()}
            {this.renderWhyChooseMe()}
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

    private renderContactMe() {
        return <Card>
            <Card.Text style={{textAlign: 'center'}}>
                <a href={'http://henrypost.net'}>henrypost.net</a> ◈ <a
                href={'https://github.com/HenryFBP'}>github.com/HenryFBP</a> <br/>
                Chicago, IL || Martha's Vineyard, MA<br/>
                resplendent • falconeer ﹫ gmail • com
            </Card.Text>
        </Card>
    }

    private renderEducation() {

        var eduElts = [];

        for (const i in this.data.education) {
            const eduData: TEducation = this.data.education[i];


            let sdate = eduData.startDate
            let edate = eduData.endDate
            let dateRangeStr = SomeCrappyUtilitiesClass.yearMonthFmt(sdate)


            if (!edate) {
                dateRangeStr += ' - In Progress'
            } else {
                dateRangeStr += ' - ' +SomeCrappyUtilitiesClass.yearMonthFmt(edate)
            }

            eduElts.push(
                <Card>
                    <Card.Header>


                        <LeftRightText
                            left={
                                <b>{eduData.institutionName}, {eduData.institutionLocation}</b>
                            }
                            right={<i>{dateRangeStr}</i>}/>
                        <p>{eduData.degreeName}</p>
                    </Card.Header>

                    {
                        eduData.description ?
                            <Card.Body>
                                <p><i>{eduData.description}</i></p>
                            </Card.Body>
                            :
                            null
                    }
                    {/*<Card.Footer>*/}
                    {/*    wowie :3c*/}
                    {/*</Card.Footer>*/}


                </Card>
            )

        }

        return <>
            <Container>
                {eduElts}
            </Container>
        </>
    }

    private renderProjects() {

    }

    private renderExtracurricular() {

    }

    private renderPersonalTraits() {

    }

    private renderWhyChooseMe() {

    }
}
