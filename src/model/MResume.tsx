import {Card, Container} from "react-bootstrap";
import {SomeCrappyUtilitiesClass} from "../service/ServiceCrappyUtilities";
import {ReactNode} from "react";

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
    description: string | ReactNode
}

type TEducation = {
    institutionName: string
    institutionLocation?: string
    startDate: Date
    endDate?: Date
    degreeName: string
    description?: string | ReactNode
    extraDescription?: string | ReactNode
}

type TCertification = {
    institutionName: string
    startDate: Date
    endDate?: Date
    certificationName: string
    description?: string | ReactNode
    extraDescription?: string | ReactNode
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
            projects: [
                {
                    title: 'Twitter Disaster Data Analysis',
                    description: <p>Co-author and co-maintainer of <a
                        href="https://pypi.org/project/twitter-fire-scraper/">a Python package</a> that allows
                        developers and data scientists to gather thousands of tweets from Twitter for sentiment and
                        regression analysis. <a
                            href="https://henryfbp.github.io/files/IPRO%20-%20Improving%20Incident%20Response%20of%20the%20American%20Red%20Cross%20in%20the%20Greater%20Chicago%20Area%20by%20Using%20Text%20Classification%20of%20Posts%20From%20Twitter.pdf">Our
                            research whitepaper is available at this link.</a></p>,
                    date: new Date('March 2019')
                },
                {
                    title: 'Replacement of library reference computers',
                    date: new Date('August 2018'),
                    description: `Designed a custom linux-based microcomputer (Raspberry Pi) solution for aging Windows PCs at the Oak Bluffs Public Library of Massachusetts that saved thousands of dollars of the cost of new Windows Desktop PCs and was much safer.`
                },
                {
                    title: 'ASCII compression algorithm',
                    date: new Date('June 2015'),
                    description: 'Over the summer, I enrolled in an Illinois Institute of Technology summer Wolfram Mathematica course where I coded an ASCII compression algorithm that took 256 of the most common 2-tuples of characters in an ASCII file and compressed them into a file containing a dictionary followed by compressed data.'
                }
            ],
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

            <h2>Education</h2>
            {this.renderEducation()}

            <h2>Projects</h2>
            {this.renderProjects()}

            <h2>Technical Strengths</h2>
            {this.renderSkills()}

            <h2>Work Experience</h2>
            {this.renderJobs()}

            <h2>Extra-curricular</h2>
            {this.renderExtracurricular()}

            <h2>Personal Traits</h2>
            {this.renderPersonalTraits()}

            <h2>Why should you choose me?</h2>
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
                Chicago, IL ◈ Martha's Vineyard, MA<br/>
                resplendent • falconeer ﹫ gmail • com
            </Card.Text>
        </Card>
    }

    private renderEducation() {

        var eduElts = [];

        //sort by startDate
        var educations = this.data.education.sort(
            (x, y) => {
                return (-1) * (x.startDate.getTime() - y.startDate.getTime())
            }
        )

        for (const i in educations) {
            const education: TEducation = educations[i];


            let sdate = education.startDate
            let edate = education.endDate
            let dateRangeStr = SomeCrappyUtilitiesClass.yearMonthFmt(sdate)


            if (!edate) {
                dateRangeStr += ' - In Progress'
            } else {
                dateRangeStr += ' - ' + SomeCrappyUtilitiesClass.yearMonthFmt(edate)
            }

            eduElts.push(
                <Card>
                    <Card.Header>
                        <LeftRightText
                            left={<b>{education.institutionName}, {education.institutionLocation}</b>}
                            right={<i>{dateRangeStr}</i>}/>
                        <p>{education.degreeName}</p>
                    </Card.Header>

                    {
                        education.description ?
                            <Card.Body>
                                <p><i>{education.description}</i></p>
                            </Card.Body>
                            :
                            null
                    }

                    {/*<Card.Footer>*/}
                    {/*    wowie :3c*/}
                    {/*</Card.Footer>*/}
                </Card>
            )

            eduElts.push(<br/>)
        }

        return <>
            <Container>
                {eduElts}
            </Container>
        </>
    }

    private renderProjects() {

        const someList = []

        //sort proj by date
        var projects = this.data.projects
        projects.sort((a, b) => {
            return -1 * (a.date.getTime() - b.date.getTime())
        })

        for (const idx in projects) {
            var project = projects[idx]

            someList.push(<>
                <Card>
                    <Card.Header>
                        <LeftRightText
                            left={
                                <h3>{project.title}</h3>
                            }
                            right={
                                SomeCrappyUtilitiesClass.yearMonthFmt(project.date)
                            }
                        />

                    </Card.Header>
                    <Card.Body>
                        <span>
                            {project.description}
                        </span>
                    </Card.Body>
                </Card>
            </>)

            someList.push(<br/>)
        }


        return <Container>
            {someList}
        </Container>

    }

    private renderExtracurricular() {

    }

    private renderPersonalTraits() {

    }

    private renderWhyChooseMe() {

    }
}
