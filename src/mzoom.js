import mediumZoom from 'medium-zoom';

export function loadMZ(){

const piano = mediumZoom('#piano', {
    background: 'rgba(0, 0, 0, 0.5)',
    template: '#template-piano',
    container: '[data-zoom-piano]',
});

const adl = mediumZoom('#adl', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-adl',
  container: '[data-zoom-adl]',
});

const rehab = mediumZoom('#rehab', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-rehab',
  container: '[data-zoom-rehab]',
});

const surgery = mediumZoom('#surgery', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-surgery',
  container: '[data-zoom-surgery]',
});

const tsundere = mediumZoom('#tsundere', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-tsundere',
  container: '[data-zoom-tsundere]',
});

const cheki = mediumZoom('#cheki', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-cheki',
  container: '[data-zoom-cheki]',
});

const opencampus = mediumZoom('#opencampus', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-opencampus',
  container: '[data-zoom-opencampus]',
});

const italyintern = mediumZoom('#italyintern', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-italyintern',
  container: '[data-zoom-italyintern]',
});

const chulanaist = mediumZoom('#chulanaist', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-chulanaist',
  container: '[data-zoom-chulanaist]',
});

const conferences = mediumZoom('#conferences', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-conferences',
  container: '[data-zoom-conferences]',
});

const publications = mediumZoom('#publications', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-publications',
  container: '[data-zoom-publications]',
});

const hobbies = mediumZoom('#hobbies', {
  background: 'rgba(0, 0, 0, 0.5)',
  template: '#template-hobbies',
  container: '[data-zoom-hobbies]',
});

}