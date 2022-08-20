import {Card, Container} from "react-bootstrap";
import {SomeCrappyUtilitiesClass} from "../service/ServiceCrappyUtilities";
import {ReactNode} from "react";
import {DataBoundClass} from "./DataBoundClass";

type TJobWorked = {
    title: string
    employerName?: string
    startDate: Date
    endDate?: Date
    description?: string
    responsibilities: string[]
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

class MProject extends DataBoundClass<TProject> {

    public static renderTProject(p: TProject) {
        return <>
            <Card>
                <Card.Header>
                    <LeftRightText
                        left={
                            <h3>{p.title}</h3>
                        }
                        right={
                            SomeCrappyUtilitiesClass.yearMMMonthFmt(p.date)
                        }
                    />

                </Card.Header>
                <Card.Body>
                        <span>
                            {p.description}
                        </span>
                </Card.Body>
            </Card>
        </>
    }

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
    issuerName: string
    issueDate: Date
    expireDate?: Date
    certificationURL?: string
    certificationName: string
    certificateStandardFamily?: string
    description?: string | ReactNode
    extraDescription?: string | ReactNode
}

type TExtraCurricular = {}

type TResume = {
    name: string
    jobsWorked: TJobWorked[]
    projects: TProject[]
    skills: TSkill[]
    education: TEducation[]
    extraCurricular: TExtraCurricular[];
    certifications: TCertification[]
    whyChooseMe?: string | ReactNode
    personalTraits?: string[],
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


class MSkill extends DataBoundClass<TSkill> {

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

export class MResume extends DataBoundClass<TResume> {

    //TODO: move to a datafile format, not embedded in static class method
    public static henryResumeData(): TResume {
        return {
            name: "Henry Post",
            extraCurricular: [],
            //TODO get json from credly.com
            //      https://www.credly.com/users/henry-post/badges?sort=most_popular&page=1

            //TODO get json from credential.net
            //      https://api.accredible.com/v1/credential-net/users/henrypost/user_wallet
            certifications: [
                {
                    certificationName: 'Software Security Practitioner - Defending Java',
                    issuerName: 'Security Compass',
                    certificateStandardFamily: 'ISC2',
                    certificationURL: 'https://www.credly.com/badges/3f674d4f-ba60-4e3b-8412-94b8b54cf0d5/',
                    issueDate: new Date('February 04, 2022')
                },
                {
                    certificationName: 'Software Security Practitioner - General',
                    issuerName: 'Security Compass',
                    certificateStandardFamily: 'ISC2',
                    certificationURL: 'https://www.credly.com/badges/1c5f7bce-fbbf-4c4b-b37d-58b346d939e0/',
                    issueDate: new Date('February 03, 2022')
                },
                {
                    certificationName: 'Software Security Practitioner - Defending C++',
                    issuerName: 'Security Compass',
                    certificateStandardFamily: 'ISC2',
                    certificationURL: 'https://www.credly.com/badges/da609247-d0c8-41d5-8b3d-bf9bcb4e2be5/',
                    issueDate: new Date('February 09, 2022')
                },
                {
                    certificationName: 'Software Security Practitioner - Defending .NET',
                    issuerName: 'Security Compass',
                    certificateStandardFamily: 'ISC2',
                    certificationURL: 'https://www.credly.com/badges/113e46cc-d9da-4a05-9405-6268948aef48/',
                    issueDate: new Date('February 04, 2022')
                },
                {
                    certificationName: 'Software Security Practitioner - Defending Android',
                    issuerName: 'Security Compass',
                    certificateStandardFamily: 'ISC2',
                    certificationURL: 'https://www.credly.com/badges/f01208d7-b34c-4ab3-93bc-f77cc32aa65f/',
                    issueDate: new Date('February 09, 2022')
                },
            ],
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
                    employerName: "Illinois Institute of Chicago",
                    startDate: new Date('February 2017'),
                    endDate: new Date('September 2017'),
                    responsibilities: [
                        'Explaining basic programming concepts such as OOP, lists, control flow, compilation vs interpretation, etc.',
                        'Teaching data structures such as linked lists, binary trees, heaps, skip lists, etc.',
                        'Responsible for managing multiple tutees at once, often switching rapidly between different languages and subjects.',
                        'Drawing diagrams, creating pieces of example code to illustrate a point, aiding in test prep by quizzing students.'
                    ],
                },
                {
                    title: "Librarian & IT Contractor",
                    location: "Martha's Vineyard",
                    employerName: "Oak Bluffs Public Library",
                    startDate: new Date('July 2018'),
                    endDate: new Date('August 2018'),
                    responsibilities: [
                        'Day-to-day technological operations such as setting up/turning off PCs.',
                        'Troubleshooting IT issues such as connection, computer operation, and printers.',
                        'Answering patrons’ questions regarding printing, word processing software, phones, and all other technological questions.',
                        'Documenting procedures, protocols, and troubleshooting regarding the custom Raspberry Pi hardware solution.',
                    ],
                },
                {
                    title: 'Private Tutor',
                    location: "Chicago",
                    employerName: "Wyzant",
                    startDate: new Date("Oct 2017"),
                    endDate: new Date("May 2017"),
                    responsibilities: [
                        'Teaching tutees online and in-person about various programming languages, technologies, and concepts.',
                        'Teaching in Python, Java, HTML, CSS, and JavaScript.',
                        'Drawing diagrams',
                        'Scheduling online or in-person tutoring lessons',
                        'Creating lesson plans and exercises, creating interactive programming challenges, doing pair programming',
                        'Creating pieces of example code to illustrate a point',
                        'Demonstrating underlying programming concepts'
                    ],
                },
                {
                    title: 'Security Analyst',
                    location: "Chicago",
                    employerName: "U.S. Bank",
                    startDate: new Date("May 2019"),
                    endDate: new Date("Jan 2022"),
                    responsibilities: [
                        'Analyzing C#, Java, ASP.NET, PHP, and JS source code',
                        'Discussing implementation and security vulnerabilities with developers',
                        'Managing workload between multiple co-workers and prioritizing work items',
                        'Creating, disseminating, and maintaining documentation'
                    ],
                },
                {
                    title: 'Senior Security Engineer',
                    location: "Chicago",
                    employerName: "U.S. Bank",
                    startDate: new Date("Jan 2022"),
                    endDate: new Date("Aug 2022"),
                    responsibilities: [
                        'Implementing Kubernetes and Helm applications to production',
                        'Creating and deploying Application Security Code Scanning Pipelines for developers to self-integrate with',
                        'Teaching my team members and coworkers about Helm and containerization',
                        'Writing high-quality documentation for deployed systems for L1 support',
                        'Maintaining and diagnosing infrastructure integration issues and challenges'
                    ],
                },
                {
                    title: 'Assistant Vice President - Info Security Engineer',
                    location: "Chicago",
                    employerName: "U.S. Bank",
                    startDate: new Date("August 2022"),
                    responsibilities: [
                        'TBD'
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
            personalTraits: [
                'Constant desire to acquire new skills.',
                'Strong motivational and leadership skills.',
                'Loves working in group settings with diverse team members.',
                'Skilled in writing concise and descriptive documentation that stands the test of time.'
            ],
            whyChooseMe: (
                <Container>
                    <p>
                        I have an intense drive to explain, document, and teach programming and technology concepts. I
                        am comprehensive and concise in my work, and I enjoy creating examples, demonstrations, and
                        diagrams with the purpose of teaching.
                    </p>
                    <p>
                        When creating code, I strive to create reusable, clean, and well-documented code. I often find
                        myself
                        re-using code techniques such as programming by contract, using factory functions, and using
                        inner
                        functions or subroutines to keep my code DRY, to name a few. I use techniques that work well for
                        me, are reusable, and that provide overarching structure and patterns to my code.
                    </p>
                    <p>
                        I enjoy creating reusable coding examples with the purpose of teaching things to people, and
                        ensuring
                        that everyone is given the chance to try them out.
                    </p>
                    <p>
                        I have a wide and deep history of programming projects, all under version control and most on <a
                        href={'https://github.com/HenryFBP/'}>my
                        GitHub</a> that are all well-documented and meant to be reused by anyone.
                        In short, I love to program, teach, and document my work; and I would say that I’m very good at
                        it.
                    </p>
                </Container>
            ),
        };
    }


    renderResume() {

        console.log("WE RENDERING THE BIG ONE!!!!")

        console.log(this.data)

        return <>
            <Container>
                <h1 style={{textAlign: "center"}}>{this.data.name}</h1>
            </Container>
            {this.renderContactMe()}

            <h2>Education</h2>
            {this.renderEducation()}

            <h2>Work Experience</h2>
            {this.renderJobs()}

            <h2>Projects</h2>
            {this.renderProjects()}

            <h2>Technical Strengths</h2>
            {this.renderSkills()}

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
        const jobElts = []

        var jobs = this.data.jobsWorked
        jobs = jobs.sort((a, b) => {
            return -1 * (a.startDate.getTime() - b.startDate.getTime())
        })

        for (const idx in jobs) {
            var job = jobs[idx]

            let sdate = job.startDate
            let edate = job.endDate
            let dateRangeStr = SomeCrappyUtilitiesClass.dateRangeYearMMMonthFmt(sdate, edate)

            if (!edate) {
                dateRangeStr += ' - Currently working'
            }


            jobElts.push(
                <Card>
                    <Card.Header>
                        <LeftRightText
                            left={<h3>{job.title}</h3>}
                            right={<i>{dateRangeStr}</i>}
                        />
                        <LeftRightText
                            left={<i>{job.employerName}</i>}
                            right={<i>{job.location}</i>}
                        />
                    </Card.Header>
                    <Card.Body>
                        <ul>
                            {job.responsibilities.map(
                                (resp => {
                                    return <li>
                                        {resp}
                                    </li>
                                })
                            )}
                        </ul>
                    </Card.Body>

                </Card>
            )

        }

        return <Container id={'jobs'}>
            {jobElts}
        </Container>
    }

    private renderContactMe() {
        return <>
            <div className="col d-flex justify-content-center">
                <Card style={{padding: '1em'}}>
                    <Card.Text style={{textAlign: 'center'}}>
                        <a href={'http://henrypost.net'}>henrypost.net</a> ◈ <a
                        href={'https://github.com/HenryFBP'}>github.com/HenryFBP</a>
                        <hr/>
                        Chicago, IL ◈ Martha's Vineyard, MA
                        <hr/>
                        resplendent • falconeer ﹫ gmail • com
                    </Card.Text>
                </Card></div>
        </>
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
            let dateRangeStr = SomeCrappyUtilitiesClass.dateRangeYearMMMonthFmt(sdate, edate)

            if (!edate) {
                dateRangeStr += ' - In Progress'
            }

            eduElts.push(
                <Card>
                    <Card.Header>
                        <LeftRightText
                            left={<h3>{education.degreeName}</h3>}
                            right={<i>{dateRangeStr}</i>}/>
                        <i>{education.institutionName}, {education.institutionLocation}</i>
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

        const eltsProjects = []

        //sort proj by date
        var projects = this.data.projects
        projects.sort((a, b) => {
            return -1 * (a.date.getTime() - b.date.getTime())
        })

        for (const idx in projects) {
            var project = projects[idx]

            eltsProjects.push(MProject.renderTProject(project))

            eltsProjects.push(<br/>)
        }


        return <Container>
            {eltsProjects}
        </Container>

    }

    private renderExtracurricular() {

        var eltsExtraCurr = []

        var ecs = this.data.extraCurricular;

        for (const idx in ecs) {
            var ec = ecs[idx]

            eltsExtraCurr.push('lol todo :)')
            eltsExtraCurr.push(<br/>)
        }


        return <Container>
            {eltsExtraCurr}
        </Container>
    }

    private renderPersonalTraits() {
        return <Container>
            <ul>
                {this.data.personalTraits.map((it) => {
                    return <li><p>{it}</p></li>
                })}
            </ul>
        </Container>
    }

    private renderWhyChooseMe() {
        return this.data.whyChooseMe
    }
}
