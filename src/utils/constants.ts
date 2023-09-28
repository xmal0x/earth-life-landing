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
} from '../assets';
import {Benefactor, Feedback, FooterLink, NavigationLink, Program, Result} from '../types';

export const navLinks: NavigationLink[] = [
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

export const programs: Program[] = [
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

export const results: Result[] = [
    {
        icon: tree,
        title: '7178',
        description: 'Trees Planted'
    },
    {
        icon: life,
        title: '1543',
        description: 'Changing Life Since'
    },
    {
        icon: partner,
        title: '52 +',
        description: 'Our Partners'
    },
    {
        icon: hands,
        title: '467',
        description: 'Volunteers'
    },
]

export const benefactors: Benefactor[] = [
    {
        name: 'Joan Doe',
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
        name: 'William Spielberg',
        position: 'Volunteer',
        image: team3,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
    {
        name: 'Steven Baggins',
        position: 'Volunteer',
        image: team4,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
    {
        name: 'Eric Gates',
        position: 'Volunteer',
        image: team5,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
    {
        name: 'James Grinvald',
        position: 'Volunteer',
        image: team6,
        instagramLink: 'https://www.instagram.com',
        linkedinLink: 'https://www.linkedin.com',
        twitterLink: 'https://www.twitter.com'
    },
]

export const feedbacks: Feedback[] = [
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
        text: 'Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.',
        image: feedback3
    },
]

export const addressLines: string[] = [
    '4899 Washington Ave. Manchester, Kentucky 77733',
    '(555) 555-4321, (444) 444-1234',
    'bizza789@gmail.com',
    'mankind998@gmail.com'
]

export const footerLinks: FooterLink[] = [
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
