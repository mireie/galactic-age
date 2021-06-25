import { GalacticAge } from './js/galaCalc.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#age-submit').click(function () {
  const age = $('#age').val();
  const expectancy = $('#expectancy').val();
  let input = new GalacticAge(age, expectancy);
  let ages = [];
  let deaths = [];
  ages = input.getPlanetAges();
  deaths = input.yearsLeft();
  let deathSwapText = "";
  deathSwapText = input.deathSwap();
  $(".death-swap").text(deathSwapText);
  
  $(".no-input").hide();
  $(".output").show();
  $("#0age").text(ages[0]);
  $("#0remaining").text(deaths[0]);
  $("#1age").text(ages[1]);
  $("#1remaining").text(deaths[1]);
  $("#2age").text(ages[2]);
  $("#2remaining").text(deaths[2]);
  $("#3age").text(ages[3]);
  $("#3remaining").text(deaths[3]);
  $("#4age").text(ages[4]);
  $("#4remaining").text(deaths[4]);
  $("#5age").text(ages[5]);
  $("#5remaining").text(deaths[5]);
  $("#6age").text(ages[6]);
  $("#6remaining").text(deaths[6]);
  $("#7age").text(ages[7]);
  $("#7remaining").text(deaths[7]);
  $("#8age").text(ages[8]);
  $("#8remaining").text(deaths[8]);
});