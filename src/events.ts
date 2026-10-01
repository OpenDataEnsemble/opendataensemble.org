import type { StaticImageData } from 'next/image';
import award from './assets/events/kampala-2026/award.webp';
import banner from './assets/events/kampala-2026/banner.webp';
import bannerCrew from './assets/events/kampala-2026/banner-crew.webp';
import buffetOutside from './assets/events/kampala-2026/buffet-outside.webp';
import certificate from './assets/events/kampala-2026/certificate.webp';
import certificatePattern from './assets/events/kampala-2026/certificate-pattern.webp';
import certificateSmile from './assets/events/kampala-2026/certificate-smile.webp';
import certificateWhite from './assets/events/kampala-2026/certificate-white.webp';
import closingWords from './assets/events/kampala-2026/closing-words.webp';
import coffee from './assets/events/kampala-2026/coffee.webp';
import firstHellos from './assets/events/kampala-2026/first-hellos.webp';
import fullRoom from './assets/events/kampala-2026/full-room.webp';
import groupGuest from './assets/events/kampala-2026/group-guest.webp';
import groupLaughs from './assets/events/kampala-2026/group-laughs.webp';
import groupOutside from './assets/events/kampala-2026/group-outside.webp';
import guestSpeaker from './assets/events/kampala-2026/guest-speaker.webp';
import hallReady from './assets/events/kampala-2026/hall-ready.webp';
import handsOn from './assets/events/kampala-2026/hands-on.webp';
import joy from './assets/events/kampala-2026/joy.webp';
import labCircle from './assets/events/kampala-2026/lab-circle.webp';
import labGuide from './assets/events/kampala-2026/lab-guide.webp';
import labSmiles from './assets/events/kampala-2026/lab-smiles.webp';
import laptopFocus from './assets/events/kampala-2026/laptop-focus.webp';
import laptops from './assets/events/kampala-2026/laptops.webp';
import listening from './assets/events/kampala-2026/listening.webp';
import lunch from './assets/events/kampala-2026/lunch.webp';
import mentorCloseup from './assets/events/kampala-2026/mentor-closeup.webp';
import mentorPhones from './assets/events/kampala-2026/mentor-phones.webp';
import odeTee from './assets/events/kampala-2026/ode-tee.webp';
import paintedWall from './assets/events/kampala-2026/painted-wall.webp';
import peaceSign from './assets/events/kampala-2026/peace-sign.webp';
import phoneCheck from './assets/events/kampala-2026/phone-check.webp';
import phonesCloseup from './assets/events/kampala-2026/phones-closeup.webp';
import phonesCrowd from './assets/events/kampala-2026/phones-crowd.webp';
import portraitGold from './assets/events/kampala-2026/portrait-gold.webp';
import portraitGreen from './assets/events/kampala-2026/portrait-green.webp';
import presentingGroup from './assets/events/kampala-2026/presenting-group.webp';
import programme from './assets/events/kampala-2026/programme.webp';
import registration from './assets/events/kampala-2026/registration.webp';
import speakerGold from './assets/events/kampala-2026/speaker-gold.webp';
import speakerScreen from './assets/events/kampala-2026/speaker-screen.webp';
import speakerTalk from './assets/events/kampala-2026/speaker-talk.webp';
import summitShirt from './assets/events/kampala-2026/summit-shirt.webp';
import table from './assets/events/kampala-2026/table.webp';
import tableTalk from './assets/events/kampala-2026/table-talk.webp';
import talentPresents from './assets/events/kampala-2026/talent-presents.webp';
import talentSpeaking from './assets/events/kampala-2026/talent-speaking.webp';
import talentsBanner from './assets/events/kampala-2026/talents-banner.webp';
import tea from './assets/events/kampala-2026/tea.webp';
import team from './assets/events/kampala-2026/team.webp';
import trio from './assets/events/kampala-2026/trio.webp';
import venue from './assets/events/kampala-2026/venue.webp';
import wave from './assets/events/kampala-2026/wave.webp';
import welcome from './assets/events/kampala-2026/welcome.webp';
import wheelCrew from './assets/events/kampala-2026/wheel-crew.webp';
import { GROUNDBREAKER } from './site';

export type EventPhoto = {
  src: StaticImageData;
  alt: string;
};

export type PhotoChapter = {
  id: string;
  title: string;
  time: string;
  photos: EventPhoto[];
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
  award: {
    src: award,
    alt: 'A team member holds up a glass award on stage.',
  },
  banner: {
    src: banner,
    alt: 'The ODE Community Days roll-up banner: Kampala 2026, 16 September, National ICT Innovation Hub.',
  },
  bannerCrew: {
    src: bannerCrew,
    alt: 'Participants line up for a photo in front of the ODE banner.',
  },
  buffetOutside: {
    src: buffetOutside,
    alt: 'The lunch line on the terrace, with green lawns behind.',
  },
  certificate: {
    src: certificate,
    alt: 'A participant holds up her certificate between two facilitators.',
  },
  certificatePattern: {
    src: certificatePattern,
    alt: 'A participant in a patterned top receives her certificate.',
  },
  certificateSmile: {
    src: certificateSmile,
    alt: 'Another certificate, another proud smile.',
  },
  certificateWhite: {
    src: certificateWhite,
    alt: 'A participant in white holds up her certificate.',
  },
  closingWords: {
    src: closingWords,
    alt: 'Closing words from the podium.',
  },
  coffee: {
    src: coffee,
    alt: 'A participant grabs a coffee on the terrace.',
  },
  firstHellos: {
    src: firstHellos,
    alt: 'Participants laugh together over a phone as the day begins.',
  },
  fullRoom: {
    src: fullRoom,
    alt: 'The full room listening to a talk, with the slides on screen.',
  },
  groupGuest: {
    src: groupGuest,
    alt: 'Participants gather around a guest for a photo.',
  },
  groupLaughs: {
    src: groupLaughs,
    alt: 'A group breaks into laughter mid-photo.',
  },
  groupOutside: {
    src: groupOutside,
    alt: 'Everyone who took part, together outside the National ICT Innovation Hub in Kampala.',
  },
  guestSpeaker: {
    src: guestSpeaker,
    alt: 'A guest speaker addresses the room.',
  },
  hallReady: {
    src: hallReady,
    alt: 'The hall set up and waiting before the first arrivals.',
  },
  handsOn: {
    src: handsOn,
    alt: 'Three participants explore ODE together on a shared laptop.',
  },
  joy: {
    src: joy,
    alt: 'A participant throws her arms wide in front of a colourful prize wheel.',
  },
  labCircle: {
    src: labCircle,
    alt: 'A group gathers around a facilitator to try an exercise.',
  },
  labGuide: {
    src: labGuide,
    alt: 'A facilitator in an ODE t-shirt checks in on a group.',
  },
  labSmiles: {
    src: labSmiles,
    alt: 'Participants smile at their table between exercises.',
  },
  laptopFocus: {
    src: laptopFocus,
    alt: 'Participants lean in over a sticker-covered laptop.',
  },
  laptops: {
    src: laptops,
    alt: 'Participants at their laptops, one smiling with a peace sign.',
  },
  listening: {
    src: listening,
    alt: 'Participants listen closely during a session.',
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
  odeTee: {
    src: odeTee,
    alt: 'A team member in the Open Data Ensemble giraffe t-shirt.',
  },
  paintedWall: {
    src: paintedWall,
    alt: 'Three facilitators compare notes by a painted wall.',
  },
  peaceSign: {
    src: peaceSign,
    alt: 'A speaker flashes a peace sign mid-talk.',
  },
  phoneCheck: {
    src: phoneCheck,
    alt: 'Two participants check something on a phone together.',
  },
  phonesCloseup: {
    src: phonesCloseup,
    alt: 'Participants work through an exercise together at a laptop.',
  },
  phonesCrowd: {
    src: phonesCrowd,
    alt: 'A crowd of participants leans in over their phones.',
  },
  portraitGold: {
    src: portraitGold,
    alt: 'A participant smiles beside the Kampala 2026 banner.',
  },
  portraitGreen: {
    src: portraitGreen,
    alt: 'A participant poses, hands on hips, by the ODE banner.',
  },
  presentingGroup: {
    src: presentingGroup,
    alt: 'A team presents its group work from the podium.',
  },
  programme: {
    src: programme,
    alt: 'A facilitator walks the room through the programme for the day.',
  },
  registration: {
    src: registration,
    alt: 'Participants sign in at the registration table.',
  },
  speakerGold: {
    src: speakerGold,
    alt: 'A speaker in a gold polo talks the room through an idea.',
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
  tableTalk: {
    src: tableTalk,
    alt: 'Two participants share a laugh at the table during a break.',
  },
  talentPresents: {
    src: talentPresents,
    alt: 'A participant presents her team’s work from the podium.',
  },
  talentSpeaking: {
    src: talentSpeaking,
    alt: 'A participant speaks to the room with a microphone.',
  },
  talentsBanner: {
    src: talentsBanner,
    alt: 'Four participants pose in front of the ODE Community Days banner.',
  },
  tea: {
    src: tea,
    alt: 'Participants relax with a hot drink.',
  },
  team: {
    src: team,
    alt: 'Facilitators and team members pose together indoors.',
  },
  trio: {
    src: trio,
    alt: 'Three team members share a laugh beside the Ugandan flag.',
  },
  venue: {
    src: venue,
    alt: 'The whole group outside the National ICT Innovation Hub, between two ODE banners.',
  },
  wave: {
    src: wave,
    alt: 'A participant waves in front of the ODE banner.',
  },
  welcome: {
    src: welcome,
    alt: 'A facilitator welcomes a guest with a laugh.',
  },
  wheelCrew: {
    src: wheelCrew,
    alt: 'Five participants pose in front of the prize wheel.',
  },
} satisfies Record<string, EventPhoto>;

const p = kampalaPhotos;

export const kampalaChapters: PhotoChapter[] = [
  {
    id: 'arrivals',
    title: 'Arrivals',
    time: 'Morning',
    photos: [
      p.hallReady,
      p.banner,
      p.registration,
      p.firstHellos,
      p.welcome,
      p.phoneCheck,
    ],
  },
  {
    id: 'lab',
    title: 'The ODE Lab',
    time: 'Hands-on',
    photos: [
      p.handsOn,
      p.mentorPhones,
      p.phonesCrowd,
      p.table,
      p.labCircle,
      p.laptops,
      p.mentorCloseup,
      p.laptopFocus,
      p.labSmiles,
      p.phonesCloseup,
      p.labGuide,
      p.paintedWall,
    ],
  },
  {
    id: 'stage',
    title: 'On stage',
    time: 'Talks',
    photos: [
      p.programme,
      p.fullRoom,
      p.guestSpeaker,
      p.speakerScreen,
      p.talentSpeaking,
      p.speakerGold,
      p.presentingGroup,
      p.talentPresents,
      p.speakerTalk,
      p.peaceSign,
    ],
  },
  {
    id: 'breaks',
    title: 'Breaks',
    time: 'Lunch',
    photos: [p.lunch, p.buffetOutside, p.tableTalk, p.tea, p.coffee],
  },
  {
    id: 'faces',
    title: 'Faces',
    time: 'All day',
    photos: [
      p.joy,
      p.talentsBanner,
      p.summitShirt,
      p.wave,
      p.odeTee,
      p.portraitGreen,
      p.portraitGold,
      p.listening,
    ],
  },
  {
    id: 'together',
    title: 'Together',
    time: 'Group photos',
    photos: [
      p.groupOutside,
      p.venue,
      p.groupLaughs,
      p.bannerCrew,
      p.groupGuest,
      p.wheelCrew,
      p.team,
      p.trio,
    ],
  },
  {
    id: 'certificates',
    title: 'Certificates',
    time: 'Closing',
    photos: [
      p.certificate,
      p.certificateWhite,
      p.certificateSmile,
      p.certificatePattern,
      p.award,
      p.closingWords,
    ],
  },
];

export const kampalaPhotoCount = kampalaChapters.reduce(
  (total, chapter) => total + chapter.photos.length,
  0,
);

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
  highlights: [
    kampalaPhotos.joy,
    kampalaPhotos.handsOn,
    kampalaPhotos.certificate,
  ],
};

export const events: CommunityEvent[] = [kampala2026];
