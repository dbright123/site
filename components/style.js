import css from 'styled-jsx/css'

export default css.global`
    body {
      font-family: "Open Sans", sans-serif;
      color: #444444;
    }

    a {
      color: #106eea;
      text-decoration: none;
    }

    a:hover {
      color: #3b8af2;
      text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: "Roboto", sans-serif;
    }

    /*--------------------------------------------------------------
    # Preloader
    --------------------------------------------------------------*/
    #preloader {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      overflow: hidden;
      background: #fff;
    }

    #preloader:before {
      content: "";
      position: fixed;
      top: calc(50% - 30px);
      left: calc(50% - 30px);
      border: 6px solid #106eea;
      border-top-color: #e2eefd;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      -webkit-animation: animate-preloader 1s linear infinite;
      animation: animate-preloader 1s linear infinite;
    }

    @-webkit-keyframes animate-preloader {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes animate-preloader {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    /*--------------------------------------------------------------
    # Back to top button
    --------------------------------------------------------------*/
    .back-to-top {
      position: fixed;
      visibility: hidden;
      opacity: 0;
      right: 15px;
      bottom: 15px;
      z-index: 996;
      background: #106eea;
      width: 40px;
      height: 40px;
      border-radius: 4px;
      transition: all 0.4s;
    }
    .back-to-top i {
      font-size: 28px;
      color: #fff;
      line-height: 0;
    }
    .back-to-top:hover {
      background: #3284f1;
      color: #fff;
    }
    .back-to-top.active {
      visibility: visible;
      opacity: 1;
    }

    /*--------------------------------------------------------------
    # Disable aos animation delay on mobile devices
    --------------------------------------------------------------*/
    @media screen and (max-width: 768px) {
      [data-aos-delay] {
        transition-delay: 0 !important;
      }
    }
    /*--------------------------------------------------------------
    # Top Bar
    --------------------------------------------------------------*/
    #topbar {
      background: #106eea;
      height: 40px;
      font-size: 14px;
      transition: all 0.5s;
      color: #fff;
      padding: 0;
    }
    #topbar .contact-info i {
      font-style: normal;
      color: #fff;
    }
    #topbar .contact-info i a, #topbar .contact-info i span {
      padding-left: 5px;
      color: #fff;
    }
    #topbar .contact-info i a {
      line-height: 0;
      transition: 0.3s;
      transition: 0.3s;
    }
    #topbar .contact-info i a:hover {
      color: #fff;
      text-decoration: underline;
    }
    #topbar .social-links a {
      color: rgba(255, 255, 255, 0.7);
      line-height: 0;
      transition: 0.3s;
      margin-left: 20px;
    }
    #topbar .social-links a:hover {
      color: white;
    }

    /*--------------------------------------------------------------
    # Header
    --------------------------------------------------------------*/
    #header {
      background: #fff;
      transition: all 0.5s;
      z-index: 997;
      height: 86px;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    }
    #header.fixed-top {
      height: 70px;
    }
    #header .logo {
      font-size: 30px;
      margin: 0;
      padding: 0;
      line-height: 1;
      font-weight: 600;
      letter-spacing: 0.8px;
      font-family: "Poppins", sans-serif;
    }
    #header .logo a {
      color: #222222;
    }
    #header .logo a span {
      color: #106eea;
    }
    #header .logo img {
      max-height: 40px;
    }

    .scrolled-offset {
      margin-top: 70px;
    }

    /*--------------------------------------------------------------
    # Navigation Menu
    --------------------------------------------------------------*/
    /**
    * Desktop Navigation
    */
    .navbar {
      padding: 0;
    }
    .navbar ul {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
      align-items: center;
    }
    .navbar li {
      position: relative;
    }
    .navbar > ul > li {
      white-space: nowrap;
      padding: 10px 0 10px 28px;
    }
    .navbar a, .navbar a:focus {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 3px;
      font-size: 15px;
      font-weight: 600;
      color: #222222;
      white-space: nowrap;
      transition: 0.3s;
      position: relative;
    }
    .navbar a i, .navbar a:focus i {
      font-size: 12px;
      line-height: 0;
      margin-left: 5px;
    }
    .navbar > ul > li > a:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -6px;
      left: 0;
      background-color: #106eea;
      visibility: hidden;
      width: 0px;
      transition: all 0.3s ease-in-out 0s;
    }
    .navbar a:hover:before, .navbar li:hover > a:before, .navbar .active:before {
      visibility: visible;
      width: 100%;
    }
    .navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
      color: #106eea;
    }
    .navbar .dropdown ul {
      display: block;
      position: absolute;
      left: 28px;
      top: calc(100% + 30px);
      margin: 0;
      padding: 10px 0;
      z-index: 99;
      opacity: 0;
      visibility: hidden;
      background: #fff;
      box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
      transition: 0.3s;
    }
    .navbar .dropdown ul li {
      min-width: 200px;
    }
    .navbar .dropdown ul a {
      padding: 10px 20px;
      font-weight: 400;
    }
    .navbar .dropdown ul a i {
      font-size: 12px;
    }
    .navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
      color: #106eea;
    }
    .navbar .dropdown:hover > ul {
      opacity: 1;
      top: 100%;
      visibility: visible;
    }
    .navbar .dropdown .dropdown ul {
      top: 0;
      left: calc(100% - 30px);
      visibility: hidden;
    }
    .navbar .dropdown .dropdown:hover > ul {
      opacity: 1;
      top: 0;
      left: 100%;
      visibility: visible;
    }
    @media (max-width: 1366px) {
      .navbar .dropdown .dropdown ul {
        left: -90%;
      }
      .navbar .dropdown .dropdown:hover > ul {
        left: -100%;
      }
    }

    /**
    * Mobile Navigation
    */
    .mobile-nav-toggle {
      color: #222222;
      font-size: 28px;
      cursor: pointer;
      display: none;
      line-height: 0;
      transition: 0.5s;
    }
    .mobile-nav-toggle.bi-x {
      color: #fff;
    }

    @media (max-width: 991px) {
      .mobile-nav-toggle {
        display: block;
      }

      .navbar ul {
        display: none;
      }
    }
    .navbar-mobile {
      position: fixed;
      overflow: hidden;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(9, 9, 9, 0.9);
      transition: 0.3s;
      z-index: 999;
    }
    .navbar-mobile .mobile-nav-toggle {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    .navbar-mobile ul {
      display: block;
      position: absolute;
      top: 55px;
      right: 15px;
      bottom: 15px;
      left: 15px;
      padding: 10px 0;
      background-color: #fff;
      overflow-y: auto;
      transition: 0.3s;
    }
    .navbar-mobile a, .navbar-mobile a:focus {
      padding: 10px 20px;
      font-size: 15px;
      color: #222222;
    }
    .navbar-mobile > ul > li {
      padding: 0;
    }
    .navbar-mobile a:hover:before, .navbar-mobile li:hover > a:before, .navbar-mobile .active:before {
      visibility: hidden;
    }
    .navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
      color: #106eea;
    }
    .navbar-mobile .getstarted, .navbar-mobile .getstarted:focus {
      margin: 15px;
    }
    .navbar-mobile .dropdown ul {
      position: static;
      display: none;
      margin: 10px 20px;
      padding: 10px 0;
      z-index: 99;
      opacity: 1;
      visibility: visible;
      background: #fff;
      box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    }
    .navbar-mobile .dropdown ul li {
      min-width: 200px;
    }
    .navbar-mobile .dropdown ul a {
      padding: 10px 20px;
    }
    .navbar-mobile .dropdown ul a i {
      font-size: 12px;
    }
    .navbar-mobile .dropdown ul a:hover, .navbar-mobile .dropdown ul .active:hover, .navbar-mobile .dropdown ul li:hover > a {
      color: #106eea;
    }
    .navbar-mobile .dropdown > .dropdown-active {
      display: block;
    }

    /*--------------------------------------------------------------
    # Hero Section
    --------------------------------------------------------------*/
    #hero {
      width: 100%;
      height: 75vh;
      background: url("/bg.jpg") top left;
      background-size: cover;
      position: relative;
    }
    #hero:before {
      content: "";
      background: rgba(255, 255, 255, 0.6);
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
    }
    #hero .container {
      position: relative;
    }
    #hero h1 {
      margin: 0;
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;
      color: #222222;
      font-family: "Poppins", sans-serif;
    }
    #hero h1 span {
      color: #106eea;
    }
    #hero h2 {
      color: #555555;
      margin: 5px 0 30px 0;
      font-size: 24px;
      font-weight: 400;
    }
    #hero .btn-get-started {
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 1px;
      display: inline-block;
      padding: 10px 28px;
      border-radius: 4px;
      transition: 0.5s;
      color: #fff;
      background: #106eea;
    }
    #hero .btn-get-started:hover {
      background: #247cf0;
    }
    #hero .btn-watch-video {
      font-size: 16px;
      transition: 0.5s;
      margin-left: 25px;
      color: #222222;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    #hero .btn-watch-video i {
      color: #106eea;
      font-size: 32px;
      transition: 0.3s;
      line-height: 0;
      margin-right: 8px;
    }
    #hero .btn-watch-video:hover {
      color: #106eea;
    }
    #hero .btn-watch-video:hover i {
      color: #3b8af2;
    }
    @media (min-width: 1024px) {
      #hero {
        background-attachment: fixed;
      }
    }
    @media (max-width: 768px) {
      #hero {
        height: 100vh;
      }
      #hero h1 {
        font-size: 28px;
        line-height: 36px;
      }
      #hero h2 {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 30px;
      }
      #hero .btn-get-started, #hero .btn-watch-video {
        font-size: 13px;
      }
    }
    @media (max-height: 500px) {
      #hero {
        height: 120vh;
      }
    }

    /*--------------------------------------------------------------
    # Sections General
    --------------------------------------------------------------*/
    section {
      padding: 60px 0;
      overflow: hidden;
    }

    .section-bg {
      background-color: #f6f9fe;
    }

    .section-title {
      text-align: center;
      padding-bottom: 30px;
    }
    .section-title h2 {
      font-size: 13px;
      letter-spacing: 1px;
      font-weight: 700;
      padding: 8px 20px;
      margin: 0;
      background: #e7f1fd;
      color: #106eea;
      display: inline-block;
      text-transform: uppercase;
      border-radius: 50px;
    }
    .section-title h3 {
      margin: 15px 0 0 0;
      font-size: 32px;
      font-weight: 700;
    }
    .section-title h3 span {
      color: #106eea;
    }
    .section-title p {
      margin: 15px auto 0 auto;
      font-weight: 600;
    }
    @media (min-width: 1024px) {
      .section-title p {
        width: 50%;
      }
    }

    /*--------------------------------------------------------------
    # Breadcrumbs
    --------------------------------------------------------------*/
    .breadcrumbs {
      padding: 20px 0;
      background-color: #f1f6fe;
      min-height: 40px;
    }
    .breadcrumbs h2 {
      font-size: 24px;
      font-weight: 300;
      margin: 0;
    }
    @media (max-width: 992px) {
      .breadcrumbs h2 {
        margin: 0 0 10px 0;
      }
    }
    .breadcrumbs ol {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 14px;
    }
    .breadcrumbs ol li + li {
      padding-left: 10px;
    }
    .breadcrumbs ol li + li::before {
      display: inline-block;
      padding-right: 10px;
      color: #6c757d;
      content: "/";
    }
    @media (max-width: 768px) {
      .breadcrumbs .d-flex {
        display: block !important;
      }
      .breadcrumbs ol {
        display: block;
      }
      .breadcrumbs ol li {
        display: inline-block;
      }
    }

    /*--------------------------------------------------------------
    # Featured Services
    --------------------------------------------------------------*/
    .featured-services .icon-box {
      padding: 30px;
      position: relative;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
      transition: all 0.3s ease-in-out;
      border-radius: 8px;
      z-index: 1;
    }
    .featured-services .icon-box::before {
      content: "";
      position: absolute;
      background: #cbe0fb;
      right: 0;
      left: 0;
      bottom: 0;
      top: 100%;
      transition: all 0.3s;
      z-index: -1;
    }
    .featured-services .icon-box:hover::before {
      background: #106eea;
      top: 0;
      border-radius: 0px;
    }
    .featured-services .icon {
      margin-bottom: 15px;
    }
    .featured-services .icon i {
      font-size: 48px;
      line-height: 1;
      color: #106eea;
      transition: all 0.3s ease-in-out;
    }
    .featured-services .title {
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 18px;
    }
    .featured-services .title a {
      color: #111;
    }
    .featured-services .description {
      font-size: 15px;
      line-height: 28px;
      margin-bottom: 0;
    }
    .featured-services .icon-box:hover .title a, .featured-services .icon-box:hover .description {
      color: #fff;
    }
    .featured-services .icon-box:hover .icon i {
      color: #fff;
    }

    /*--------------------------------------------------------------
    # About
    --------------------------------------------------------------*/
    .about .content h3 {
      font-weight: 600;
      font-size: 26px;
    }
    .about .content ul {
      list-style: none;
      padding: 0;
    }
    .about .content ul li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 35px;
    }
    .about .content ul li:first-child {
      margin-top: 35px;
    }
    .about .content ul i {
      background: #fff;
      box-shadow: 0px 6px 15px rgba(16, 110, 234, 0.12);
      font-size: 24px;
      padding: 20px;
      margin-right: 15px;
      color: #106eea;
      border-radius: 50px;
    }
    .about .content ul h5 {
      font-size: 18px;
      color: #555555;
    }
    .about .content ul p {
      font-size: 15px;
    }
    .about .content p:last-child {
      margin-bottom: 0;
    }

    /*--------------------------------------------------------------
    # Skills
    --------------------------------------------------------------*/
    .skills .progress {
      height: 60px;
      display: block;
      background: none;
      border-radius: 0;
    }
    .skills .progress .skill {
      padding: 0;
      margin: 0 0 6px 0;
      text-transform: uppercase;
      display: block;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      color: #222222;
    }
    .skills .progress .skill .val {
      float: right;
      font-style: normal;
    }
    .skills .progress-bar-wrap {
      background: #e2eefd;
      height: 10px;
    }
    .skills .progress-bar {
      width: 1px;
      height: 10px;
      transition: 0.9s;
      background-color: #106eea;
    }

    /*--------------------------------------------------------------
    # Counts
    --------------------------------------------------------------*/
    .counts {
      padding: 70px 0 60px;
    }
    .counts .count-box {
      padding: 30px 30px 25px 30px;
      width: 100%;
      position: relative;
      text-align: center;
      background: #f1f6fe;
    }
    .counts .count-box i {
      position: absolute;
      top: -28px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 24px;
      background: #106eea;
      color: #fff;
      width: 56px;
      height: 56px;
      line-height: 0;
      border-radius: 50px;
      border: 5px solid #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .counts .count-box span {
      font-size: 36px;
      display: block;
      font-weight: 600;
      color: #062b5b;
    }
    .counts .count-box p {
      padding: 0;
      margin: 0;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
    }

    /*--------------------------------------------------------------
    # Clients
    --------------------------------------------------------------*/
    .clients {
      padding: 15px 0;
      text-align: center;
    }
    .clients img {
      max-width: 45%;
      transition: all 0.4s ease-in-out;
      display: inline-block;
      padding: 15px 0;
    }
    .clients img:hover {
      transform: scale(1.15);
    }
    @media (max-width: 768px) {
      .clients img {
        max-width: 40%;
      }
    }

    /*--------------------------------------------------------------
    # Services
    --------------------------------------------------------------*/
    .services .icon-box {
      text-align: center;
      border: 1px solid #e2eefd;
      padding: 80px 20px;
      transition: all ease-in-out 0.3s;
      background: #fff;
    }
    .services .icon-box .icon {
      margin: 0 auto;
      width: 64px;
      height: 64px;
      background: #f1f6fe;
      border-radius: 4px;
      border: 1px solid #deebfd;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      transition: ease-in-out 0.3s;
    }
    .services .icon-box .icon i {
      color: #3b8af2;
      font-size: 28px;
      transition: ease-in-out 0.3s;
    }
    .services .icon-box h4 {
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 24px;
    }
    .services .icon-box h4 a {
      color: #222222;
      transition: ease-in-out 0.3s;
    }
    .services .icon-box p {
      line-height: 24px;
      font-size: 14px;
      margin-bottom: 0;
    }
    .services .icon-box:hover {
      border-color: #fff;
      box-shadow: 0px 0 25px 0 rgba(16, 110, 234, 0.1);
    }
    .services .icon-box:hover h4 a, .services .icon-box:hover .icon i {
      color: #106eea;
    }
    .services .icon-box:hover .icon {
      border-color: #106eea;
    }

    /*--------------------------------------------------------------
    # Testimonials
    --------------------------------------------------------------*/
    .testimonials {
      padding: 80px 0;
      background: url("../img/testimonials-bg.jpg") no-repeat;
      background-position: center center;
      background-size: cover;
      position: relative;
    }
    .testimonials::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
    }
    .testimonials .section-header {
      margin-bottom: 40px;
    }
    .testimonials .testimonials-carousel, .testimonials .testimonials-slider {
      overflow: hidden;
    }
    .testimonials .testimonial-item {
      text-align: center;
      color: #fff;
    }
    .testimonials .testimonial-item .testimonial-img {
      width: 100px;
      border-radius: 50%;
      border: 6px solid rgba(255, 255, 255, 0.15);
      margin: 0 auto;
    }
    .testimonials .testimonial-item h3 {
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0 5px 0;
      color: #fff;
    }
    .testimonials .testimonial-item h4 {
      font-size: 14px;
      color: #ddd;
      margin: 0 0 15px 0;
    }
    .testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right {
      color: rgba(255, 255, 255, 0.4);
      font-size: 26px;
    }
    .testimonials .testimonial-item .quote-icon-left {
      display: inline-block;
      left: -5px;
      position: relative;
    }
    .testimonials .testimonial-item .quote-icon-right {
      display: inline-block;
      right: -5px;
      position: relative;
      top: 10px;
    }
    .testimonials .testimonial-item p {
      font-style: italic;
      margin: 0 auto 15px auto;
      color: #eee;
    }
    .testimonials .swiper-pagination {
      margin-top: 20px;
      position: relative;
    }
    .testimonials .swiper-pagination .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: rgba(255, 255, 255, 0.5);
      opacity: 1;
    }
    .testimonials .swiper-pagination .swiper-pagination-bullet-active {
      background-color: #106eea;
    }
    @media (min-width: 992px) {
      .testimonials .testimonial-item p {
        width: 80%;
      }
    }

    /*--------------------------------------------------------------
    # Portfolio
    --------------------------------------------------------------*/
    .portfolio #portfolio-flters {
      padding: 0;
      margin: 0 auto 15px auto;
      list-style: none;
      text-align: center;
      border-radius: 50px;
      padding: 2px 15px;
    }
    .portfolio #portfolio-flters li {
      cursor: pointer;
      display: inline-block;
      padding: 10px 15px 8px 15px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
      color: #444444;
      margin-bottom: 5px;
      transition: all 0.3s ease-in-out;
    }
    .portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
      color: #106eea;
    }
    .portfolio #portfolio-flters li:last-child {
      margin-right: 0;
    }
    .portfolio .portfolio-item {
      margin-bottom: 30px;
    }
    .portfolio .portfolio-item .portfolio-info {
      opacity: 0;
      position: absolute;
      left: 30px;
      right: 30px;
      bottom: 0;
      z-index: 3;
      transition: all ease-in-out 0.3s;
      background: rgba(255, 255, 255, 0.9);
      padding: 15px;
    }
    .portfolio .portfolio-item .portfolio-info h4 {
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      color: #222222;
    }
    .portfolio .portfolio-item .portfolio-info p {
      color: #555555;
      font-size: 14px;
      margin-bottom: 0;
    }
    .portfolio .portfolio-item .portfolio-info .preview-link, .portfolio .portfolio-item .portfolio-info .details-link {
      position: absolute;
      right: 40px;
      font-size: 24px;
      top: calc(50% - 18px);
      color: #3c3c3c;
    }
    .portfolio .portfolio-item .portfolio-info .preview-link:hover, .portfolio .portfolio-item .portfolio-info .details-link:hover {
      color: #106eea;
    }
    .portfolio .portfolio-item .portfolio-info .details-link {
      right: 10px;
    }
    .portfolio .portfolio-item .portfolio-links {
      opacity: 0;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 3;
      position: absolute;
      transition: all ease-in-out 0.3s;
    }
    .portfolio .portfolio-item .portfolio-links a {
      color: #fff;
      margin: 0 2px;
      font-size: 28px;
      display: inline-block;
      transition: 0.3s;
    }
    .portfolio .portfolio-item .portfolio-links a:hover {
      color: #6ba7f5;
    }
    .portfolio .portfolio-item:hover .portfolio-info {
      opacity: 1;
      bottom: 20px;
    }

    /*--------------------------------------------------------------
    # Portfolio Details
    --------------------------------------------------------------*/
    .portfolio-details {
      padding-top: 40px;
    }
    .portfolio-details .portfolio-details-slider img {
      width: 100%;
    }
    .portfolio-details .portfolio-details-slider .swiper-pagination {
      margin-top: 20px;
      position: relative;
    }
    .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: #fff;
      opacity: 1;
      border: 1px solid #106eea;
    }
    .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
      background-color: #106eea;
    }
    .portfolio-details .portfolio-info {
      padding: 30px;
      box-shadow: 0px 0 30px rgba(34, 34, 34, 0.08);
    }
    .portfolio-details .portfolio-info h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
    .portfolio-details .portfolio-info ul {
      list-style: none;
      padding: 0;
      font-size: 15px;
    }
    .portfolio-details .portfolio-info ul li + li {
      margin-top: 10px;
    }
    .portfolio-details .portfolio-description {
      padding-top: 30px;
    }
    .portfolio-details .portfolio-description h2 {
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .portfolio-details .portfolio-description p {
      padding: 0;
    }

    /*--------------------------------------------------------------
    # Team
    --------------------------------------------------------------*/
    .team {
      padding: 60px 0;
    }
    .team .member {
      margin-bottom: 20px;
      overflow: hidden;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0px 2px 15px rgba(16, 110, 234, 0.15);
    }
    .team .member .member-img {
      position: relative;
      overflow: hidden;
    }
    .team .member .social {
      position: absolute;
      left: 0;
      bottom: 30px;
      right: 0;
      opacity: 0;
      transition: ease-in-out 0.3s;
      text-align: center;
    }
    .team .member .social a {
      transition: color 0.3s;
      color: #222222;
      margin: 0 3px;
      padding-top: 7px;
      border-radius: 4px;
      width: 36px;
      height: 36px;
      background: rgba(16, 110, 234, 0.8);
      display: inline-block;
      transition: ease-in-out 0.3s;
      color: #fff;
    }
    .team .member .social a:hover {
      background: #3b8af2;
    }
    .team .member .social i {
      font-size: 18px;
    }
    .team .member .member-info {
      padding: 25px 15px;
    }
    .team .member .member-info h4 {
      font-weight: 700;
      margin-bottom: 5px;
      font-size: 18px;
      color: #222222;
    }
    .team .member .member-info span {
      display: block;
      font-size: 13px;
      font-weight: 400;
      color: #aaaaaa;
    }
    .team .member .member-info p {
      font-style: italic;
      font-size: 14px;
      line-height: 26px;
      color: #777777;
    }
    .team .member:hover .social {
      opacity: 1;
      bottom: 15px;
    }

    /*--------------------------------------------------------------
    # Pricing
    --------------------------------------------------------------*/
    .pricing .box {
      padding: 20px;
      background: #fff;
      text-align: center;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
      border-radius: 5px;
      position: relative;
      overflow: hidden;
    }
    .pricing .box h3 {
      font-weight: 400;
      margin: -20px -20px 20px -20px;
      padding: 20px 15px;
      font-size: 16px;
      font-weight: 600;
      color: #777777;
      background: #f8f8f8;
    }
    .pricing .box h4 {
      font-size: 36px;
      color: #106eea;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      margin-bottom: 20px;
    }
    .pricing .box h4 sup {
      font-size: 20px;
      top: -15px;
      left: -3px;
    }
    .pricing .box h4 span {
      color: #bababa;
      font-size: 16px;
      font-weight: 300;
    }
    .pricing .box ul {
      padding: 0;
      list-style: none;
      color: #444444;
      text-align: center;
      line-height: 20px;
      font-size: 14px;
    }
    .pricing .box ul li {
      padding-bottom: 16px;
    }
    .pricing .box ul i {
      color: #106eea;
      font-size: 18px;
      padding-right: 4px;
    }
    .pricing .box ul .na {
      color: #ccc;
      text-decoration: line-through;
    }
    .pricing .btn-wrap {
      margin: 20px -20px -20px -20px;
      padding: 20px 15px;
      background: #f8f8f8;
      text-align: center;
    }
    .pricing .btn-buy {
      background: #106eea;
      display: inline-block;
      padding: 8px 35px 10px 35px;
      border-radius: 4px;
      color: #fff;
      transition: none;
      font-size: 14px;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      transition: 0.3s;
    }
    .pricing .btn-buy:hover {
      background: #3b8af2;
    }
    .pricing .featured h3 {
      color: #fff;
      background: #106eea;
    }
    .pricing .advanced {
      width: 200px;
      position: absolute;
      top: 18px;
      right: -68px;
      transform: rotate(45deg);
      z-index: 1;
      font-size: 14px;
      padding: 1px 0 3px 0;
      background: #106eea;
      color: #fff;
    }

    /*--------------------------------------------------------------
    # Frequently Asked Questions
    --------------------------------------------------------------*/
    .faq {
      padding: 60px 0;
    }
    .faq .faq-list {
      padding: 0;
      list-style: none;
    }
    .faq .faq-list li {
      border-bottom: 1px solid #d4e5fc;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }
    .faq .faq-list .question {
      display: block;
      position: relative;
      font-family: #106eea;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      padding-left: 25px;
      cursor: pointer;
      color: #0d58ba;
      transition: 0.3s;
    }
    .faq .faq-list i {
      font-size: 16px;
      position: absolute;
      left: 0;
      top: -2px;
    }
    .faq .faq-list p {
      margin-bottom: 0;
      padding: 10px 0 0 25px;
    }
    .faq .faq-list .icon-show {
      display: none;
    }
    .faq .faq-list .collapsed {
      color: black;
    }
    .faq .faq-list .collapsed:hover {
      color: #106eea;
    }
    .faq .faq-list .collapsed .icon-show {
      display: inline-block;
      transition: 0.6s;
    }
    .faq .faq-list .collapsed .icon-close {
      display: none;
      transition: 0.6s;
    }

    /*--------------------------------------------------------------
    # Contact
    --------------------------------------------------------------*/
    .contact .info-box {
      color: #444444;
      text-align: center;
      box-shadow: 0 0 30px rgba(214, 215, 216, 0.3);
      padding: 20px 0 30px 0;
    }
    .contact .info-box i {
      font-size: 32px;
      color: #106eea;
      border-radius: 50%;
      padding: 8px;
      border: 2px dotted #b3d1fa;
    }
    .contact .info-box h3 {
      font-size: 20px;
      color: #777777;
      font-weight: 700;
      margin: 10px 0;
    }
    .contact .info-box p {
      padding: 0;
      line-height: 24px;
      font-size: 14px;
      margin-bottom: 0;
    }
    .contact .php-email-form {
      box-shadow: 0 0 30px rgba(214, 215, 216, 0.4);
      padding: 30px;
    }
    .contact .php-email-form .error-message {
      display: none;
      color: #fff;
      background: #ed3c0d;
      text-align: left;
      padding: 15px;
      font-weight: 600;
    }
    .contact .php-email-form .error-message br + br {
      margin-top: 25px;
    }
    .contact .php-email-form .sent-message {
      display: none;
      color: #fff;
      background: #18d26e;
      text-align: center;
      padding: 15px;
      font-weight: 600;
    }
    .contact .php-email-form .loading {
      display: none;
      background: #fff;
      text-align: center;
      padding: 15px;
    }
    .contact .php-email-form .loading:before {
      content: "";
      display: inline-block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin: 0 10px -6px 0;
      border: 3px solid #18d26e;
      border-top-color: #eee;
      -webkit-animation: animate-loading 1s linear infinite;
      animation: animate-loading 1s linear infinite;
    }
    .contact .php-email-form .form-group {
      margin-bottom: 20px;
    }
    .contact .php-email-form input, .contact .php-email-form textarea {
      border-radius: 0;
      box-shadow: none;
      font-size: 14px;
    }
    .contact .php-email-form input:focus, .contact .php-email-form textarea:focus {
      border-color: #106eea;
    }
    .contact .php-email-form input {
      padding: 10px 15px;
    }
    .contact .php-email-form textarea {
      padding: 12px 15px;
    }
    .contact .php-email-form button[type=submit] {
      background: #106eea;
      border: 0;
      padding: 10px 30px;
      color: #fff;
      transition: 0.4s;
      border-radius: 4px;
    }
    .contact .php-email-form button[type=submit]:hover {
      background: #3b8af2;
    }
    @-webkit-keyframes animate-loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes animate-loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /*--------------------------------------------------------------
    # Footer
    --------------------------------------------------------------*/
    #footer {
      background: #fff;
      padding: 0 0 30px 0;
      color: #444444;
      font-size: 14px;
      background: #f1f6fe;
    }
    #footer .footer-newsletter {
      padding: 50px 0;
      background: #f1f6fe;
      text-align: center;
      font-size: 15px;
    }
    #footer .footer-newsletter h4 {
      font-size: 24px;
      margin: 0 0 20px 0;
      padding: 0;
      line-height: 1;
      font-weight: 600;
    }
    #footer .footer-newsletter form {
      margin-top: 30px;
      background: #fff;
      padding: 6px 10px;
      position: relative;
      border-radius: 4px;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
      text-align: left;
    }
    #footer .footer-newsletter form input[type=email] {
      border: 0;
      padding: 4px 8px;
      width: calc(100% - 100px);
    }
    #footer .footer-newsletter form input[type=submit] {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border: 0;
      background: none;
      font-size: 16px;
      padding: 0 20px;
      background: #106eea;
      color: #fff;
      transition: 0.3s;
      border-radius: 0 4px 4px 0;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    }
    #footer .footer-newsletter form input[type=submit]:hover {
      background: #0d58ba;
    }
    #footer .footer-top {
      padding: 60px 0 30px 0;
      background: #fff;
    }
    #footer .footer-top .footer-contact {
      margin-bottom: 30px;
    }
    #footer .footer-top .footer-contact h3 {
      font-size: 24px;
      margin: 0 0 15px 0;
      padding: 2px 0 2px 0;
      line-height: 1;
      font-weight: 700;
    }
    #footer .footer-top .footer-contact h3 span {
      color: #106eea;
    }
    #footer .footer-top .footer-contact p {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 0;
      font-family: "Roboto", sans-serif;
      color: #777777;
    }
    #footer .footer-top h4 {
      font-size: 16px;
      font-weight: bold;
      color: #444444;
      position: relative;
      padding-bottom: 12px;
    }
    #footer .footer-top .footer-links {
      margin-bottom: 30px;
    }
    #footer .footer-top .footer-links ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    #footer .footer-top .footer-links ul i {
      padding-right: 2px;
      color: #106eea;
      font-size: 18px;
      line-height: 1;
    }
    #footer .footer-top .footer-links ul li {
      padding: 10px 0;
      display: flex;
      align-items: center;
    }
    #footer .footer-top .footer-links ul li:first-child {
      padding-top: 0;
    }
    #footer .footer-top .footer-links ul a {
      color: #777777;
      transition: 0.3s;
      display: inline-block;
      line-height: 1;
    }
    #footer .footer-top .footer-links ul a:hover {
      text-decoration: none;
      color: #106eea;
    }
    #footer .footer-top .social-links a {
      font-size: 18px;
      display: inline-block;
      background: #106eea;
      color: #fff;
      line-height: 1;
      padding: 8px 0;
      margin-right: 4px;
      border-radius: 4px;
      text-align: center;
      width: 36px;
      height: 36px;
      transition: 0.3s;
    }
    #footer .footer-top .social-links a:hover {
      background: #3b8af2;
      color: #fff;
      text-decoration: none;
    }
    #footer .copyright {
      text-align: center;
      float: left;
    }
    #footer .credits {
      float: right;
      text-align: center;
      font-size: 13px;
      color: #444444;
    }
    @media (max-width: 768px) {
      #footer .copyright, #footer .credits {
        float: none;
        text-align: center;
        padding: 2px 0;
      }
    }
 `