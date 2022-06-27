const app = Vue.createApp({
  data() {
    return {
      holes: [
        {
          id: 1,
          moleImage: './assets/mole.png',
          active: false,
        },
        {
          id: 2,
          moleImage: './assets/mole.png',
          active: false,
        },
        {
          id: 3,
          moleImage: './assets/mole.png',
          active: false,
        },
        {
          id: 4,
          moleImage: './assets/mole.png',
          active: false,
        },
        {
          id: 5,
          moleImage: './assets/mole.png',
          active: false,
        },
        {
          id: 6,
          moleImage: './assets/mole.png',
          active: false,
        },
        {
          id: 7,
          moleImage: './assets/mole.png',
          active: false,
        },
        {
          id: 8,
          moleImage: './assets/mole.png',
          active: false,
        },
        {
          id: 9,
          moleImage: './assets/mole.png',
          active: false,
        },
      ],
    };
  },
  methods: {
    randomize(holes) {
      const i = Math.floor(Math.random() * holes.length);

      timer = setTimeout(() => {
        holes[i].active = true;
        run();
      }, 1500);
    },
  },
});
