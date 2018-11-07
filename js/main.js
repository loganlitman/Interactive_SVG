(() => {
      const databaserhino = document.querySelector('.rhino');
      
      function getData(){
              console.log(this);
              let targetURL = `includes/functions.php?rhino=${this.id}`; //whenever we click on a thumbnail, pass its id to the php query
              fetch (targetURL) // go get the data and bring it back! good doggy
              .then(res => res.json()) //turn the result into a plain JS object
              .then(data => {
                  console.log(data);
                  //run a function to parse our data
                  showData(data[0]);
              }) //lets see what we got
              .catch(function(error) {
                  console.log(error); //if anything broke, log it to the console
              });
  
              function showData(data) {
                  debugger;
                  //parse the DB info and put it where it needs to go
                  const { headline, copy } = data; //destructuring assignment => MDN JS destructuring
                  document.querySelector('.headline_1').textContent = headline;
                  document.querySelector('.copy_1').textContent = copy;
              }
          };
  
databaserhino.addEventListener("click", getData);
      
      })();