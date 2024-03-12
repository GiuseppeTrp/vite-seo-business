import { reactive } from 'vue';

export const store = reactive({
  menuItems: [
    { text: 'Home' },
    { text: 'Who we are' },
    { text: 'What we do' },
    { text: 'Where we work' },
    { text: 'Careers' },
    { text: 'News' }
  ],
  contHero: {
    title1: "SEM Campagins Made",
    title2: "Simple With Avada",
    parag: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Phasellus eu ornare erat.Curabitur pulvinar elit.",
    button1: " Buy avada now",
    button2: "Contact us"
  },

  jumboCards: [
    {
      icon: "fa fa-solid fa-road fa-lg",
      title: "Establish Goals",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "fa fa-solid fa-video fa-lg",
      title: "Work With a Team",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "fa fa-solid fa-droplet fa-lg",
      title: "Get Result",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }
  ],

  mainCards: [
    {
      icon: "fa fa-brands fa-google fa-lg",
      title: "Google SEO",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "fa fa-solid fa-gear fa-lg",
      title: "Brand Strategy",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "fa fa-solid fa-building fa-lg",
      title: "Local SEO",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "fa fa-solid fa-droplet fa-lg",
      title: "SEO Analysis",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }
  ],

  OurWorkCards: [
    { img: "../assets/img/logo_seo_w_1x.png" },
    { img: "../assets/img/logo_seo_w_1x.png" },
    { img: "../assets/img/logo_seo_w_1x.png" },
    { img: "../assets/img/logo_seo_w_1x.png" },
    { img: "../assets/img/logo_seo_w_1x.png" },
    { img: "../assets/img/logo_seo_w_1x.png" }
  ],


  OurPlansCards: [
    { plane: "Standard",
      price: "icon",
      project: "5 Projects",
      storage: "5 GB Storage",
      users: "Unlimited Users"
    },
    {
      plane: "Premium",
      price: "icon",
      project: "10 Projects",
      storage: "15 GB Storage",
      users: "Unlimited Users"
    },
    {
      plane: "Professional",
      price: "icon",
      project: "15 Projects",
      storage: "30 GB Storage",
      users: "Unlimited Users"
    },
    {
      plane: "Extreme",
      price: "icon",
      project: "Unlimited Projects",
      storage: "Unlimited Storage",
      users: "Unlimited Users"
    }
  ],

});
