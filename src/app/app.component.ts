{
  "name": "my-angular-project",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve --host 0.0.0.0",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "serve:ssr:my-angular-project": "node dist/my-angular-project/server/server.mjs"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^17.1.0",
    "@angular/common": "^17.1.0",
    "@angular/compiler": "^17.1.0",
    "@angular/core": "^17.1.0",
    "@angular/forms": "^17.1.0",
    "@angular/platform-browser": "^17.1.0",
    "@angular/platform-browser-dynamic": "^17.1.0",
    "@angular/platform-server": "^17.1.0",
    "@angular/router": "^17.1.0",
    "@angular/ssr": "^17.1.1",
    "express": "^4.18.2",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^17.1.1",
    "@angular/cli": "^17.1.1",
    "@angular/compiler-cli": "^17.1.0",
    "@types/express": "^4.17.17",
    "@types/jasmine": "~5.1.0",
    "@types/node": "^18.18.0",
    "jasmine-core": "~5.1.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.3.2"
  }
}<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Thai Liquid Crystal in Space (TLCS) - Kasetsart University & NASA Collaborative Research">
  <title>TLCS | Thai Liquid Crystal in Space Research</title>
</head>
<body>
  <!-- Navigation Header -->
  <nav class="navbar" [class.scrolled]="isScrolled">
    <div class="nav-container">
      <!-- Institutional Logos Section -->
      <div class="institutional-logos">
        <div class="logo-group primary">
          <img src="/assets/TLC LOGO_1753195321475.jpg" alt="TLC Project" class="institution-logo">
          <div class="project-identity">
            <span class="project-name">TLCS</span>
            <span class="project-subtitle">Liquid Crystal Research</span>
          </div>
        </div>
        <div class="partner-logos">
          <img src="/assets/Kasetsart_University_Logo_1753195321474.png" alt="Kasetsart University" class="partner-logo">
          <img src="/assets/NASA logo_1753195321475.png" alt="NASA" class="partner-logo">
          <img src="/assets/gistda emblem_1753195321473.png" alt="GISTDA" class="partner-logo">
          <img src="/assets/MHESI emblem_1753195321474.png" alt="MHESI" class="partner-logo">
        </div>
      </div>
      
      <div class="nav-links">
        <a href="#home" class="nav-link" (click)="scrollToSection('home')">Home</a>
        <a href="#news" class="nav-link" (click)="scrollToSection('news')">ข่าวสาร</a>
        <a href="#project" class="nav-link" (click)="scrollToSection('project')">Project</a>
        <a href="#science" class="nav-link" (click)="scrollToSection('science')">Science</a>
        <a href="#research" class="nav-link" (click)="scrollToSection('research')">Research</a>
        <a href="#team" class="nav-link" (click)="scrollToSection('team')">Team</a>
        <a href="#collaboration" class="nav-link" (click)="scrollToSection('collaboration')">Partners</a>
        <a href="#contact" class="nav-link" (click)="scrollToSection('contact')">Contact</a>
      </div>
      
      <button class="mobile-menu-toggle" (click)="toggleMobileMenu()">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero-section">
    <div class="hero-background">
      <div class="space-particles"></div>
      <div class="orbital-grid"></div>
    </div>
    <div class="hero-content">
      <div class="hero-main">
        <div class="mission-badge">
          <span class="badge-text">NASA • Kasetsart University Collaboration</span>
        </div>
        <h1 class="hero-title">
          <span class="title-primary">Thai Liquid Crystal</span>
          <span class="title-accent">in Space</span>
        </h1>
        <p class="hero-description">
          Pioneering microgravity research to unlock the fundamental properties of liquid crystals, 
          advancing materials science and space technology through international collaboration.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">4</span>
            <span class="stat-label">Partner Institutions</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">ISS</span>
            <span class="stat-label">Research Platform</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">2024</span>
            <span class="stat-label">Mission Year</span>
          </div>
        </div>
        <div class="hero-actions">
          <button class="cta-primary" (click)="scrollToSection('project')">
            Explore Mission
            <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </button>
          <button class="cta-secondary" (click)="scrollToSection('science')">
            Learn the Science
          </button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="tcl-background-container">
          <img src="/assets/TCL Background_1753195321475.jpg" alt="TCL Background" class="tcl-background-image">
          <div class="background-overlay"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- News Section -->
  <section id="news" class="news-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">ข่าวและกิจกรรม</h2>
        <p class="section-subtitle">อัพเดทข่าวสารและความคืบหน้าของโครงการ TLCS</p>
      </div>
      
      <div class="news-slider-container">
        <button class="news-nav-btn prev-btn" (click)="previousNews()" [disabled]="currentNewsIndex === 0">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <div class="news-slider" #newsSlider>
          <div class="news-grid" [style.transform]="'translateX(-' + (currentNewsIndex * 100) + '%)'">
            <div class="news-slide" *ngFor="let newsGroup of newsGroups; let i = index">
              <div class="news-item" *ngFor="let news of newsGroup" (click)="openNewsDetail(news)">
                <div class="news-image">
                  <img [src]="news.image" [alt]="news.title" loading="lazy">
                  <div class="news-date-badge">
                    <span class="day">{{ formatDate(news.date).day }}</span>
                    <span class="month">{{ formatDate(news.date).month }}</span>
                  </div>
                </div>
                <div class="news-content">
                  <div class="news-category">{{ news.category }}</div>
                  <h3 class="news-title">{{ news.title }}</h3>
                  <p class="news-summary">{{ news.summary }}</p>
                  <div class="news-meta">
                    <span class="news-author">{{ news.author }}</span>
                    <span class="news-read-time">{{ news.readTime }} นาที</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button class="news-nav-btn next-btn" (click)="nextNews()" [disabled]="currentNewsIndex === maxNewsIndex">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
      
      <div class="news-indicators">
        <button 
          *ngFor="let group of newsGroups; let i = index" 
          class="indicator" 
          [class.active]="i === currentNewsIndex"
          (click)="goToNewsSlide(i)">
        </button>
      </div>
      
      <div class="news-actions">
        <button class="view-all-news" (click)="scrollToSection('news-archive')">
          ดูข่าวทั้งหมด
          <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- News Detail Modal -->
  <div class="news-modal" [class.active]="selectedNews" (click)="closeNewsModal()">
    <div class="news-modal-content" (click)="$event.stopPropagation()" *ngIf="selectedNews">
      <button class="modal-close" (click)="closeNewsModal()">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
      
      <div class="modal-header">
        <img [src]="selectedNews.image" [alt]="selectedNews.title" class="modal-image">
        <div class="modal-overlay">
          <div class="modal-category">{{ selectedNews.category }}</div>
          <h2 class="modal-title">{{ selectedNews.title }}</h2>
          <div class="modal-meta">
            <span>{{ selectedNews.author }}</span>
            <span>{{ formatFullDate(selectedNews.date) }}</span>
            <span>{{ selectedNews.readTime }} นาที</span>
          </div>
        </div>
      </div>
      
      <div class="modal-body">
        <div class="modal-summary">{{ selectedNews.summary }}</div>
        <div class="modal-content-text" [innerHTML]="selectedNews.content"></div>
        
        <div class="modal-tags">
          <span class="tag" *ngFor="let tag of selectedNews.tags">#{{ tag }}</span>
        </div>
        
        <div class="modal-social">
          <h4>แชร์ข่าวนี้</h4>
          <div class="social-buttons">
            <button class="social-btn facebook" (click)="shareToFacebook(selectedNews)">
              <i class="fab fa-facebook-f"></i> Facebook
            </button>
            <button class="social-btn twitter" (click)="shareToTwitter(selectedNews)">
              <i class="fab fa-twitter"></i> Twitter
            </button>
            <button class="social-btn line" (click)="shareToLine(selectedNews)">
              <i class="fab fa-line"></i> Line
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Overview Section -->
  <section id="project" class="project-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Mission Overview</h2>
        <p class="section-subtitle">Advancing liquid crystal science through microgravity research</p>
      </div>
      
      <div class="mission-grid">
        <div class="mission-card primary">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 class="card-title">International Collaboration</h3>
          <p class="card-description">
            Official MOU between Kasetsart University and NASA, with support from GISTDA and MHESI, 
            creating a unique platform for Thai scientists to conduct cutting-edge space research.
          </p>
          <div class="card-highlight">
            Led by Assoc. Prof. Dr. Nattaporn Chattam
          </div>
        </div>

        <div class="mission-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
          <h3 class="card-title">ISS Research Platform</h3>
          <p class="card-description">
            Utilizing the International Space Station's unique microgravity environment to study 
            liquid crystal behavior without gravitational interference.
          </p>
        </div>

        <div class="mission-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
            </svg>
          </div>
          <h3 class="card-title">Advanced Materials</h3>
          <p class="card-description">
            Developing next-generation materials and technologies with applications in displays, 
            sensors, and space technology.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Science Education Section -->
  <section id="science" class="science-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Understanding Liquid Crystals</h2>
        <p class="section-subtitle">The fascinating science behind our research</p>
      </div>

      <div class="science-content">
        <div class="science-intro">
          <div class="intro-text">
            <h3>What are Liquid Crystals?</h3>
            <p>
              Liquid crystals represent a unique state of matter that combines properties of both liquids and solid crystals. 
              These remarkable materials flow like liquids while maintaining some degree of molecular order like crystals, 
              making them essential for modern technology from smartphone displays to advanced optical devices.
            </p>
          </div>
          <div class="crystal-visualization">
            <div class="molecular-diagram">
              <div class="molecule-row">
                <div class="molecule"></div>
                <div class="molecule"></div>
                <div class="molecule"></div>
              </div>
              <div class="molecule-row">
                <div class="molecule"></div>
                <div class="molecule"></div>
                <div class="molecule"></div>
              </div>
              <div class="molecule-row">
                <div class="molecule"></div>
                <div class="molecule"></div>
                <div class="molecule"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="science-details">
          <div class="detail-card">
            <h4>Molecular Structure</h4>
            <p>
              Liquid crystal molecules are typically elongated (rod-like) or disc-like shapes. 
              These molecules can align in various orientations, creating different phases with unique optical and electrical properties.
            </p>
          </div>
          <div class="detail-card">
            <h4>Phase Transitions</h4>
            <p>
              As temperature changes, liquid crystals undergo phase transitions between different ordered states, 
              each with distinct properties that can be exploited for technological applications.
            </p>
          </div>
          <div class="detail-card">
            <h4>Microgravity Effects</h4>
            <p>
              In space's microgravity environment, liquid crystals behave differently due to the absence of gravitational forces, 
              allowing scientists to study fundamental properties impossible to observe on Earth.
            </p>
          </div>
        </div>

        <div class="research-applications">
          <h3>Research Applications</h3>
          <div class="application-grid">
            <div class="app-item">
              <div class="app-icon">📱</div>
              <span>Display Technology</span>
            </div>
            <div class="app-item">
              <div class="app-icon">🔬</div>
              <span>Optical Sensors</span>
            </div>
            <div class="app-item">
              <div class="app-icon">🛰️</div>
              <span>Space Materials</span>
            </div>
            <div class="app-item">
              <div class="app-icon">⚡</div>
              <span>Smart Materials</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Research Section -->
  <section id="research" class="research-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Research Focus</h2>
        <p class="section-subtitle">Exploring the frontiers of liquid crystal science</p>
      </div>

      <div class="research-grid">
        <div class="research-card" *ngFor="let project of researchProjects; let i = index">
          <div class="card-header">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path [attr.d]="project.icon"/>
              </svg>
            </div>
            <h3 class="card-title">{{ project.title }}</h3>
          </div>
          <p class="card-description">{{ project.description }}</p>
          <div class="card-metrics">
            <div class="metric">
              <span class="metric-value">{{ project.impact }}</span>
              <span class="metric-label">Impact Score</span>
            </div>
            <div class="metric">
              <span class="metric-value">{{ project.publications }}</span>
              <span class="metric-label">Publications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section id="team" class="team-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Research Team</h2>
        <p class="section-subtitle">Leading scientists advancing liquid crystal research</p>
      </div>

      <div class="team-leader">
        <div class="leader-card">
          <div class="leader-photo">
            <img src="https://via.placeholder.com/200x200/1e3a8a/ffffff?text=Dr.NC" alt="Dr. Nattaporn Chattam">
          </div>
          <div class="leader-info">
            <h3 class="leader-name">Assoc. Prof. Dr. Nattaporn Chattam</h3>
            <p class="leader-title">Principal Investigator & Project Director</p>
            <p class="leader-affiliation">Department of Physics, Faculty of Science, Kasetsart University</p>
            <p class="leader-expertise">
              Leading expert in liquid crystal physics with over 15 years of research experience. 
              Specializes in liquid crystal phase transitions, molecular dynamics, and space-based materials research.
            </p>
          </div>
        </div>
      </div>

      <div class="team-grid">
        <div class="team-card" *ngFor="let member of teamMembers">
          <div class="member-photo">
            <img [src]="member.photo" [alt]="member.name">
          </div>
          <div class="member-info">
            <h4 class="member-name">{{ member.name }}</h4>
            <p class="member-title">{{ member.title }}</p>
            <p class="member-expertise">{{ member.expertise }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Collaboration Section -->
  <section id="collaboration" class="collaboration-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">International Partnership</h2>
        <p class="section-subtitle">Collaborative excellence in space science research</p>
      </div>

      <div class="partnership-showcase">
        <div class="primary-partners">
          <div class="partner-card primary">
            <img src="/assets/Kasetsart_University_Logo_1753195321474.png" alt="Kasetsart University" class="partner-logo-large">
            <h3>Kasetsart University</h3>
            <p>Faculty of Science</p>
            <p class="partner-role">Lead Institution - Research & Development</p>
          </div>
          <div class="partnership-connector">
            <div class="connector-line"></div>
            <div class="connector-mou">Official MOU</div>
          </div>
          <div class="partner-card primary">
            <img src="/assets/NASA logo_1753195321475.png" alt="NASA" class="partner-logo-large">
            <h3>NASA</h3>
            <p>National Aeronautics and Space Administration</p>
            <p class="partner-role">Space Platform & Technical Support</p>
          </div>
        </div>

        <div class="supporting-partners">
          <div class="partner-card supporting">
            <img src="/assets/gistda emblem_1753195321473.png" alt="GISTDA" class="partner-logo-medium">
            <h4>GISTDA</h4>
            <p>Geo-Informatics and Space Technology Development Agency</p>
          </div>
          <div class="partner-card supporting">
            <img src="/assets/MHESI emblem_1753195321474.png" alt="MHESI" class="partner-logo-medium">
            <h4>MHESI</h4>
            <p>Ministry of Higher Education, Science, Research and Innovation</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2 class="section-title">Connect with TLCS</h2>
          <p class="section-subtitle">Join our mission to advance liquid crystal science</p>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div class="method-content">
                <h3>Research Center</h3>
                <p>Faculty of Science<br>Kasetsart University<br>Bangkok 10900, Thailand</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
              </div>
              <div class="method-content">
                <h3>Research Inquiries</h3>
                <p>tlcs&#64;science.ku.ac.th<br>research&#64;ku.ac.th</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <form class="form" (ngSubmit)="onSubmit()">
            <h3>Research Collaboration</h3>
            <div class="form-group">
              <input type="text" class="form-input" placeholder="Full Name" required>
            </div>
            <div class="form-group">
              <input type="email" class="form-input" placeholder="Email Address" required>
            </div>
            <div class="form-group">
              <select class="form-input" required>
                <option value="">Area of Interest</option>
                <option value="research">Research Collaboration</option>
                <option value="partnership">Academic Partnership</option>
                <option value="funding">Funding & Grants</option>
                <option value="student">Student Programs</option>
                <option value="media">Media & Press</option>
              </select>
            </div>
            <div class="form-group">
              <textarea class="form-input" rows="4" placeholder="Message" required></textarea>
            </div>
            <button type="submit" class="form-submit">
              Send Message
              <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Institutional Acknowledgments -->
        <div class="institutional-footer">
          <div class="institution-group">
            <h4>Lead Institution</h4>
            <div class="institution-detail">
              <img src="/assets/Kasetsart_University_Logo_1753195321474.png" alt="Kasetsart University">
              <div>
                <h5>Kasetsart University</h5>
                <p>Faculty of Science</p>
              </div>
            </div>
          </div>
          
          <div class="institution-group">
            <h4>Collaborative Partners</h4>
            <div class="partner-logos-footer">
              <div class="institution-detail">
                <img src="/assets/NASA logo_1753195321475.png" alt="NASA">
                <span>NASA</span>
              </div>
              <div class="institution-detail">
                <img src="/assets/gistda emblem_1753195321473.png" alt="GISTDA">
                <span>GISTDA</span>
              </div>
              <div class="institution-detail">
                <img src="/assets/MHESI emblem_1753195321474.png" alt="MHESI">
                <span>MHESI</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Research</h4>
            <ul>
              <li><a href="#science">Liquid Crystal Science</a></li>
              <li><a href="#research">Current Projects</a></li>
              <li><a href="#publications">Publications</a></li>
            </ul>
          </div>
          <div class="link-group">
            <h4>Collaboration</h4>
            <ul>
              <li><a href="#team">Research Team</a></li>
              <li><a href="#partnership">Partnerships</a></li>
              <li><a href="#opportunities">Opportunities</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-legal">
          <p>&copy; 2024 Thai Liquid Crystal in Space (TLCS) Project. Kasetsart University - NASA Collaboration.</p>
          <p>Supported by GISTDA and Ministry of Higher Education, Science, Research and Innovation (MHESI)</p>
        </div>
        <div class="footer-credits">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>

  <router-outlet />
</body>
</html>import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ResearchProject {
  title: string;
  description: string;
  impact: string;
  publications: number;
  icon: string;
}

interface TeamMember {
  name: string;
  title: string;
  expertise: string;
  photo: string;
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  date: Date;
  readTime: number;
  category: string;
  tags: string[];
  facebookPostId?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TLCS - Thai Liquid Crystal in Space Research Platform';
  isScrolled = false;
  isVisible = false;
  isMobileMenuOpen = false;

  researchProjects: ResearchProject[] = [
    {
      title: 'Microgravity Crystal Formation',
      description: 'Studying liquid crystal phase transitions and molecular self-organization in the microgravity environment of the International Space Station to understand fundamental material properties.',
      impact: '9.8',
      publications: 23,
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      title: 'Space-Based Materials Development',
      description: 'Developing advanced liquid crystal materials with enhanced properties for next-generation space technology applications and Earth-based innovations.',
      impact: '9.4',
      publications: 18,
      icon: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'
    },
    {
      title: 'Optical Device Innovation',
      description: 'Creating breakthrough optical devices and display technologies using liquid crystals formed in microgravity conditions for superior performance characteristics.',
      impact: '9.1',
      publications: 15,
      icon: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z'
    },
    {
      title: 'International Research Collaboration',
      description: 'Building comprehensive partnerships between Thai institutions and international space agencies to advance liquid crystal science and space technology.',
      impact: '9.6',
      publications: 12,
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    }
  ];

  // News properties
  currentNewsIndex = 0;
  maxNewsIndex = 0;
  selectedNews: NewsItem | null = null;
  newsGroups: NewsItem[][] = [];

  newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'TLCS ทีมไทยเตรียมความพร้อมสำหรับการทดลองบนสถานีอวกาศ ISS',
      summary: 'ทีมนักวิจัยจากมหาวิทยาลัยเกษตรศาสตร์เตรียมส่งการทดลองผลึกเหลวไปยังสถานีอวกาศนานาชาติในปี 2024',
      content: `
        <p>โครงการ Thai Liquid Crystal in Space (TLCS) กำลังเข้าสู่ช่วงเวลาสำคัญ เมื่อทีมนักวิจัยจากคณะวิทยาศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ ภายใต้การนำของ รศ.ดร.ณัฐพร ฉัตรธรรม เตรียมความพร้อมสำหรับการส่งการทดลองไปยังสถานีอวกาศนานาชาติ (ISS)</p>
        
        <p>การทดลองนี้จะศึกษาพฤติกรรมของผลึกเหลวในสภาวะไร้น้ำหนัก ซึ่งจะช่วยให้เราเข้าใจคุณสมบัติพื้นฐานของวัสดุนี้ได้ดียิ่งขึ้น และนำไปสู่การพัฒนาเทคโนโลยีใหม่ๆ ในอนาคต</p>
        
        <h3>ความสำคัญของการทดลอง</h3>
        <p>• ศึกษาการจัดตัวของโมเลกุลในสภาวะไร้แรงโน้มถ่วง</p>
        <p>• พัฒนาวัสดุใหม่สำหรับเทคโนโลจีการแสดงผล</p>
        <p>• เปิดโอกาสความร่วมมือระหว่างประเทศด้านการวิจัยอวกาศ</p>
      `,
      image: '/assets/NASA logo_1753195321475.png',
      author: 'ทีมข่าว TLCS',
      date: new Date('2024-01-15'),
      readTime: 5,
      category: 'การวิจัย',
      tags: ['ISS', 'ผลึกเหลว', 'อวกาศ', 'NASA'],
      facebookPostId: 'sample_post_1'
    },
    {
      id: '2',
      title: 'ความร่วมมือไทย-NASA: ก้าวสำคัญสู่การวิจัยอวกาศระดับโลก',
      summary: 'บันทึกข้อตกลง MOU ระหว่างมหาวิทยาลัยเกษตรศาสตร์และ NASA เพื่อพัฒนาการวิจัยวิทยาศาสตร์อวกาศ',
      content: `
        <p>การลงนามในบันทึกข้อตกลงความร่วมมือ (MOU) ระหว่างมหาวิทยาลัยเกษตรศาสตร์และองค์การนาซ่า (NASA) ถือเป็นก้าวสำคัญในการพัฒนาศักยภาพด้านการวิจัยวิทยาศาสตร์อวกาศของประเทศไทย</p>
        
        <p>ความร่วมมือนี้จะเปิดโอกาสให้นักศึกษาและนักวิจัยไทยได้เข้าถึงเทคโนโลยีและองค์ความรูร้ะดับโลก พร้อมทั้งสร้างเครือข่ายการวิจัยระหว่างประเทศที่แข็งแกร่ง</p>
      `,
      image: '/assets/Kasetsart_University_Logo_1753195321474.png',
      author: 'สำนักข่าวมหาวิทยาลัย',
      date: new Date('2024-01-10'),
      readTime: 3,
      category: 'ความร่วมมือ',
      tags: ['NASA', 'MOU', 'ความร่วมมือ', 'การวิจัย'],
      facebookPostId: 'sample_post_2'
    },
    {
      id: '3',
      title: 'GISTDA สนับสนุนโครงการ TLCS ด้วยเทคโนโลยีขั้นสูง',
      summary: 'สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (GISTDA) เข้าร่วมสนับสนุนโครงการวิจัยผลึกเหลวในอวกาศ',
      content: `
        <p>สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (GISTDA) ได้เข้าร่วมเป็นพาร์ทเนอร์สำคัญในโครงการ TLCS โดยให้การสนับสนุนด้านเทคโนโลยีและความเชี่ยวชาญด้านการวิจัยอวกาศ</p>
        
        <p>การสนับสนุนจาก GISTDA จะช่วยเสริมความแข็งแกร่งให้กับโครงการในด้านการวิเคราะห์ข้อมูลและการพัฒนาเครื่องมือวิจัย</p>
      `,
      image: '/assets/gistda emblem_1753195321473.png',
      author: 'GISTDA Communications',
      date: new Date('2024-01-08'),
      readTime: 4,
      category: 'พาร์ทเนอร์',
      tags: ['GISTDA', 'เทคโนโลยี', 'อวกาศ', 'สนับสนุน'],
      facebookPostId: 'sample_post_3'
    },
    {
      id: '4',
      title: 'กระทรวงอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม หนุน TLCS',
      summary: 'กระทรวงอุดมศึกษาฯ ให้การสนับสนุนงบประมาณและนโยบายสำหรับโครงการวิจัยผลึกเหลวในอวกาศ',
      content: `
        <p>กระทรวงอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.) ได้ให้การสนับสนุนโครงการ TLCS ในด้านงบประมาณและการกำหนดนโยบายเพื่อส่งเสริมการวิจัยวิทยาศาสตร์และเทคโนโลยีอวกาศของประเทศ</p>
        
        <p>การสนับสนุนนี้แสดงให้เห็นถึงความมุ่งมั่นของรัฐบาลในการพัฒนาศักยภาพด้านวิทยาศาสตร์และเทคโนโลยีของประเทศไทย</p>
      `,
      image: '/assets/MHESI emblem_1753195321474.png',
      author: 'กระทรวง อว.',
      date: new Date('2024-01-05'),
      readTime: 3,
      category: 'นโยบาย',
      tags: ['กระทรวง', 'งบประมาณ', 'นโยบาย', 'สนับสนุน'],
      facebookPostId: 'sample_post_4'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Siriporn Kiatkirakajorn',
      title: 'Senior Research Scientist',
      expertise: 'Liquid Crystal Physics, Molecular Dynamics',
      photo: 'https://via.placeholder.com/300x300/1e3a8a/ffffff?text=SK'
    },
    {
      name: 'Dr. Waraporn Suvanvej',
      title: 'Space Systems Engineer',
      expertise: 'Microgravity Experiments, ISS Operations',
      photo: 'https://via.placeholder.com/300x300/1e3a8a/ffffff?text=WS'
    },
    {
      name: 'Dr. Thana Chotpantarat',
      title: 'Data Analysis Lead',
      expertise: 'Computational Physics, Space Environment Modeling',
      photo: 'https://via.placeholder.com/300x300/1e3a8a/ffffff?text=TC'
    },
    {
      name: 'Dr. Piyapong Janphuang',
      title: 'Materials Specialist',
      expertise: 'Advanced Materials, Crystallography',
      photo: 'https://via.placeholder.com/300x300/1e3a8a/ffffff?text=PJ'
    }
  ];

  ngOnInit(): void {
    this.observeElements();
    this.initScrollAnimations();
    this.initializeNews();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.pageYOffset > 50;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  onSubmit(): void {
    console.log('Research collaboration form submitted');
  }

  // News functionality
  initializeNews(): void {
    // Group news items into slides (3 items per slide for desktop)
    const itemsPerSlide = 3;
    this.newsGroups = [];
    
    for (let i = 0; i < this.newsItems.length; i += itemsPerSlide) {
      this.newsGroups.push(this.newsItems.slice(i, i + itemsPerSlide));
    }
    
    this.maxNewsIndex = this.newsGroups.length - 1;
    
    // Auto-slide news every 8 seconds
    setInterval(() => {
      this.nextNews();
    }, 8000);
  }

  previousNews(): void {
    if (this.currentNewsIndex > 0) {
      this.currentNewsIndex--;
    } else {
      this.currentNewsIndex = this.maxNewsIndex;
    }
  }

  nextNews(): void {
    if (this.currentNewsIndex < this.maxNewsIndex) {
      this.currentNewsIndex++;
    } else {
      this.currentNewsIndex = 0;
    }
  }

  goToNewsSlide(index: number): void {
    this.currentNewsIndex = index;
  }

  openNewsDetail(news: NewsItem): void {
    this.selectedNews = news;
    document.body.style.overflow = 'hidden';
  }

  closeNewsModal(): void {
    this.selectedNews = null;
    document.body.style.overflow = 'auto';
  }

  formatDate(date: Date): { day: string, month: string } {
    const day = date.getDate().toString().padStart(2, '0');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const month = months[date.getMonth()];
    return { day, month };
  }

  formatFullDate(date: Date): string {
    const day = date.getDate();
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 
                   'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    const month = months[date.getMonth()];
    const year = date.getFullYear() + 543; // Convert to Buddhist year
    return `${day} ${month} ${year}`;
  }

  // Social sharing methods
  shareToFacebook(news: NewsItem): void {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(news.title)}`;
    this.openShareWindow(url);
  }

  shareToTwitter(news: NewsItem): void {
    const text = `${news.title} - TLCS Project`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    this.openShareWindow(url);
  }

  shareToLine(news: NewsItem): void {
    const text = `${news.title} - TLCS Project ${window.location.href}`;
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(text)}`;
    this.openShareWindow(url);
  }

  private openShareWindow(url: string): void {
    window.open(url, 'share', 'width=600,height=400,scrollbars=no,resizable=no');
  }

  private observeElements(): void {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            this.isVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      const elementsToObserve = document.querySelectorAll('.mission-card, .research-card, .team-card, .detail-card');
      elementsToObserve.forEach(el => observer.observe(el));
    }, 100);
  }

  private initScrollAnimations(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const parallaxElements = document.querySelectorAll('.space-particles, .crystal-animation');

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;

      parallaxElements.forEach((element: any) => {
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }
}import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ResearchProject {
  title: string;
  description: string;
  impact: string;
  publications: number;
  icon: string;
}

interface TeamMember {
  name: string;
  title: string;
  expertise: string;
  photo: string;
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  date: Date;
  readTime: number;
  category: string;
  tags: string[];
  facebookPostId?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TLCS - Thai Liquid Crystal in Space Research Platform';
  isScrolled = false;
  isVisible = false;
  isMobileMenuOpen = false;

  researchProjects: ResearchProject[] = [
    {
      title: 'Microgravity Crystal Formation',
      description: 'Studying liquid crystal phase transitions and molecular self-organization in the microgravity environment of the International Space Station to understand fundamental material properties.',
      impact: '9.8',
      publications: 23,
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      title: 'Space-Based Materials Development',
      description: 'Developing advanced liquid crystal materials with enhanced properties for next-generation space technology applications and Earth-based innovations.',
      impact: '9.4',
      publications: 18,
      icon: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'
    },
    {
      title: 'Optical Device Innovation',
      description: 'Creating breakthrough optical devices and display technologies using liquid crystals formed in microgravity conditions for superior performance characteristics.',
      impact: '9.1',
      publications: 15,
      icon: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z'
    },
    {
      title: 'International Research Collaboration',
      description: 'Building comprehensive partnerships between Thai institutions and international space agencies to advance liquid crystal science and space technology.',
      impact: '9.6',
      publications: 12,
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    }
  ];

  // News properties
  currentNewsIndex = 0;
  maxNewsIndex = 0;
  selectedNews: NewsItem | null = null;
  newsGroups: NewsItem[][] = [];

  newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'TLCS ทีมไทยเตรียมความพร้อมสำหรับการทดลองบนสถานีอวกาศ ISS',
      summary: 'ทีมนักวิจัยจากมหาวิทยาลัยเกษตรศาสตร์เตรียมส่งการทดลองผลึกเหลวไปยังสถานีอวกาศนานาชาติในปี 2024',
      content: `
        <p>โครงการ Thai Liquid Crystal in Space (TLCS) กำลังเข้าสู่ช่วงเวลาสำคัญ เมื่อทีมนักวิจัยจากคณะวิทยาศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ ภายใต้การนำของ รศ.ดร.ณัฐพร ฉัตรธรรม เตรียมความพร้อมสำหรับการส่งการทดลองไปยังสถานีอวกาศนานาชาติ (ISS)</p>
        
        <p>การทดลองนี้จะศึกษาพฤติกรรมของผลึกเหลวในสภาวะไร้น้ำหนัก ซึ่งจะช่วยให้เราเข้าใจคุณสมบัติพื้นฐานของวัสดุนี้ได้ดียิ่งขึ้น และนำไปสู่การพัฒนาเทคโนโลยีใหม่ๆ ในอนาคต</p>
        
        <h3>ความสำคัญของการทดลอง</h3>
        <p>• ศึกษาการจัดตัวของโมเลกุลในสภาวะไร้แรงโน้มถ่วง</p>
        <p>• พัฒนาวัสดุใหม่สำหรับเทคโนโลジีการแสดงผล</p>
        <p>• เปิดโอกาสความร่วมมือระหว่างประเทศด้านการวิจัยอวกาศ</p>
      `,
      image: '/assets/NASA logo_1753195321475.png',
      author: 'ทีมข่าว TLCS',
      date: new Date('2024-01-15'),
      readTime: 5,
      category: 'การวิจัย',
      tags: ['ISS', 'ผลึกเหลว', 'อวกาศ', 'NASA'],
      facebookPostId: 'sample_post_1'
    },
    {
      id: '2',
      title: 'ความร่วมมือไทย-NASA: ก้าวสำคัญสู่การวิจัยอวกาศระดับโลก',
      summary: 'บันทึกข้อตกลง MOU ระหว่างมหาวิทยาลัยเกษตรศาสตร์และ NASA เพื่อพัฒนาการวิจัยวิทยาศาสตร์อวกาศ',
      content: `
        <p>การลงนามในบันทึกข้อตกลงความร่วมมือ (MOU) ระหว่างมหาวิทยาลัยเกษตรศาสตร์และองค์การนาซ่า (NASA) ถือเป็นก้าวสำคัญในการพัฒนาศักยภาพด้านการวิจัยวิทยาศาสตร์อวกาศของประเทศไทย</p>
        
        <p>ความร่วมมือนี้จะเปิดโอกาสให้นักศึกษาและนักวิจัยไทยได้เข้าถึงเทคโนโลยีและองค์ความรูร้ะดับโลก พร้อมทั้งสร้างเครือข่ายการวิจัยระหว่างประเทศที่แข็งแกร่ง</p>
      `,
      image: '/assets/Kasetsart_University_Logo_1753195321474.png',
      author: 'สำนักข่าวมหาวิทยาลัย',
      date: new Date('2024-01-10'),
      readTime: 3,
      category: 'ความร่วมมือ',
      tags: ['NASA', 'MOU', 'ความร่วมมือ', 'การวิจัย'],
      facebookPostId: 'sample_post_2'
    },
    {
      id: '3',
      title: 'GISTDA สนับสนุนโครงการ TLCS ด้วยเทคโนโลยีขั้นสูง',
      summary: 'สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (GISTDA) เข้าร่วมสนับสนุนโครงการวิจัยผลึกเหลวในอวกาศ',
      content: `
        <p>สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (GISTDA) ได้เข้าร่วมเป็นพาร์ทเนอร์สำคัญในโครงการ TLCS โดยให้การสนับสนุนด้านเทคโนโลยีและความเชี่ยวชาญด้านการวิจัยอวกาศ</p>
        
        <p>การสนับสนุนจาก GISTDA จะช่วยเสริมความแข็งแกร่งให้กับโครงการในด้านการวิเคราะห์ข้อมูลและการพัฒนาเครื่องมือวิจัย</p>
      `,
      image: '/assets/gistda emblem_1753195321473.png',
      author: 'GISTDA Communications',
      date: new Date('2024-01-08'),
      readTime: 4,
      category: 'พาร์ทเนอร์',
      tags: ['GISTDA', 'เทคโนโลยี', 'อวกาศ', 'สนับสนุน'],
      facebookPostId: 'sample_post_3'
    },
    {
      id: '4',
      title: 'กระทรวงอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม หนุน TLCS',
      summary: 'กระทรวงอุดมศึกษาฯ ให้การสนับสนุนงบประมาณและนโยบายสำหรับโครงการวิจัยผลึกเหลวในอวกาศ',
      content: `
        <p>กระทรวงอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.) ได้ให้การสนับสนุนโครงการ TLCS ในด้านงบประมาณและการกำหนดนโยบายเพื่อส่งเสริมการวิจัยวิทยาศาสตร์และเทคโนโลยีอวกาศของประเทศ</p>
        
        <p>การสนับสนุนนี้แสดงให้เห็นถึงความมุ่งมั่นของรัฐบาลในการพัฒนาศักยภาพด้านวิทยาศาสตร์และเทคโนโลยีของประเทศไทย</p>
      `,
      image: '/assets/MHESI emblem_1753195321474.png',
      author: 'กระทรวง อว.',
      date: new Date('2024-01-05'),
      readTime: 3,
      category: 'นโยบาย',
      tags: ['กระทรวง', 'งบประมาณ', 'นโยบาย', 'สนับสนุน'],
      facebookPostId: 'sample_post_4'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Siriporn Kiatkirakajorn',
      title: 'Senior Research Scientist',
      expertise: 'Liquid Crystal Physics, Molecular Dynamics',
      photo: 'https://via.placeholder.com/300x300/1e3a8a/ffffff?text=SK'
    },
    {
      name: 'Dr. Waraporn Suvanvej',
      title: 'Space Systems Engineer',
      expertise: 'Microgravity Experiments, ISS Operations',
      photo: 'https://via.placeholder.com/300x300/1e3a8a/ffffff?text=WS'
    },
    {
      name: 'Dr. Thana Chotpantarat',
      title: 'Data Analysis Lead',
      expertise: 'Computational Physics, Space Environment Modeling',
      photo: 'https://via.placeholder.com/300x300/1e3a8a/ffffff?text=TC'
    },
    {
      name: 'Dr. Piyapong Janphuang',
      title: 'Materials Specialist',
      expertise: 'Advanced Materials, Crystallography',
      photo: 'https://via.placeholder.com/300x300/1e3a8a/ffffff?text=PJ'
    }
  ];

  ngOnInit(): void {
    this.observeElements();
    this.initScrollAnimations();
    this.initializeNews();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.pageYOffset > 50;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  onSubmit(): void {
    console.log('Research collaboration form submitted');
  }

  // News functionality
  initializeNews(): void {
    // Group news items into slides (3 items per slide for desktop)
    const itemsPerSlide = 3;
    this.newsGroups = [];
    
    for (let i = 0; i < this.newsItems.length; i += itemsPerSlide) {
      this.newsGroups.push(this.newsItems.slice(i, i + itemsPerSlide));
    }
    
    this.maxNewsIndex = this.newsGroups.length - 1;
    
    // Auto-slide news every 8 seconds
    setInterval(() => {
      this.nextNews();
    }, 8000);
  }

  previousNews(): void {
    if (this.currentNewsIndex > 0) {
      this.currentNewsIndex--;
    } else {
      this.currentNewsIndex = this.maxNewsIndex;
    }
  }

  nextNews(): void {
    if (this.currentNewsIndex < this.maxNewsIndex) {
      this.currentNewsIndex++;
    } else {
      this.currentNewsIndex = 0;
    }
  }

  goToNewsSlide(index: number): void {
    this.currentNewsIndex = index;
  }

  openNewsDetail(news: NewsItem): void {
    this.selectedNews = news;
    document.body.style.overflow = 'hidden';
  }

  closeNewsModal(): void {
    this.selectedNews = null;
    document.body.style.overflow = 'auto';
  }

  formatDate(date: Date): { day: string, month: string } {
    const day = date.getDate().toString().padStart(2, '0');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const month = months[date.getMonth()];
    return { day, month };
  }

  formatFullDate(date: Date): string {
    const day = date.getDate();
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 
                   'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    const month = months[date.getMonth()];
    const year = date.getFullYear() + 543; // Convert to Buddhist year
    return `${day} ${month} ${year}`;
  }

  // Social sharing methods
  shareToFacebook(news: NewsItem): void {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(news.title)}`;
    this.openShareWindow(url);
  }

  shareToTwitter(news: NewsItem): void {
    const text = `${news.title} - TLCS Project`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    this.openShareWindow(url);
  }

  shareToLine(news: NewsItem): void {
    const text = `${news.title} - TLCS Project ${window.location.href}`;
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(text)}`;
    this.openShareWindow(url);
  }

  private openShareWindow(url: string): void {
    window.open(url, 'share', 'width=600,height=400,scrollbars=no,resizable=no');
  }

  private observeElements(): void {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            this.isVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      const elementsToObserve = document.querySelectorAll('.mission-card, .research-card, .team-card, .detail-card');
      elementsToObserve.forEach(el => observer.observe(el));
    }, 100);
  }

  private initScrollAnimations(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const parallaxElements = document.querySelectorAll('.space-particles, .crystal-animation');

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;

      parallaxElements.forEach((element: any) => {
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }
}