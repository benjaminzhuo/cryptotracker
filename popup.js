
$(function(){



    var url = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';
    fetch(url)
    .then(res => res.json())
    .then((out) => {
    console.log('Checkout this JSON! ', out);
    $('#btc').text('$'+ out[0].price_usd);
    }).catch(err => { throw err });

    

    url = 'https://api.coinmarketcap.com/v1/ticker/ethereum/';
    fetch(url)
    .then(res => res.json())
    .then((out) => {
    console.log('Checkout this JSON! ', out);
    $('#eth').text('$'+ out[0].price_usd);
    }).catch(err => { throw err });

     url = 'https://api.coinmarketcap.com/v1/ticker/ripple/';
    fetch(url)
    .then(res => res.json())
    .then((out) => {
    console.log('Checkout this JSON! ', out);
    $('#xrp').text('$'+ out[0].price_usd);
    }).catch(err => { throw err });

     url = 'https://api.coinmarketcap.com/v1/ticker/icon/';
    fetch(url)
    .then(res => res.json())
    .then((out) => {
    console.log('Checkout this JSON! ', out);
    $('#icx').text('$'+ out[0].price_usd);
    }).catch(err => { throw err });

     url = 'https://api.coinmarketcap.com/v1/ticker/basic-attention-token/';
    fetch(url)
    .then(res => res.json())
    .then((out) => {
    console.log('Checkout this JSON! ', out);
    $('#bat').text('$'+ out[0].price_usd);
    }).catch(err => { throw err });

     url = 'https://api.coinmarketcap.com/v1/ticker/chainlink/';
    fetch(url)
    .then(res => res.json())
    .then((out) => {
    console.log('Checkout this JSON! ', out);
    $('#link').text('$'+ out[0].price_usd);
    }).catch(err => { throw err });

   
  setTimeout(function(){
   window.location.reload(1);
   window.location = window.location.href;
    }, 5000);




            //$('#btc').text('sdfsdf');
           // $('#amount').val('');
  




});