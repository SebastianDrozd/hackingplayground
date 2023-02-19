import React from 'react'
import "../css/LandingFooter.css"
const LandingFooter = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">HackerZone.com  is an initiative  to help the upcoming hackers learn their craft. HackerZone focuses on providing a safe environent where users can take their skills to the next level. Start our purposely vulnerable machines, then start your own parrot os instance and you are good to go. Here at Hackerzone , your learning is our number #1 goal. </p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Web Exploitation</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Privelage Escalation</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Enumeration</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Sniffing</a></li>
              <li><a href="http://scanfcode.com/category/android/">Service Exploitation</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
              <a href="#"> HackerZone</a>.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LandingFooter