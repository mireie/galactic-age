import { GalacticAge } from './js/galaCalc.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#age-submit').click(function () {
  const age = $('#age').val();
  const expectancy = $('#expectancy').val()
  let input = new GalacticAge(age, expectancy);
});