var MOVEMENT = MOVEMENT || {};

MOVEMENT.donations = MOVEMENT.donations || {};

MOVEMENT.donations.initInterstitial = function () {
  var interstitial = $("#return-from-paypal-interstitial");
  if (interstitial.length) {
    $(".interstitial-no-js").hide();
    $(".interstitial").show();
    $(".interstitial").removeClass("hidden");
    $("#complete_paypal_donation_form").submit();  
  }
};

MOVEMENT.donations.disableAmexIfCurrencyIsNotUSD = function (donationForm) {
  if (!$(donationForm).length) { return; }

  var currencySelect = donationForm.find('#action_info_currency');

  currencySelect.change(function () {
    var cardSelect = donationForm.find('#action_info_card_type');
    var amexOption = cardSelect.find('option[value="american_express"]');
    selectedCurrencyOption = currencySelect.find('option:selected');

    if (selectedCurrencyOption.val() == 'usd') {
      amexOption.removeAttr('disabled');
    } else {
      amexOption.attr('disabled', 'disabled');
    }

    cardSelect.selectBox('refresh');
  });

  currencySelect.change();
};

$(function () {
  MOVEMENT.donations.initInterstitial();
  MOVEMENT.donations.disableAmexIfCurrencyIsNotUSD($('#donation_module').find('#action_form'));
});