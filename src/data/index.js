import {
  lcHeroDesktop,
  lcHeroDesktop2x,
  lcHeroMobile,
  lcHeroMobile2x,
  lcSafeDocs,
  lcSafeDocs2x,
  lcWorkRemote,
  lcWorkRemote2x,
  lcGreaterCollab,
  lcGreaterCollab2x,
  lcShareDocs,
  lcShareDocs2x,
  lcSignDocsDesktop,
  lcSignDocsMobile,
  lcSignDocsDesktop2x,
  lcSignDocsMobile2x,
} from "../shared/utils/images";

const data = {
  nav: {
    main: [
      { label: "For People", path: "/people" },
      { label: "For Businesses", path: "/business" },
      { label: "Contact", path: "/contact" },
    ],
    secondary: [
      { label: "Login", path: "/login" },
      { label: "Create Free Account", path: "/create-account", type: "cta" },
    ],
  },
  hero: {
    title: "The place to work with your lawyer",
    subtitle:
      "Your lawyer uses LawConnect to share information with you about your legal case in a privite, convenient and secure way.",
    ctaText: "Create Free Account",
    images: {
      desktop: [
        { size: "1x", image: lcHeroDesktop },
        { size: "2x", image: lcHeroDesktop2x },
      ],
      mobile: [
        { size: "1x", image: lcHeroMobile },
        { size: "2x", image: lcHeroMobile2x },
      ],
    },
  },

  feature: {
    title: "One Solution Designed to Make Your Firm More Money",
    features: [
      {
        title: "Safe Documents",
        desc: "LawConnect stores its data on servers provided by Amazon Web Services and is safer than email.",
        image: lcSafeDocs,
        images: [
          { size: "1x", image: lcSafeDocs },
          { size: "2x", image: lcSafeDocs2x },
        ],
      },
      {
        title: "Work remotely",
        desc: "You can sign in to LawConnect and view, collaborate and share your documents from anywhere..",
        image: lcWorkRemote,
        images: [
          { size: "1x", image: lcWorkRemote },
          { size: "2x", image: lcWorkRemote2x },
        ],
      },
      {
        title: "Greater Collaboration",
        desc: "Collaborate on documents with clients, lawyers and other parties with LawConnect’s Comment and Reply.",
        image: lcGreaterCollab,
        images: [
          { size: "1x", image: lcGreaterCollab },
          { size: "2x", image: lcGreaterCollab2x },
        ],
      },
    ],
  },
  docShare: {
    title: "Sharing Documents",
    desc1:
      "Your lawyer will share documents related to your case with you, via LawConnect.Each time a document is shared by your lawyer, you will receive an email notification so you can access the document.",
    desc2:
      "If you already have a LawConnect account, you can login and an alert will be in your notifications tab that a document has been shared.",
    image: lcShareDocs,
    images: [
      { size: "1x", image: lcShareDocs },
      { size: "2x", image: lcShareDocs2x },
    ],
  },
  docSign: {
    title: "Signing Documents Electronically",
    desc: "LawConnect integrates with DocuSign to provide our users with a quick, easy and secure way to sign importnt legal documents online.",
    images: {
      desktop: [
        { size: "1x", image: lcSignDocsDesktop },
        { size: "2x", image: lcSignDocsDesktop2x },
      ],
      mobile: [
        { size: "1x", image: lcSignDocsMobile },
        { size: "2x", image: lcSignDocsMobile2x },
      ],
    },
  },
};

export default data;
