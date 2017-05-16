import $ from 'jquery';

const setHeight = () => {
  //Using .last() because the last instance of app class will always be the Lists component
  if ($('html').height() < $('.app').last().height()) $('html').height($('.app').last().height());
  console.log('setting height');
  $('body').scrollTop(0);
}

export default setHeight;
