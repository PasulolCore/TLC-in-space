
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

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface TeamMember {
  name: string;
  title: string;
  expertise: string;
  photo: string;
  email: string;
  linkedin: string;
  publications: number;
  citations: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Thai Liquid Crystal in Space - TLCS Research Platform';
  isScrolled = false;
  isVisible = false;
  isMobileMenuOpen = false;

  researchProjects: ResearchProject[] = [
    {
      title: 'Microgravity Liquid Crystal Physics',
      description: 'Investigating liquid crystal phase transitions and molecular self-organization in the unique microgravity environment of the ISS to unlock new material properties.',
      impact: '9.8',
      publications: 23,
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      title: 'Space-Based Materials Science',
      description: 'Studying crystallization processes and phase behavior of liquid crystals without gravitational interference to advance fundamental physics understanding.',
      impact: '9.4',
      publications: 18,
      icon: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'
    },
    {
      title: 'Advanced Optoelectronics',
      description: 'Developing next-generation liquid crystal displays and optical devices through microgravity-enhanced crystal formation and alignment studies.',
      impact: '8.9',
      publications: 15,
      icon: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z'
    },
    {
      title: 'International Space Collaboration',
      description: 'Building partnerships with global space agencies and research institutions to expand liquid crystal research capabilities in space environments.',
      impact: '9.1',
      publications: 12,
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    }
  ];

  milestones: Milestone[] = [
    {
      year: '2020',
      title: 'Space Research Initiative',
      description: 'Launched the Thai Liquid Crystal in Space project in collaboration with international space agencies.',
      icon: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'
    },
    {
      year: '2021',
      title: 'Quantum Lab Establishment',
      description: 'Established state-of-the-art quantum materials research laboratory with advanced characterization facilities.',
      icon: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z'
    },
    {
      year: '2022',
      title: 'International Collaboration',
      description: 'Formed strategic partnerships with leading universities and research institutions worldwide.',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    },
    {
      year: '2023',
      title: 'Breakthrough Discovery',
      description: 'Published groundbreaking research on liquid crystal behavior in microgravity, opening new frontiers in materials science.',
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
    },
    {
      year: '2024',
      title: 'Technology Transfer',
      description: 'Successfully transferred research innovations to industry partners, creating real-world applications and economic impact.',
      icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Prof. Dr. Nathaporn Chattham',
      title: 'Principal Investigator & Project Director',
      expertise: 'Liquid Crystal Physics, Microgravity Science, Space Research',
      photo: 'https://via.placeholder.com/300x300/1e40af/ffffff?text=NC',
      email: 'mailto:nathaporn.c@ku.ac.th',
      linkedin: 'https://linkedin.com/in/nathaporn-chattham',
      publications: 87,
      citations: 2340
    },
    {
      name: 'Dr. Waraporn Suvanvej',
      title: 'Lead Space Systems Engineer',
      expertise: 'Spacecraft Integration, Microgravity Experiments, ISS Operations',
      photo: 'https://via.placeholder.com/300x300/1e40af/ffffff?text=WS',
      email: 'mailto:waraporn.s@ku.ac.th',
      linkedin: 'https://linkedin.com/in/waraporn-suvanvej',
      publications: 45,
      citations: 1567
    },
    {
      name: 'Dr. Siriporn Kiatkirakajorn',
      title: 'Liquid Crystal Specialist',
      expertise: 'Molecular Physics, Phase Transitions, Optical Materials',
      photo: 'https://via.placeholder.com/300x300/1e40af/ffffff?text=SK',
      email: 'mailto:siriporn.k@ku.ac.th',
      linkedin: 'https://linkedin.com/in/siriporn-kiatkirakajorn',
      publications: 64,
      citations: 1890
    },
    {
      name: 'Dr. Thana Chotpantarat',
      title: 'Data Analysis & Modeling Lead',
      expertise: 'Computational Physics, Data Science, Space Environment Modeling',
      photo: 'https://via.placeholder.com/300x300/1e40af/ffffff?text=TC',
      email: 'mailto:thana.c@ku.ac.th',
      linkedin: 'https://linkedin.com/in/thana-chotpantarat',
      publications: 38,
      citations: 1245
    }
  ];

  ngOnInit(): void {
    // Initialize intersection observer for animations
    this.observeElements();
    
    // Initialize scroll-based animations
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
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  onSubmit(): void {
    // Handle form submission
    console.log('Form submitted');
  }

  private observeElements(): void {
    // Check if we're in the browser environment
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

    // Observe research cards and team cards
    setTimeout(() => {
      const elementsToObserve = document.querySelectorAll('.research-card, .team-card, .timeline-item');
      elementsToObserve.forEach(el => observer.observe(el));
    }, 100);
  }

  private initScrollAnimations(): void {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') {
      return;
    }

    // Initialize additional scroll-based animations
    const parallaxElements = document.querySelectorAll('.hero-background, .orbital-system');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach((element: any) => {
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }
}
