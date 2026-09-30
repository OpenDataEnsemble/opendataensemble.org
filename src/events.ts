import type { StaticImageData } from 'next/image';
import banner from './assets/events/kampala-2026/banner.jpg';
import certificate from './assets/events/kampala-2026/certificate.jpg';
import groupOutside from './assets/events/kampala-2026/group-outside.jpg';
import handsOn from './assets/events/kampala-2026/hands-on.jpg';
import joy from './assets/events/kampala-2026/joy.jpg';
import laptopFocus from './assets/events/kampala-2026/laptop-focus.jpg';
import laptops from './assets/events/kampala-2026/laptops.jpg';
import lunch from './assets/events/kampala-2026/lunch.jpg';
import mentorCloseup from './assets/events/kampala-2026/mentor-closeup.jpg';
import mentorPhones from './assets/events/kampala-2026/mentor-phones.jpg';
import phonesCloseup from './assets/events/kampala-2026/phones-closeup.jpg';
import presentingGroup from './assets/events/kampala-2026/presenting-group.jpg';
import programme from './assets/events/kampala-2026/programme.jpg';
import speakerScreen from './assets/events/kampala-2026/speaker-screen.jpg';
import speakerTalk from './assets/events/kampala-2026/speaker-talk.jpg';
import summitShirt from './assets/events/kampala-2026/summit-shirt.jpg';
import table from './assets/events/kampala-2026/table.jpg';
import talentSpeaking from './assets/events/kampala-2026/talent-speaking.jpg';
import talentsBanner from './assets/events/kampala-2026/talents-banner.jpg';
import venue from './assets/events/kampala-2026/venue.jpg';
import { GROUNDBREAKER } from './site';

export type EventPhoto = {
  src: StaticImageData;
  alt: string;
};

export type CommunityEvent = {
  href: string;
  name: string;
  edition: string;
  date: string;
  dateLabel: string;
  shortDate: string;
  venue: string;
  city: string;
  partner: { name: string; href: string };
  format: string;
  summary: string;
  cover: EventPhoto;
  highlights: EventPhoto[];
};

export const kampalaPhotos = {
  banner: {
    src: banner,
    alt: 'The ODE Community Days roll-up banner: Kampala 2026, 16 September, National ICT Innovation Hub.',
  },
  certificate: {
    src: certificate,
    alt: 'A participant holds up her certificate between two facilitators.',
  },
  groupOutside: {
    src: groupOutside,
    alt: 'Everyone who took part, together outside the National ICT Innovation Hub in Kampala.',
  },
  handsOn: {
    src: handsOn,
    alt: 'Three participants explore ODE together on a shared laptop.',
  },
  joy: {
    src: joy,
    alt: 'A participant throws her arms wide in front of a colourful prize wheel.',
  },
  laptopFocus: {
    src: laptopFocus,
    alt: 'Participants lean in over a sticker-covered laptop.',
  },
  laptops: {
    src: laptops,
    alt: 'Participants at their laptops, one smiling with a peace sign.',
  },
  lunch: {
    src: lunch,
    alt: 'Participants serve themselves at the lunch buffet.',
  },
  mentorCloseup: {
    src: mentorCloseup,
    alt: 'A facilitator helps a participant with an app on her phone.',
  },
  mentorPhones: {
    src: mentorPhones,
    alt: 'A facilitator guides a group as they try forms on their phones.',
  },
  phonesCloseup: {
    src: phonesCloseup,
    alt: 'Participants work through an exercise together at a laptop.',
  },
  presentingGroup: {
    src: presentingGroup,
    alt: 'A team presents its group work from the podium.',
  },
  programme: {
    src: programme,
    alt: 'A facilitator walks the room through the programme for the day.',
  },
  speakerScreen: {
    src: speakerScreen,
    alt: 'A speaker addresses the room beside a large screen.',
  },
  speakerTalk: {
    src: speakerTalk,
    alt: 'A speaker in an Open Data Ensemble t-shirt talks to the room.',
  },
  summitShirt: {
    src: summitShirt,
    alt: 'The back of a gold polo embroidered “ODE Community Summit 2026, Kampala, Uganda”.',
  },
  table: {
    src: table,
    alt: 'Participants gather around a table, smiling as they compare their phones.',
  },
  talentSpeaking: {
    src: talentSpeaking,
    alt: 'A participant speaks to the room with a microphone.',
  },
  talentsBanner: {
    src: talentsBanner,
    alt: 'Four participants pose in front of the ODE Community Days banner.',
  },
  venue: {
    src: venue,
    alt: 'The whole group outside the National ICT Innovation Hub, between two ODE banners.',
  },
} satisfies Record<string, EventPhoto>;

export const kampala2026: CommunityEvent = {
  href: '/community/kampala-2026',
  name: 'ODE Community Days',
  edition: 'Kampala 2026',
  date: '2026-09-16',
  dateLabel: '16 September 2026',
  shortDate: '16 SEP 2026',
  venue: 'National ICT Innovation Hub',
  city: 'Kampala, Uganda',
  partner: { name: 'Groundbreaker Talents', href: GROUNDBREAKER },
  format: 'Talks and a hands-on ODE Lab',
  summary:
    'A day with students from Groundbreaker Talents: a tour of the ODE ecosystem, hands-on group work in the ODE Lab, team presentations, and certificates to close.',
  cover: kampalaPhotos.venue,
  highlights: [kampalaPhotos.joy, kampalaPhotos.handsOn, kampalaPhotos.certificate],
};

export const events: CommunityEvent[] = [kampala2026];
