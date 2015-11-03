'use strict';


$(document).ready(init);

var totalContacts = localStorage.totalContacts ? JSON.parse(localStorage.totalContacts) : [];
 updateList();


function init() {
  $('#add').click(addContact);
  $('#list').on('click', 'input', addContact);
}

function saveLocalStorage() {
  localStorage.totalContact = JSON.stringify(totalContacts)
}

function addContact() {
  var  collectName = $("#contactName").val();
  var  collectPhone = $("#contactPhone").val();
  var  collectEmail = $("#contactPhone").val();
  var  collectAddress = $("#contactPhone").val();

  var totalContact = {
    collectName: collectName,
    collectPhone: collectPhone,
    collectEmail: collectEmail,
    collectAddress: collectAddress,
  };
  totalContacts.push(totalContact);

updateList();
  saveLocalStorage();
}
function updateList() {
  $('#list').empty();

  if(totalContacts.length){
    $('table.table').show();
  } else {
    $('table.table').hide();
  }

  var totalContactElements = totalContacts.map(function(totalContact) {
    var $tr = $('#sample').clone();
    $tr.removeAttr('id');
    $tr.children(".contactName").text(totalContact.collectName);
    $tr.children(".contactPhone").text(totalContact.collectPhone);
    $tr.children(".contactEmail").text(totalContact.collectEmail);
    $tr.children(".contactAddress").text(totalContact.collectAddress);
    $tr.show();
    return $tr;
    console.log(totalContactElements);
  });




  $('#list').append(totalContactElements);

  }















  // var $tr = $('<tr>');
  //
  // var $complete = $('<td>');
  // var $checkbox = $('<input>').attr('type', 'checkbox');
  //
  //
  // $complete.append($checkbox);
  //
  // // var uncheckBox =$('checkbox').change(addTodo(){
  //   $('type').change
  //
  //
  // var $description = $('<td>').text(description);
  // var $date = $('<td>').text(date);
  //
  // $tr.append([$complete, $description, $date]);
  //
  // $('#list').append($tr);

// }
