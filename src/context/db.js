import slide1 from "../media/slide-1.jpg";
import slide2 from "../media/slide-2.jpeg";

// conversation
import default_user from "../media/default-user.png";

export const articles = [
  {
    id: "art1",
    title: "Elections have consequences",
    slides: [
      {
        text:
          "You have the power to decide on the quality of life you want for yourself and your community, and even future generations.",
        illustration:
          "https://thumbs.dreamstime.com/b/cartoon-people-putting-voting-paper-ballot-box-design-65975661.jpg",
      },
      {
        text:
          "Voting is your chance to stand up for the issues you care about.",
        illustration:
          "https://i.guim.co.uk/img/media/1dc448e046e481a4232d701dd88b61dc21f0162a/0_0_4383_2630/master/4383.jpg?width=1900&quality=85&fit=max&s=e1e0110e997508542d28feb3160b3e7d",
      },
    ],
    official_source: "http://dfddsdsd",
    supporting_source: {
      name: `news24`,
      headline: `ANC North West conference: Alliance partners encourage unity, 'not these unsustainable divisions'`,
      article: `The ANC's alliance partners, Cosatu and the South African National Civic Organisation, have warned that it's unstainable to have seven different slates within the party vie for power, adding that it's a clear indication of serious divisions.`,
      category: `Political`,
      language: "en",
    },
  },
  {
    id: "art2",
    title: "It's your money",
    slides: [
      {
        text:
          "You pay taxes (even when you just buy a loaf of bread), but do you know how that money is being spent?",
        illustration: slide1,
      },
      {
        text:
          "Most people don't. Voting is your chance to choose how your taxes are spent",
        illustration: slide2,
      },
    ],
    official_source: "http://dfddsdsd",
    supporting_source: {
      name: `news24`,
      headline: `ANC North West conference: Alliance partners encourage unity, 'not these unsustainable divisions'`,
      article: `The ANC's alliance partners, Cosatu and the South African National Civic Organisation, have warned that it's unstainable to have seven different slates within the party vie for power, adding that it's a clear indication of serious divisions.`,
      category: `Political`,
      language: "en",
    },
  },
  {
    id: "art2",
    title: "Our generation knows best",
    slides: [
      {
        text:
          "Technology and connectivity means that our generation is probably the best informed and equipped to vote",
        illustration:
          "https://issafrica.s3.amazonaws.com/site/images/banners/mono193-banner.jpg",
      },
      {
        text:
          "Social media and the internet is giving us access to information which previous generations of voters didn't have",
        illustration:
          "https://ichef.bbci.co.uk/news/624/mcs/media/images/74711000/jpg/_74711916_022174447-1.jpg",
      },
      {
        text:
          "You are becoming the experts ahead of your parents and grandparents.",
        illustration:
          "https://i.guim.co.uk/img/media/05a0b0f7699a153ed74749775ac8f5b712ce5166/0_32_2239_1343/master/2239.jpg?width=620&quality=85&fit=max&s=698134853617947f7d7da1bb70496fa7",
      },
      {
        text:
          "Use that expertise to make sure our country heads in the right direction!",
        illustration:
          "https://thumbs.dreamstime.com/z/voting-online-concept-black-people-hand-press-confirm-button-vote-via-mobile-smart-phone-electronic-voting-election-voting-145853433.jpg",
      },
    ],
    official_source: "http://dfddsdsd",
    supporting_source: {
      name: `news24`,
      headline: `ANC North West conference: Alliance partners encourage unity, 'not these unsustainable divisions'`,
      article: `The ANC's alliance partners, Cosatu and the South African National Civic Organisation, have warned that it's unstainable to have seven different slates within the party vie for power, adding that it's a clear indication of serious divisions.`,
      category: `Political`,
      language: "en",
    },
  },
];

export const coversations = [
  {
    id: "con1",
    article_id: "art1",
    comments: [
      {
        id: "comm1",
        username: "Louis Field",
        user_avatar: default_user,
        text: "How does my one vote make a difference?",
      },
      {
        id: "comm2",
        username: "Rod Wave",
        user_avatar: default_user,
        text:
          "It starts with one vote and then one more and then another, and so on...",
      },
    ],
  },
];
