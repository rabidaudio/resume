# Charles Julian Knight

> 330 Valley Green Dr. NE
> Atlanta, GA 30342
> 404.316.3749
> [charles@rabidaudio.com](mailto:charles@rabidaudio.com)

## Education

#### Georgia Institute of Technology - Atlanta, GA
- B.S. in Electrical Engineering, Fall 2012 - Spring 2015

#### Berry College - Rome, GA
- B.A. Dual-Degree Program, Fall 2009 - Spring 2012

## Experience

### CTO, [FIXD Automotive, Inc](https://fixdapp.com)
> August 2015 - Present
> Atlanta

FIXD Automotive makes a Bluetooth [OBD-II](https://en.wikipedia.org/wiki/On-board_diagnostics) vehicle diagnostic device which connects to a mobile app to break down car problems into plain English and help drivers better understand and maintain their cars. I joined company as the technical co-founder shortly after the company released the initial beta version of the product to it's [Kickstarter](https://www.kickstarter.com/projects/847389453/fixd-your-car-is-talking-to-you-are-you-listening) backers. In this role, I have helped the company grow from under 1,000 users to a user base expected to break 150,000 by the end of 2017. Some major accomplishments:

- I rewrote both [Android](https://play.google.com/store/apps/details?id=com.fixdapp.two) and [iOS](https://itunes.apple.com/us/app/fixd/id957168651?mt=8) native mobile applications from their beta versions to production-ready applications. This included fixing communication issues with certain vehicles and adding many of the features present in the application today.
- Oversaw the release of a second-generation FIXD Sensor, a dual-band Bluetooth device that replaced the separate platform-dependent model with a single cross-platform model. The second generation model also reduced the Cost-of-Goods by 23%. I work closely with our manufacturer in Shenzhen, China to ensure product quality.
- I created a robust REST-ful web API to support the mobile applications. I built out the back-end infrastructure on AWS using established best-practices for cloud deployments. This infrastructure also includes several [Wordpress](https://wordpress.org/) and [Shopify](https://shopify.com) sites.
- The vehicle's odometer isn't available through the standard OBD-II protocol, so I created a proprietary algorithm for predicting the mileage for a vehicle based on other outputs from the car.
- I created a [web application](https://service.fixdapp.com/platform/) in [Ruby on Rails](http://rubyonrails.org/) to allow our repair shop and dealership partners to see the health and status of their customers' vehicles remotely and create automated marketing campaigns.
- I continue to grow the Engineering team, which is currently at 5 employees. I set up an Agile development environment and lead biweekly sprint meetings.

<!-- The API regularly handles 200 requests per minute. -->
<!-- TODO combined page views of sites -->
<!-- Advise AASA on telematics security? -->
<!-- I set up a Continuous Integration system which runs automated tests and automatically deploys both web servers and mobile apps to the App Store and Play Store. -->

### Lead Software Engineer, [TechJect](http://techject.com/)
> May 2015 - August 2015
> Atlanta

After completing my undergrad program, I returned to TechJect. I was assigned to lead a team of 3 software engineers. In that short time, our team overcame several technical challenges:

- We implemented a control interface via SPI to allow a drone's flight control board to communicate with the Android SoC board. This interface was used to send flight control commands and receive sensor and telematics data.
- We optimized the performance of the live video streams, allowing 20-25 FPS at 1080p resolution while maintaining a low latency, simultaneously with the video feed from the small ground-facing flight control camera.
- We passed raw sensor data from the flight control board to the Android board, and made that available for telemetry and diagnostics on the client app.
- I personally implemented a [Kalman Filter](https://en.wikipedia.org/wiki/Kalman_filter) in Java, a sensor fusion algorithm which combined GPS and sensor data from the Android board with the sensor data from the flight control board, providing a more accurate determination of the drone's position.

In addition, configured and administered an on-site build server for improving Android OS and firmware build times, reducing the build time from upwards of 14 hours to less than 1 for incremental builds.

<!--
### Consultant, RabidAudio
> Atlanta, Georgia, May 2015 - August 2015

After completing my undergraduate degree, I founded a technology development consultancy. Embedded electronics and software development, specializing in IoT and Bluetooth electronics products, pro-audio projects, and full-stack web design. 
-->

### Electrical & Computer Engineer, [TechJect](http://techject.com/)
> May 2014 - December 2014
> Atlanta

TechJect designed consumer drones, including the [Robot Dragonfly](https://www.indiegogo.com/projects/robot-dragonfly-micro-aerial-vehicle), which was the first crowd-funded project to break $1 million in funding. The company was run and largely staffed by Electrical Engineering PhDs. I joined the company as the only non-firmware software engineer while still in undergrad.

During my time there we developed an embedded ARM SoC development board with a quad-core CPU, a basic sensor suite, GPS, WiFi, Bluetooth, and dual 12MP cameras. I interacted with off-shore manufacturers and maintained the firmware and kernel drivers for the board, which ran a custom build of the [Android](https://developer.android.com/) operating system.

- I created micro-UAV control Android applications, including system code running on the drone and and an end-user application for controlling it without the need for an RC remote. In addition to providing complete drone flight controls over WiFi or Bluetooth, the application was capable of streaming live video from two cameras over WiFi with sub-200 millisecond latency. It also contained a basic [PID control](https://en.wikipedia.org/wiki/PID_controller) algorithm, allowing the drone to maintain it's altitude automatically.
- I developed and administered the email server and a collection of [Wordpress](https://wordpress.org/) sites including a [WooCommerce](https://woocommerce.com/) e-commerce site and customer support sites, and wired the office with CAT 6.
- I introduced my peers to [`git`](https://git-scm.com/) and implemented version control practices for the company.


### Developer, [GetNotes](http://www.getnotes.co/)
> January 2014 - June 2014
> Atlanta

I joined an [Atlanta Ventures](http://www.atlantaventures.com/)-funded startup during their progress through the [Flashpoint accelerator](http://flashpoint.co/) at Georgia Tech. The company offered crowd-sourced audio-to-text transcription as a service. The CTO and I comprised the entire development team, and together we built and managed a web application in the [Zend PHP Framework](https://framework.zend.com/). I independently implemented new application features and patched bugs in a rapid development cycle. I also advised on technologies and company direction, and lead initial research into machine-learning algorithms for automated transcription. Through the Flashpoint program, I also learned a rigorous customer discovery processes.


### Distributed Systems/AIX Co-Op, [Norfolk Southern Corporation](http://www.nscorp.com/content/nscorp/en.html)
> September 2012 - August 2013
> Atlanta

During two co-op sessions, I worked on a number of different projects.

- I developed an application using Visual Basic to connect to a database of datacenter inventory and generate a Visio document for visualizing datacenter layout and rack contents. While working on that project I shadowed administrators of the 10,000 sq. ft. datacenter, and worked with the diagnostic reporting and resource inventory database team to collect and correct data.
- I developed several internal department applications in [Microsoft SharePoint](https://en.wikipedia.org/wiki/SharePoint). There was no documentation in the organization for how to create applications for Shareoint, so after determining best practices I created an extensive guide and documentation for developing such applications.
- I deployed and solely administered a [DokuWiki](https://www.dokuwiki.org/dokuwiki) server for departmental documentation. This included writing several custom DokuWiki plug-ins in PHP and and training employees on proper usage.
- I wrote server automation scripts, both shell and Perl, for server administration and worked closely with AIX administrators managing QA and Production servers.

<!--
### Student Supervisor, Technical Support Desk, Berry College Office of Information Technology
> Aug 2009 - April 2012
> Mount Berry, Georgia

Provided technical support for faculty, staff, and students via phone, email, and in person;
created and managed service requests and directed departmental calls.
-->

## Organizations

#### Volunteer, [Code for Atlanta](http://http://codeforatlanta.org/)
> January 2017 - Present

Code For Atlanta, a local brigade of Code for America, is a group of civic-minded technologists, designers, and topic experts using our skills to improve Atlanta and the world. As a Project Lead volunteer, I lead teams working on various projects during our regular hack nights.

#### Organizer, [Startup Exchange](http://www.startup.exchange/)
> August 2013 - May 2015

Startup Exchange is a student organization to foster entrepreneurship and hacker culture at Georgia Tech. I co-founded the Maker team. We developed and maintained the website, taught classes on web development with [Ruby on Rails](http://rubyonrails.org/) to students, organized three and attended over a dozen hackathons.

## Awards

#### Finalist, [Static Showdown 2015](https://2015.staticshowdown.com/winners)

My solo submission for Static Showdown 2015, a 48-hour hackathon for static apps, was [QuickComments.js](https://github.com/rabidaudio/ss15-team32), a drop-in comments system for websites. Built comments system, Grunt tasks, documentation, and demo website. Roughly three times faster than [Disqus](https://disqus.com/).

## Talks

- "Kotlin Coroutines in Android", [Connect.Tech](http://connect-js.com) - Atlanta, GA, September 2017
- ["Custom modular synthesizer"](https://github.com/rabidaudio/synthesizer/blob/master/presentation), Atlanta Tech Demo Night - Atlanta, GA, May 2015
- ["Error Correction Over Noisy Channels"](https://speakerdeck.com/rabidaudio/error-correction-over-noisy-channels), Berry College - Rome, GA, March 2012

## Links

- [`LinkedIn`](https://www.linkedin.com/in/charlesjulianknight)
- [`GitHub`](https://github.com/rabidaudio)
- [`Blog`](https://rabid.audio/blog)