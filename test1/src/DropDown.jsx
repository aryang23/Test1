function DropDown() {
    return (
        <div>

        <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Animal Type
        </a>
      
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#" onClick={()=>{

          }}>Dog</a></li>
          <li><a class="dropdown-item" href="#">Bird</a></li>
          <li><a class="dropdown-item" href="#">Reptile</a></li>
          <li><a class="dropdown-item" href="#">Rabbit</a></li>
        </ul>
      </div>

        
        <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Breed Type
        </a>
      
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="#" onClick={()=>{

          }}>Havanese</a></li>
          <li><a class="dropdown-item" href="#">Goldendoodle</a></li>
          <li><a class="dropdown-item" href="#">Boxer</a></li>
          <li><a class="dropdown-item" href="#">Wheaten Terrier</a></li>
          <li><a class="dropdown-item" href="#">Cockatoo</a></li>
          <li><a class="dropdown-item" href="#">Horned Lizard</a></li>
          <li><a class="dropdown-item" href="#">Shih Tzu</a></li>
          <li><a class="dropdown-item" href="#">American</a></li>
          <li><a class="dropdown-item" href="#">Labrador</a></li>
        </ul>
      </div>
      </div>
        );
  }
  
  export default DropDown;