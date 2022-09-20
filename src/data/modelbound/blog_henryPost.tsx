import {TBlog} from "../../model/MBlog";
import {Container} from "react-bootstrap";


export default function HENRY_TBLOG_DATA(): TBlog {
    var daBlog = {
        posts: [
            // {
            //     author: "Henry Post",
            //     date: new Date('09/17/2022'),
            //     title: 'Like a Product Owner in the headlights',
            //     blogContent: (
            //         <Container>
            //
            //             <p>EDIT: I'm not a Product Owner. 😂😂😂 It was a miscommunication. My boss meant "Expert of the product I work with".</p>
            //
            //             <p>Short version: I need to teach myself to be a Product Owner and not just focus on technical
            //                 work.</p>
            //
            //             <p>I am now a "Product Owner", and have been for a few months. But it only really sank in last
            //                 week. And after chatting with my boss about new leadership expectations and what I should
            //                 know in preparation for next year, I realize that I have been spending way too much time
            //                 doing minutiae-like tasks.</p>
            //
            //             <p>I mean, for the last 2 weeks, I've basically been just grinding out a specific build system
            //                 scanning feature. That's literally it. And I was stuck on some proxy/auth issue. I did reach
            //                 out to people, but that whole week was just totally spent doing technical stuff. I feel like
            //                 I have 3 months of tactical product owner catch-up to play.</p>
            //
            //             <p>But I feel that I must build a product roadmap, understand use cases, and I need to start
            //                 partnering with
            //                 teams in a strategic way. This is very new to me, as a DevOps/Security Engineer going
            //                 directly into a planning/management role, but I am going to try my best.</p>
            //
            //             <p>And I am also not going to worry myself excessively. I could see a younger version (I'm 25
            //                 now!) Of myself freaking out! And really stressing over this, but that panic would not help
            //                 me. </p>
            //
            //             <p>I purchased the books "Who Moved my Cheese", "The Unicorn Project", and "Product Management
            //                 for Dummies" to help prepare myself.</p>
            //
            //             <p>And I have started a "Brainstorming" notes section. I need to make a product roadmap, meet
            //                 with the vendor, and spend more time thinking about how to bring value to my customers, how
            //                 I can partner with other teams, and how I can help enhance my company's AppSec automation.
            //                 Not just focusing on small development-level tasks!</p>
            //
            //             <p>I don't really feel "bad" about not doing this earlier... And I shouldn't. I have done what
            //                 has been asked of me, and did not realize I should "change course" until yesterday.</p>
            //
            //             <p>
            //                 I think, mainly because, I never really realized that this was part of my job. I was hired
            //                 to be a Security Analyst, then 1.5 years later, I'm a Security Engineer. I did Kubernetes
            //                 and Helm, did infra upgrades, Java APIs, database stuff, Security Pipeline stuff, etc. Then,
            //                 only 4 months into that, I get promoted to a new role, and 2 months into that role, I don't
            //                 really realize what my new roles are.</p>
            //
            //             <p>
            //                 But realizing it late is better than having my manager's manager realize it and have to take
            //                 corrective action. And honestly, I'm not going to worry myself sick about that.
            //             </p>
            //
            //             <p>
            //                 Because I'll try to do my best to be a Product Owner and learn what I need to fulfil my
            //                 role!
            //             </p>
            //         </Container>
            //     )
            // },
            {
                author: "Henry Post",
                blogContent: (
                    <Container>
                        {/*<p>bro im on a plane!!!! wow!!!!!</p>*/}
                        <p>Going to see a friend from my childhood, a good friend of my late mom - Jet Dee. Can't wait.
                            Will update this blog more after I land.</p>

                        <p>
                            Update: It was pretty good. Been awake for 36 hours...and caught the Plymouth Brockton bus
                            with about 30 seconds to spare.
                        </p>
                        <p>
                            I'll probably update this later... I would just ramble about something random if I wrote
                            more.
                        </p>
                        <p>
                            What I really should do is figure out how to make the functionality of "view only post
                            tagged with X". I might need to ask David K the best way to do this.
                        </p>
                    </Container>
                ),
                date: new Date('2022-08-25'),
                tags: [
                    'casual',
                ],
                title: "Flight to Hawaii",
            },
            {
                author: "Henry Post",
                blogContent: (
                    <Container>
                        <p>test - really old post</p>
                        <a href={'https://henryfbp.github.io/posts/'}>see my old posts here :)</a>
                    </Container>
                ),
                date: new Date('2021-01-01'),
                tags: ['test'],
                title: "Old posts"
            }
        ]
    }

    //TODO: Collect data from old markdown blog - using Github API.
    // @ts-ignore
    // daBlog.posts.push(...[])

    return daBlog
}