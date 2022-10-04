import {Container} from "react-bootstrap";
import {MCertification, TResume, TCertification} from "../../model/MResume";
import {CREDENTIAL_NET_DATA_HENRYPOST} from "../scraped/credential.net_data_henrypost";
import {CREDLY_DATA_HENRYPOST} from "../scraped/credly_data_henrypost";


export default function HENRY_TRESUME_DATA(): TResume {
    let theResume: TResume = {
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
                description: "Dean's list: Spring 2016, Fall 2018, Fall 2019",
                classes: [
                    {
                        className: 'SCI 111 - Computational Science',
                        classTime: 'Summer 2014',
                    },
                    //
                    {
                        className: 'CS 100 - Intro to the Profession',
                        classTime: 'Fall 2015',
                    },
                    {
                        className: 'CS 201 - Accelerated Intro to Cmptr Sci',
                        classTime: 'Fall 2015',
                    },
                    {
                        className: 'HUM 200 - Evolutionary Origin of Language',
                        classTime: 'Fall 2015',
                    },
                    {
                        className: 'MATH 148 - Calculus/Precalculus I',
                        classTime: 'Fall 2015',
                    },
                    {
                        className: 'PSYC 222 - Brain, Mind and Behavior',
                        classTime: 'Fall 2015',
                    },
                    //
                    {
                        className: 'CS 331 - Data Structures and Algorithms',
                        classTime: 'Spring 2016',
                    },
                    {
                        className: 'CS 495 - Programming Paradigms/Patterns',
                        classTime: 'Spring 2016',
                    },
                    //
                    {
                        className: 'CS 330 - Discrete Structures',
                        classTime: 'Fall 2016',
                    },
                    {
                        className: 'CS 350 - Cmptr Org & Asmbly Lang Prgmmg',
                        classTime: 'Fall 2016',
                    },
                    {
                        className: 'ITM 301 - Intro OS and Hardware I',
                        classTime: 'Fall 2016',
                    },
                    {
                        className: 'PSYC 301 - Industrial Psychology',
                        classTime: 'Fall 2016',
                    },
                    //
                    {
                        className: 'EG 225 - Eng Graphics for Non-Engineers',
                        classTime: 'Spring 2017',
                    },
                    {
                        className: 'HIST 355 - Digital Labor',
                        classTime: 'Spring 2017',
                    },
                    {
                        className: 'ITM 312 - Intro Systems Sftwr Prgmng',
                        classTime: 'Spring 2017',
                    },
                    {
                        className: 'ITMM 471 - Project Management for ITM',
                        classTime: 'Spring 2017',
                    },
                    {
                        className: 'ITMO 456 - Intro Open Source OS',
                        classTime: 'Spring 2017',
                    },
                    //
                    {
                        className: 'EG 325 - Adv Engg Graphics Non-Engineer',
                        classTime: 'Fall 2017',
                    },
                    {
                        className: 'ITMD 361 - Fund of Web Development',
                        classTime: 'Fall 2017',
                    },
                    {
                        className: 'ITMD 411 - Intermediate Software Devlpmnt',
                        classTime: 'Fall 2017',
                    },
                    {
                        className: 'ITMD 421 - Data Modeling and Applications',
                        classTime: 'Fall 2017',
                    },
                    {
                        className: 'ITMO 440 - Intro Data Networks & Internet',
                        classTime: 'Fall 2017',
                    },
                    //
                    {
                        className: 'BUS 221 - Analytics for Informed Dec-Mkg',
                        classTime: 'Spring 2018',
                    },
                    {
                        className: 'COM 380 - Digital Media & Citizenship',
                        classTime: 'Spring 2018',
                    },
                    {
                        className: 'ITMD 362 - Human-Computer Interaction',
                        classTime: 'Spring 2018',
                    },
                    {
                        className: 'ITMD 413 - Open-Source Programming',
                        classTime: 'Spring 2018',
                    },
                    {
                        className: 'ITMD 415 - Advanced Software Development',
                        classTime: 'Spring 2018',
                    },
                    //
                    {
                        className: 'ITMD 455 - Open-Source Intelligent Device',
                        classTime: 'Fall 2018',
                    },
                    {
                        className: 'ITMD 460 - Fundamentals of Multimedia',
                        classTime: 'Fall 2018',
                    },
                    {
                        className: 'ITMD 463 - Intermediate Web App Develop',
                        classTime: 'Fall 2018',
                    },
                    {
                        className: 'ITMS 428 - Database Security',
                        classTime: 'Fall 2018',
                    },
                    {
                        className: 'ITMS 443 - Vulnerability Analys and Ctrl',
                        classTime: 'Fall 2018',
                    },
                    //
                    {
                        className: 'CHEM 124 - Princ of Chemistry I with Lab',
                        classTime: 'Spring 2019',
                    },
                    {
                        className: 'IPRO 497 - Big Data & Public Safety',
                        classTime: 'Spring 2019',
                    },
                    {
                        className: 'ITMD 466 - Service-Oriented Architectures',
                        classTime: 'Spring 2019',
                    },
                    {
                        className: 'ITMT 430 - System Integration',
                        classTime: 'Spring 2019',
                    },
                    //
                    {
                        className: 'HIST 380 - Diversity in History of Tech',
                        classTime: 'Fall 2019',
                    },
                    {
                        className: 'IPRO 497 - Antimatter Interferometer',
                        classTime: 'Fall 2019',
                    },
                    {
                        className: 'ITMD 422 - Advanced Database Mgmt',
                        classTime: 'Fall 2019',
                    },
                    {
                        className: 'ITMO 417 - Shell Scripting for Sys Admin',
                        classTime: 'Fall 2019',
                    },
                    {
                        className: 'ITMS 448 - Cyber Security Technologies',
                        classTime: 'Fall 2019',
                    },
                ],
            },
            {
                institutionName: 'New York University',
                institutionLocation: 'New York',
                degreeName: `Master's in Cybersecurity`,
                startDate: new Date('October 2021'),
                classes: [
                    {
                        className: 'CS-GY 6813 - Information Security & Privacy',
                        classTime: 'Fall 2021',
                    },
                    {
                        className: 'CS-GY 6843 - Computer Networking',
                        classTime: 'Spring 2022',
                    },
                    {
                        className: 'CS-GY 6823 - Network Security',
                        classTime: 'Fall 2022',
                    },

                ]
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
                skillsUsed: [
                    'Powershell',
                    'Python (Programming Language)',
                    'Java',
                    'Kubernetes',
                    'Helm (Software)',
                    'Jenkins',
                ]
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
                skillsUsed: [
                    'REST APIs',
                    'Docker',
                    'Java EE',
                    'SAST',
                    'SCA',
                    'DAST',
                    'IAST',
                    'Kubernetes',
                    'Helm (Software)',
                    'Groovy'

                ]
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
        skills: [
            {
                "name": "Kubernetes",
                "timeStudied": "1y"
            },
            {
                "name": "Helm",
                "timeStudied": "1y"
            },
            {
                "name": "Groovy",
                "timeStudied": "2y"
            },
            {
                "name": "Programming",
                "timeStudied": "10y"
            },
            {
                "name": "Linux",
                "timeStudied": "4y"
            },
            {
                "name": "IT Administration",
                "timeStudied": "3y"
            },
            {
                "name": "Software Design",
                "timeStudied": "5y"
            },
            {
                "name": "Technical Documentation",
                "timeStudied": "4y"
            },
            {
                "name": "Computer Repair",
                "timeStudied": "5y"
            },
            {
                "name": "Circuitry",
                "timeStudied": "2y"
            }
        ],
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

    //test adding new skills dynamically
    // theResume.skills.push({name: "Making really wacky custom ReactJS sites :3c"})

    return theResume;
}

