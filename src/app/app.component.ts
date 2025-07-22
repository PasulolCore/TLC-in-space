import { Component, OnInit, HostListener } from '@angular/core';
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