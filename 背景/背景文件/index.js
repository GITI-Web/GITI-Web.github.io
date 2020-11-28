new Vue({
  el: '#app',
  data: {
    width: 0, height: 0,
    cx: 0, cy: 0,
    blur: 20,
    alphaMult: 18,
    alphaAdd: -7,
    randomColors: true,
    numElements: 100,
    elements: [] },

  mounted: function mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);

    var gui = new dat.GUI();
    gui.add(this, 'blur', 1, 50, 1);
    gui.add(this, 'alphaMult', 0, 50);
    gui.add(this, 'alphaAdd', -10, -1);
    gui.add(this, 'randomColors');
    gui.add(this, 'numElements', 20, 500, 10);
    gui.close();

    this.shuffle();
  },
  watch: {
    randomColors: function randomColors() {
      this.shuffle();
    },
    numElements: function numElements() {
      this.shuffle();
    } },

  computed: {
    transform: function transform() {
      return this.translate(this.cx, this.cy);
    } },

  methods: {
    shuffle: function shuffle() {
      var elements = [];
      var fill = randomColor({ luminosity: 'light', format: 'rgb' });
      for (var i = 0; i < this.numElements; i++) {
        if (this.randomColors)
        fill = randomColor({ luminosity: 'light', format: 'rgb' });
        var e = {
          x: rnd(this.cx, true),
          y: 0,
          r: 20 + rnd(20),
          fill: fill,
          delay: rnd(10, true),
          duration: 4 + rnd(3) };

        elements.push(e);
      }
      this.elements = elements;
    },
    onResize: function onResize() {
      var r = this.$refs.svg.getBoundingClientRect();
      this.width = r.width;
      this.height = r.height;
      this.cx = r.width / 2;
      this.cy = r.height / 2;
    },
    estyle: function estyle(e) {
      return {
        fill: e.fill,
        'animation-delay': e.delay + 's',
        'animation-duration': e.duration + 's' };

    },
    translate: function translate(x, y) {
      return 'translate(' + x + ', ' + y + ')';
    } } });



function rnd(max, negative) {
  return negative ? Math.random() * 2 * max - max : Math.random() * max;
}