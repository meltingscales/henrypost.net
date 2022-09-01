import {Container} from "react-bootstrap";
import {MSkill, MCertification, TResume, TCertification} from "../../model/MResume";
import {CREDENTIAL_NET_DATA_HENRYPOST} from "../scraped/credential.net_data_henrypost";
import {CREDLY_DATA_HENRYPOST} from "../scraped/credly_data_henrypost";


export default function HENRY_TRESUME_DATA(): TResume {
    let theResume = {
        name: "Henry Post",
        extraCurricular: [
            {
                startDate: new Date('2012'),
                endDate: new Date('2013'),
                description: 'Part of a student-led school-wide computer repair club at Northside College Preparatory High School.\n' +
                    'Serviced laptops, servers, and desktops.'
            },
            {
                startDate: new Date('2012'),
                endDate: new Date('2015'),
                description: 'Worked for “Dirt Actualizers”, a landscaping club at Northside College Preparatory High School.'
            },
            {
                startDate: new Date('2016'),
                endDate: new Date('2018'),
                description: 'Part of “Electronic Gaming Club” at Illinois Institute of Technology.'
            },
        ],
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
                    'Integrating code scanning pipelines with evidence collection systems',
                    'Collaborating with my team and other business lines drive integration to completion',
                    // 'Designing custom integrations',
                    'Prototyping support for new languages and tools to be scanned',
                    //lol bro idk
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

    //copy credly and credential.net dump into our default resume object
    MCertification.parse_credly_dump(CREDLY_DATA_HENRYPOST).map((
        // eslint-disable-next-line array-callback-return
        (it: TCertification) => {
            // @ts-ignore
            theResume.certifications.push(it)
        }))

    MCertification.parse_credentialDotNet_dump(CREDENTIAL_NET_DATA_HENRYPOST).map(
        // eslint-disable-next-line array-callback-return
        (it: TCertification) => {
            // @ts-ignore
            theResume.certifications.push(it)
        }
    )

    return theResume;
}

