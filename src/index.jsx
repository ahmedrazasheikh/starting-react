import React from 'react';
import ReactDOM from 'react-dom';
// import styles from './index.css';
import './index.css'
import logo from './ty.jpeg'; // Tell webpack this JS file uses this image



function Hi() {
  return (<div  className='container' >
   {console.log("Working Properly")}



<div className="rtm">

<div className='one' >


<div className='name' >  <span  className='name1' > Ahmed Raza</span></div>

<img   className='image' src={logo} alt="Logo" />;

<span  className='contact yuo' >Contact </span>

<div className="inner1">


<span  className='tyoq' >Address:</span>

  <p className='por'>Block 8 Liaqtabad Karachi</p>


<span  className='tyoq' >Phone:</span>
  <p className='por'>03456272088</p>


  <span  className='tyoq' >Email:</span>
  <p className='por'>bhaia9036@gmail.com</p>



  <span  className='tyoq' >LinkedIn:</span>
  <p className='por'>Ahmedraza43</p>

</div>


<span  className='languages yuo' >Languages</span>


<div className="inner2">

<ul>

<li>English</li>
<li>Urdu</li>
<li>Sindhi</li>
</ul>




</div>

<span  className='languages yuo' >Hobbies</span>

<div className="inner3">



<ul>
<li>Cricket</li>
<li>Football</li>
<li>Gaming</li>
<li>Coding</li>
</ul>
</div>


</div>


<div className="second">


<h5 className='iffo' > <span className='iffo1' > Summary</span></h5>





<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt temporibus sit iure aliquam aspernatur impedit dolores. Iure autem voluptates soluta deleniti quo quisquam molestias enim, delectus libero placeat, temporibus ex?
</p>



<h5 className='iffo' ><span className='iffo1' >Skills </span></h5>


<ul>
  <li>Html</li>
  <li>Css</li>
  <li>Bootstrap</li>
  <li>Tailwand Css</li>
  <li>Javascript</li>
  <li>React</li>
  <li>Github</li>
</ul>



<h5 className='iffo' > <span className='iffo1' >Education</span> </h5>

<ul>
  <li>Matriculation From Hina Secondary School</li>
  <li>PECHS College Karachi</li>
<li>Web and Mobile App development Course</li>
</ul>


</div>


</div>



  </div>)
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));
