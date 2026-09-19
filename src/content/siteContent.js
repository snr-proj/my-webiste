// ============================================================================
// siteContent.js
//
// THIS IS THE ONLY FILE YOU SHOULD NEED TO EDIT TO UPDATE TEXT OR IMAGES.
//
// - To change an image: replace the file in /public/images/ (keep the same
//   file name, or update the path here) and, ideally, keep similar
//   dimensions so layouts don't shift.
// - To change text: edit the strings below.
// - To add a gallery photo: add a new { image, alt } object to the relevant
//   array (see "gallery.items" for the simplest example).
//
// Every image path is relative to /public, e.g. "/images/hero-media.jpg"
// maps to the file at public/images/hero-media.jpg.
// ============================================================================

export const siteContent = {
  meta: {
    siteName: "Ivar Delos Santos",
    navLabels: {
      about: "About",
      work: "Work",
      films: "Films",
      experience: "Experience",
      contact: "Contact",
    },
  },

  hero: {
    image: "/images/hero-media.jpg",
    imageAlt: "Ivar Delos Santos filming a live event with a video camera on a tripod",
    name: "Ivar Delos Santos",
    title: "Photographer & Videographer",
    ctaLabel: "View My Work",
    ctaTarget: "#work",
  },

  gallery: {
    kicker: "2019 — 2024",
    title: "Photographs",
    subtitle: "by Delos Santos",
    items: [
      {
        image: "/images/gallery-boats.jpg",
        alt: "Traditional outrigger boats moored on a calm river",
      },
      {
        image: "/images/gallery-rings.jpg",
        alt: "Close-up of a couple holding hands, one wearing a floral corsage",
      },
      {
        image: "/images/gallery-camera.jpg",
        alt: "Vintage film camera lens with a wristwatch in soft studio light",
      },
      {
        image: "/images/gallery-kids.jpg",
        alt: "Two young children posing together outdoors",
      },
    ],
  },

  about: {
    number: "001",
    kicker: "About Me",
    title: "About Me",
    paragraph:
      "I'm Ivar G. Delos Santos, a BA Communication graduate with a passion for storytelling through photography. Since discovering my love for the craft early in life, I've been drawn to capturing meaningful moments—slowing down, observing details, and telling visual stories that last a lifetime. During my internship as a Production Assistant, I gained hands-on experience in assisting on set, creating shot lists, and contributing to social media content, further deepening my understanding of the media industry and sharpening my creative eye.",
    image: "/images/about-photographer.jpg",
    imageAlt: "Ivar Delos Santos operating a broadcast camera from behind",
  },

  filmRolls: {
    number: "002",
    title: "Film Rolls",
    intro:
      "With my film camera, I derive great pleasure from capturing photographs because it motivates me to seize unique moments in life, each shot being a once-in-a-lifetime opportunity. It evokes a sense of nostalgia, transporting me back in time.",
    outro:
      "I primarily use the Yashica Electro 35 as my main camera, and I also experiment with various types of film rolls such as Kentmere 35mm negative, Kodak Gold colored, and Vibe negative film rolls.",
    items: [
      { image: "/images/film-cityhall.jpg", alt: "Malolos City Hall building, black and white film photo" },
      { image: "/images/film-jeepney.jpg", alt: "Jeepney destination signs seen through a windshield, black and white" },
      { image: "/images/film-sax.jpg", alt: "A saxophonist performing at a mall during the holidays" },
    ],
  },

  freelance: {
    number: "003",
    title: "Freelance Photography",
    items: [
      { image: "/images/freelance-ironman.jpg", alt: "Detailed handmade Iron Man cosplay armor" },
      { image: "/images/freelance-hoodie.jpg", alt: "Portrait of a man in a black hoodie in front of green hills" },
      { image: "/images/freelance-beach.jpg", alt: "Couple walking hand in hand along a dark sand beach" },
      { image: "/images/freelance-portrait.jpg", alt: "Portrait of a smiling man in an orange shirt at night" },
    ],
  },

  wedding: {
    number: "004",
    quote:
      "In my freelance journey, I typically specialize in prenuptial photos, wedding events, and travel photography.",
    items: [
      { image: "/images/wedding-hands.jpg", alt: "Close-up of a couple's hands with wedding rings" },
      { image: "/images/wedding-ring-book.jpg", alt: "Wedding ring resting on an open Bible" },
      { image: "/images/wedding-invites.jpg", alt: "Wedding rings, Bible, and invitations arranged on a table" },
    ],
  },

  schoolEvents: {
    number: "005",
    title: "School Events",
    items: [
      {
        image: "/images/school-treeplanting.jpg",
        alt: "Students planting a tree together",
        caption: "Tree Planting",
        location: "Balayong Elementary School",
      },
      {
        image: "/images/school-paskong.jpg",
        alt: "A father carrying his son on his shoulders wearing a Santa hat",
        caption: "Paskong Pampamilya",
        location: "STI College Malolos",
      },
      {
        image: "/images/school-broadway.jpg",
        alt: "A woman in a glamorous red gown posing in colorful stage smoke",
        caption: "Broadway Soireé",
        location: "Lian Gwen Pavillion",
      },
    ],
  },

  films: {
    sectionTitle: "Films",
    items: [
      {
        number: "006",
        title: "\u201cBuboy\u201d",
        subtitle: "SINE BULACAN X - Finalist",
        description:
          "This is my first time joining a film fest as a Videographer, with the help of my seniors I am excited to have the opportunity to showcase my skills and learn from experienced professionals in the industry. Their guidance and support will undoubtedly enhance my journey as a videographer and make this film festival experience even more memorable. However, due to the pandemic, this film was not able to be finished, but it became our inspiration to not let it stop us from creating more.",
        image: "/images/film-buboy-finalists.jpg",
        imageAlt: "Sine Bulacan X finalists announcement graphic featuring the film Buboy",
      },
      {
        number: "007",
        title: "\u201cDito\u201d",
        subtitle: "SINE BULACAN XI - Finalist",
        description:
          "As I embark on my second film festival experience, this time as a Cinematographer, I reflect on the valuable lessons I learned from my previous experience. Collaborating with the production team, sharing ideas, and engaging in discussions on the creative vision of the film can be both challenging and enlightening. These experiences not only enhance my skills as a camera operator but also provide me with a wealth of knowledge that I can apply in the professional industry.",
        image: "/images/film-dito.jpg",
        imageAlt: "Still from the short film Dito showing a man walking down a residential street",
      },
      {
        number: "008",
        title: "\u201cA Christmas Confession\u201d",
        subtitle: "Christmas Special of iKonek Media Org",
        description:
          "This video special was my first time serving as a Director of Photography (DOP), and it provided me with a valuable opportunity to learn and grow alongside my team. Collaborating on this project allowed me to identify areas in need of improvement and further honed my skills. I thoroughly enjoyed the process of creating this project, as it allowed me to express my creativity and passion for cinematography.",
        image: "/images/film-christmas-confession.jpg",
        imageAlt: "Still frame from the short film A Christmas Confession showing two people talking",
      },
    ],
  },

  advertisements: {
    sectionTitle: "Advertisement",
    items: [
      {
        number: "009",
        title: "Grail",
        subtitle: "Task performance in Comm Theory",
        description:
          "This project was part of our task performance for our Communication Theory course. I truly enjoyed collaborating with my blockmate, taking on the roles of both videographer and actor. Interestingly, this advertisement was shot spontaneously—with no detailed planning beforehand—making the creative process even more exciting and rewarding.",
        image: "/images/ad-grail.jpg",
        imageAlt: "Silhouette of trees at dusk with a glowing moth graphic for the Grail advertisement",
      },
      {
        number: "010",
        title: "Advertisement Video for Hiromitsu Malolos Branch",
        subtitle: null,
        description:
          "This advertisement video marks our debut in creating this particular style of video, and I have thoroughly enjoyed the creative process as it has allowed me to delve into various forms of cinematography. It has been a rewarding experience to experiment with different techniques and approaches, and I look forward to expanding my skills further in future projects.",
        image: "/images/ad-hiromitsu.jpg",
        imageAlt: "Japanese food platter with Hiromitsu Restaurant Malolos Branch logo overlay",
      },
    ],
  },

  internship: {
    number: "011",
    title: "Internship",
    items: [
      { image: "/images/internship-renatos.jpg", alt: "Group photo at Renato's Place rest bar & events place", caption: "\u201cRenato's Place rest bar & events place\u201d" },
      { image: "/images/internship-cyclist.jpg", alt: "Interview setup for The Taktak food tour featuring cyclist advocates", caption: "\u201cThe Taktak food tour ft. Cyclist advocates\u201d" },
      { image: "/images/internship-balawbalaw.jpg", alt: "Behind the scenes photo shoot at Balaw Balaw Resto", caption: "\u201cBalaw Balaw Resto\u201d" },
    ],
    itemsSecondary: [
      { image: "/images/internship-abct.jpg", alt: "Filming unlimited sushi food content at ABCT Japanese Restaurant", caption: "ABCT Japanese Restaurant / Unlimited Sushi Food content" },
      { image: "/images/internship-hillhouse.jpg", alt: "Group dining at Hill House for a rebranding shoot", caption: "Hill House Dining (Rebranding)" },
      { image: "/images/internship-ucb.jpg", alt: "UCB food showcase featuring new products and best sellers", caption: "UCB Food Showcase ft. new products n Best Sellers" },
    ],
    number2: "012",
  },

  reflection: {
    number: "013",
    title: "Assessment of the OJT/Practicum Program",
    paragraphs: [
      "My internship at When in Rizal offered valuable hands-on experience in production, content creation, and event coverage. I was able to explore different roles beyond my initial assignment, from setting up shoots and handling equipment to assisting with hosting. The flexibility of the program allowed me to manage my schedule while gaining practical exposure to real-world media work.",
      "Throughout the internship, I also had the opportunity to collaborate with professionals and engage with clients, which helped improve my communication, critical thinking, and adaptability. While the experience was immersive, structured training in areas like production techniques and hosting could further enhance the learning process. Overall, the internship helped me grow both personally and professionally, giving me a clearer perspective on the media industry.",
    ],
  },

  experience: {
    number: "014",
    backgroundImage: "/images/experience-bg.jpg",
    backgroundImageAlt: "Textured black and white background of a vintage camera and wristwatch",
    experienceTitle: "Experience",
    experienceItems: [
      { role: "LoStudios - (2022 – Present)", detail: "Event Photographer" },
      { role: "Sine Bulacan XI Finalist – \u201cDito\u201d (2023)", detail: "Assistant Camera Operator" },
      { role: "IKONEK Multimedia Organization (2022 – 2023)", detail: "Department Head of Photography and Documentation" },
      { role: "Media Week Photography Contest Champion – STI College Malolos (2022)", detail: null },
      { role: "Information and Graphic Officer – Central Student Government (2021 – 2022)", detail: null },
      { role: "Sine Bulacan X Finalist – \u201cBuboy\u201d (2020)", detail: null },
      { role: "When in Rizal - Intern", detail: "Production assistant, Host, Set designer" },
    ],
    educationTitle: "Education",
    educationItems: [
      {
        degree: "Bachelor of Arts in Communication",
        school: "STI College Malolos",
        location: "City of Malolos, Bulacan",
        years: "S.Y 2021 - 2025",
      },
    ],
    softwareTitle: "Software",
    software: [
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe Lightroom",
      "Adobe Illustrator",
      "CapCut",
      "Canva",
      "Microsoft Office softwares",
    ],
  },

  contact: {
    number: "015",
    title: "Contact Me",
    addressLabel: "Address",
    address: "0015 Malanggam, Bulihan, Malolos, Bulacan",
    phoneLabel: "Phone",
    phone: "+63 977 031 7864",
    emailLabel: "Email",
    email: "ivardelsan@gmail.com",
  },

  footer: {
    text: "Ivar Delos Santos",
  },
};

export default siteContent;
