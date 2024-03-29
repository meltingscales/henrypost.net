import {Card, Col, Container, Row} from "react-bootstrap";
import {ServiceCrappyUtilities} from "../service/ServiceCrappyUtilities";
import {ReactNode} from "react";
import {DataBoundClass} from "./DataBoundClass";
import {LeftRightText} from "../component/tidbits/LeftRightText";
import _ from "lodash";

type TJobWorked = {
    title: string
    employerName?: string
    startDate: Date
    endDate?: Date
    description?: string
    responsibilities: string[]
    skillsUsed?: string[]
    location?: string
}

type TSkill = {
    category?: string
    name: string
    timeStudied?: string
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
                            ServiceCrappyUtilities.yearMMMonthFmt(p.date)
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

type TClass = {
    className: string
    classTime: string
}

type TEducation = {
    institutionName: string
    institutionLocation?: string
    startDate: Date
    endDate?: Date
    degreeName: string
    description?: string | ReactNode
    extraDescription?: string | ReactNode
    classes?: TClass[]
}

export class MCertification extends DataBoundClass<TCertification> {

    static is_security_compass(cert: TCertification): Boolean {
        return cert.issuerName.includes('Security Compass')
    }

    static transform_credentialDotNet_datum(raw_credentialDotNet_datum: any): TCertification {

        return {
            certificateStandardFamily: raw_credentialDotNet_datum.issuer.name, //TODO Technically this is incorrect but who cares lol
            certificationName: raw_credentialDotNet_datum.name,
            certificationURL: raw_credentialDotNet_datum.url,
            description: raw_credentialDotNet_datum.description,
            expireDate: undefined,
            extraDescription: undefined,
            issueDate: new Date(raw_credentialDotNet_datum.issued_on),
            issuerName: raw_credentialDotNet_datum.issuer.name
        }

    }

    static transform_credly_datum(raw_credly_datum: any): TCertification {
        var transformed: TCertification = {
            certificateStandardFamily: raw_credly_datum.badge_template.alignments[0].name,
            certificationName: raw_credly_datum.badge_template.name,
            certificationURL: 'https://www.credly.com/badges/' + raw_credly_datum.id,
            description: raw_credly_datum.badge_template.description,
            extraDescription: undefined,
            issueDate: new Date(raw_credly_datum.issued_at_date),
            issuerName: raw_credly_datum.issuer.entities[0].entity.name,
        }

        if (raw_credly_datum.expires_at) {
            transformed.expireDate = raw_credly_datum.expires_at
        }

        return transformed

    }

    static parse_credly_dump(raw_credly_data: any): TCertification[] {

        const relevant_data = raw_credly_data.data;

        return relevant_data.map((it) => {
            return MCertification.transform_credly_datum(it)
        });
    }

    static parse_credentialDotNet_dump(raw_credentialDotNet_data: any) {
        const relevant_data = raw_credentialDotNet_data.data.credentials

        return relevant_data.map((it) => {
            return MCertification.transform_credentialDotNet_datum(it)
        });

    }

    static renderCertification(cert: TCertification) {
        return <Card>
            <Card.Header>
                <a href={cert.certificationURL}>{cert.certificationName} ({cert.certificateStandardFamily})</a>
                <br/>
                <small>Issued on {ServiceCrappyUtilities.yearMMMonthFmt(cert.issueDate)} by {cert.issuerName}</small>
            </Card.Header>
            <Card.Body>
                <p>
                    {cert.description}
                </p>
                <p>
                    {cert.extraDescription}
                </p>
                {/*{cert.*/}
            </Card.Body>
        </Card>
    }
}


export type TCertification = {
    issuerName: string
    issueDate: Date
    expireDate?: Date
    certificationURL?: string
    certificationName: string
    certificateStandardFamily?: string
    description?: string | ReactNode
    extraDescription?: string | ReactNode
}

type TExtraCurricular = {
    startDate: Date
    endDate?: Date
    description: string | ReactNode
}

export type TResume = {
    name: string
    jobsWorked: TJobWorked[]
    projects: TProject[]
    skills: TSkill[]
    education: TEducation[]
    extraCurricular: TExtraCurricular[]
    certifications: TCertification[]
    whyChooseMe?: string | ReactNode
    personalTraits?: string[],
}


export class MSkill extends DataBoundClass<TSkill> {

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

    static renderSkillTimeStudied(skill: TSkill) {

        if (!(skill.timeStudied)) {
            return null
        }

        return <>
            &nbsp;
            <i>({skill.timeStudied})</i>
        </>
    }

    static renderSkill(skill: TSkill) {


        return <>
            <li>
                <p>{skill.name}
                    {
                        MSkill.renderSkillTimeStudied(skill)
                    }
                </p>
            </li>
        </>

    }
}

export class MJobWorked extends DataBoundClass<TJobWorked> {


    public renderTest() {
        return <p>wow, I can return a &lt;p&gt;</p>
    }


    public renderJobCard() {
        return <Card>
            <Card.Header>
                <LeftRightText
                    left={<h3>{this.data.title}</h3>}
                    right={<i>{this.renderDateRangeString()}</i>}
                />
                <LeftRightText
                    left={<i>{this.data.employerName}</i>}
                    right={<i>{this.data.location}</i>}
                />
            </Card.Header>
            <Card.Body>
                {this.renderResponsibilities()}
                {this.renderSkillsUsed()}
            </Card.Body>

        </Card>

    }

    public renderDateRangeString() {
        let sdate = this.data.startDate
        let edate = this.data.endDate
        let dateRangeStr = ServiceCrappyUtilities.dateRangeYearMMMonthFmt(sdate, edate)

        if (!edate) {
            dateRangeStr += ' - Currently working'
        }

        return dateRangeStr

    }

    public renderSkillsUsed() {

        if (!this.data.skillsUsed) {
            return null;
        }

        return <aside>
            <span>Skills Used: &nbsp;</span>
            {this.data.skillsUsed?.map(
                (skill => {
                        return <span>{<i>{skill}</i>}{" | "}</span>
                    }
                )
            )}
        </aside>


    }

    public renderResponsibilities() {
        return <ul>
            {this.data.responsibilities.map(
                (resp => {
                    return <li>
                        {resp}
                    </li>
                })
            )}
        </ul>

    }

}

export class MResume extends DataBoundClass<TResume> {

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

    renderCertifications() {


        var eltsCertificationsSecurityCompass = []
        var eltsCertificationsOthers = []

        var certs = this.data.certifications
            //sort by cert family
            .sort(
                (x, y) => {
                    return x.certificateStandardFamily.localeCompare(y.certificateStandardFamily)
                }
            )
        //newest first
        .sort(
            (x, y) => {
                return -1 * (x.issueDate.getTime() - y.issueDate.getTime())
            }
        )

        for (const idx in certs) {
            var cert: TCertification = certs[idx]
            var renderedCert: JSX.Element = MCertification.renderCertification(cert)

            if (MCertification.is_security_compass(cert)) {
                eltsCertificationsSecurityCompass.push(renderedCert)
                eltsCertificationsSecurityCompass.push(<br/>)
            } else {
                eltsCertificationsOthers.push(renderedCert)
                eltsCertificationsOthers.push(<br/>)
            }

        }


        return <Container>
            <h2>Security Compass Certs</h2>
            {eltsCertificationsSecurityCompass}
            <br/>
            <h2>Other Certs/Training</h2>
            {eltsCertificationsOthers}
        </Container>;
    }

    private renderSkills() {
        var skillsElts = []

        for (const i in this.data.skills) {
            const skill = this.data.skills[i]
            skillsElts.push(
                MSkill.renderSkill(skill)
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

    //TODO split this big ass render function into multiple smaller render functions
    private renderJobs() {
        const jobElts = []

        var jobs = this.data.jobsWorked
        jobs = jobs.sort((a, b) => {
            return -1 * (a.startDate.getTime() - b.startDate.getTime())
        })

        for (const idx in jobs) {
            var job = jobs[idx]
            var mJob = new MJobWorked(job)


            jobElts.push(
                mJob.renderJobCard()
            )

            jobElts.push(<br/>)

        }

        return <Container id={'jobs'}>
            {jobElts}
        </Container>
    }

    //TODO remove hard-coded data
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

    private renderClassList(classes: TClass[]) {
        if (classes) {

            let groupedClasses = _.groupBy(classes, 'classTime')

            console.log(groupedClasses)

            // @ts-ignore
            return (
                <Card.Footer>
                    <h4>Classes:</h4>
                    {Object.keys(groupedClasses).map((classTime) => {

                        let specificClass: TClass[] = groupedClasses[classTime]

                        // console.log("specificClass:")
                        // console.log(specificClass)

                        return <>
                            <Container>
                                <h5>{classTime}:</h5>
                                <Row xs={2} md={3} lg={4}>
                                    {
                                        specificClass.map((it) => {
                                            return <Col>
                                                <Card>{it.className}</Card>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </Container>
                            <hr/>
                        </>
                    })}

                </Card.Footer>
            )
        } else {
            return null
        }
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
            let dateRangeStr = ServiceCrappyUtilities.dateRangeYearMMMonthFmt(sdate, edate)

            if (!edate) {
                dateRangeStr += ' - In Progress'
            }

            let eltEduDesc = null
            if (education.description) {
                eltEduDesc = (
                    <Card.Body>
                        <p><i>{education.description}</i></p>
                    </Card.Body>
                )
            }

            let eltEduClasses = this.renderClassList(education.classes)

            eduElts.push(
                <Card>
                    <Card.Header>
                        <LeftRightText
                            left={<h3>{education.degreeName}</h3>}
                            right={<i>{dateRangeStr}</i>}/>
                        <i>{education.institutionName}, {education.institutionLocation}</i>
                    </Card.Header>

                    {eltEduDesc}

                    {eltEduClasses}
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
            //TODO: What if we don't want to use just YearFMT?
            var ecDateRange: string = ServiceCrappyUtilities.dateRangeYearFmt(
                ec.startDate, ec.endDate
            )

            eltsExtraCurr.push(<Card>

                <Card.Body>
                    <p>
                        {ec.description}
                    </p>

                    <i>{ecDateRange}</i>
                </Card.Body>

            </Card>)
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
