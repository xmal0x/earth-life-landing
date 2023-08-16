import {
    family,
    fan,
    feedback1,
    feedback2,
    feedback3,
    growth,
    hands,
    life,
    light,
    mask,
    partner,
    reduce,
    team1,
    team2,
    team3,
    team4,
    team5,
    team6,
    tree
} from "../assets";
import {IBenefactor, IFeedback, IFooterLink, INavigationLink, IProgram, IResult} from "../types";

export const navLinks: INavigationLink[] = [
    {
        id: 'programs',
        title: 'Our Programs'
    },
    {
        id: 'results',
        title: 'Results'
    },
    {
        id: 'benefactors',
        title: 'Our Benefactors'
    },
    {
        id: 'feedbacks',
        title: 'Feedbacks'
    },
    {
        id: 'signup',
        title: 'Sign Up'
    },
]

export const programs: IProgram[] = [
    {
        title: 'Reduce Global Warming Now',
        text: 'The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.',
        icon: reduce
    },
    {
        title: 'Protecting Ecosystems',
        text: 'Higher temperatures are shortening the seasons and, in some places, have already exceeded safe levels for ecosystems and humans.',
        icon: growth
    },
    {
        title: 'Shift Towards Clean Energy',
        text: 'This energy transition has the potential to impact many aspects of life, including the environment, society, the economy, and governance.',
        icon: light
    },
    {
        title: 'Safe Coastal Livelihoods',
        text: 'Sustainable aquaculture, e.g. grouper aquaculture, meets the high demand for reef fish while potentially preserving coastal communities\' livelihoods.',
        icon: family
    },
    {
        title: 'Stop Toxic Chemical in Air',
        text: 'Solubility is differentiated by whether the substance is easily dissolved in organic solvents under normal environmental conditions of temperature & pressure.',
        icon: mask
    },
    {
        title: 'Ban Radioactive Contamination',
        text: 'Radioactive materials released into the environment can contaminate the air, water, surfaces, soil, plants, buildings, people & animals.',
        icon: fan
    },
]

export const results: IResult[] = [
    {
        icon: tree,
        title: '5898',
        description: 'Trees Planted'
    },
    {
        icon: life,
        title: '1994',
        description: 'Changing Life Since'
    },
    {
        icon: partner,
        title: '21 +',
        description: 'Our Partners'
    },
    {
        icon: hands,
        title: '385',
        description: 'Volunteers'
    },
]

export const benefactors: IBenefactor[] = [
    {
        name: 'Pauline Wright',
        position: 'Volunteer',
        image: team1,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
    {
        name: 'James Stewart',
        position: 'Volunteer',
        image: team2,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
    {
        name: 'William Mejia',
        position: 'Volunteer',
        image: team3,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
    {
        name: 'Brandon Hudgins',
        position: 'Volunteer',
        image: team4,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
    {
        name: 'Cesar Watts',
        position: 'Volunteer',
        image: team5,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
    {
        name: 'James Stewart',
        position: 'Volunteer',
        image: team6,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
]

export const feedbacks: IFeedback[] = [
    {
        name: 'Charles M. Pruitt',
        position: 'Advocacy Partner',
        text: 'Environmental research has resulted in significant advancements that have resulted in the protection of human and ecosystem health.\n' +
            'In the industrialized world, voluntary environmental agreements are a must.',
        image: feedback1
    },
    {
        name: 'Karen J. Lugo',
        position: 'Volunteer',
        text: 'A brilliant strategy for finally making nature conservation and sustainability relevant in elections by supporting green candidates in all possible efforts. Let’s make that happen with our mechanisms.',
        image: feedback2
    },
    {
        name: 'Goldie D. Taylor',
        position: 'Investor',
        text: 'Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.\n' +
            '\n',
        image: feedback3
    },
]

export const addressLines: string[] = [
    '4517 Washington Ave. Manchester, Kentucky 39495',
    '(505) 555-0125, (406) 555-0120',
    'binhan628@gmail.com',
    'manhhachkt08@gmail.com'
]

export const footerLinks: IFooterLink[] = [
    {
        id: 'programs',
        title: 'Our Programs'
    },
    {
        id: 'results',
        title: 'Results'
    },
    {
        id: 'benefactors',
        title: 'Our Benefactors'
    },
    {
        id: 'feedbacks',
        title: 'Feedbacks'
    },
]
