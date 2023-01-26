let interest_rate = 10
let months = 96
let interest
let total,amount,payment
let currency = 'CZK'
let permonth 

document.querySelector('.loan-months').innerText = 96


function updateloan(){
  //  console.log( (amount / permonth).toFixed(1) )   
  interest = (amount * (interest_rate * 0.01)) ;
  console.log(interest)

  
 payment = ((amount / months) + interest).toFixed(4); 
    
 document.querySelector('.total-loan-data').innerText =  payment

          document.querySelector('.loan-months').innerText = 96
  
  
}


document.querySelector('.slider1-range').addEventListener('input', (e) =>{
   amount = e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
   document.querySelector('.loan-amount').innerHTML = e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
   + ' ' + currency


amount = e.target.value

updateloan()

})


document.querySelector('.slider2-range').addEventListener('input', (e) =>{
 
   document.querySelector('.payment-per-month-data').innerHTML = currency + ' ' + e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
 
//  permonth = e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//  document.querySelector('.loan-amount').innerText = currency + ' ' + e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 

 //   updateloan()
 
 
 })
 
