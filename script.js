function addComment() {
    const commentInput = document.getElementById('commentInput');
    const comments = document.getElementById('comments');
    const newComment = document.createElement('p');
    newComment.textContent = commentInput.value;
    comments.appendChild(newComment);
    commentInput.value = '';
}

const sidebarHTML = `
    <div class="sidebar">
        <img src="imgs/ProfilePhoto.jpeg" alt=" profile">
        <h3>Welcome to You Cook!</h3>
        <p> The joy of cooking 
 for my family and friends never ends. 
 This site is my way of extending the joy 
 I have had experiences with all the people I have met in terms of body
 and spirit. Please comment on my recipes
 so everyone can enjoy cooking and eating together.</p><br>
    </div>
    <ul class="navigation">
   <p>  Ratatoullie</p>
    <a href="_blank"><img src= "imgs/Ratatoli.jpeg" alt="Ratatoulie"></a></P><br>
    <p> Stuffed Peppers</p>
    <a href="_blank" ><img src= "imgs/Stuffed Peppers.jpeg" alt="Ratatoulie"></a></P><br>
    <p>  Cupcakes </p>
    <a href="_blank"><img src="imgs/CupCake.jpg" alt="Chocolate Cake"></a></P><br>   
          
    <a href="order.html" style="font-size: 1em">Order our Brand of Spices</a>
    <a href="_blank"><img src="imgs/Spices.jpg" alt="Chocolate Cake"></a></P><br>
        
    </ul>
`;
const headerHTML = `
    <div>
     <header>
        <nav>
           <button >  <a href="home.html">Home</button></a>
            <button>  <a href="Recipe.html" >Recipe</button></a>
           <button>  <a href="contact.html"> Contact</button></a>
           <button>  <a href="order.html"> Order Products </button></a>
        </nav>
    </header>
    </div>
`;

    document.getElementById('sidebar').innerHTML = sidebarHTML;
    document.getElementById('header').innerHTML = headerHTML;

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
      
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
      
        // Simple validation (you can add more complex validation if needed)
        if (name && email && message) {
          alert('Thank you for your message!');
          // Here you can add code to send the form data to your server
        } else {
          alert('Please fill out all fields.');
        }
      });