import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'TLC - Thailand Liquid Crystal in Space Research Platform';
  isScrolled = false;
  isVisible = false;
  isMobileMenuOpen = false;
  searchQuery = '';
  selectedCategory = 'All';
  categories: string[] = ['All', 'การวิจัย', 'ความร่วมมือ', 'พาร์ทเนอร์', 'นโยบาย'];
  newsGroups: NewsItem[][] = [];
  filteredNewsGroups: NewsItem[][] = [];
  currentNewsIndex = 0;
  maxNewsIndex = 0;
  selectedNews: NewsItem | null = null;
  formData = {
    name: '',
    email: '',
    areaOfInterest: '',
    message: ''
  };

  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Apichart Pattanapokratana',
      title: 'Co-Principal Investigator',
      expertise: 'Liquid Crystal Physics, Molecular Dynamics',
      photo: '/assets/dr-apichart.jpg'
    },
    {
      name: 'Dr. Natthawat Hongkarnjanakul',
      title: 'Director of Space Technology Development office, GISTDA',
      expertise: 'Gistda, Space Technology',
      photo: '/assets/Natthawat-Hongkarnjanakul.jpg'
    }
  ];

  newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'TLC ทีมไทยเตรียมความพร้อมสำหรับการทดลองบนสถานีอวกาศ ISS',
      summary: 'ทีมนักวิจัยจากมหาวิทยาลัยเกษตรศาสตร์เตรียมส่งการทดลองผลึกเหลวไปยังสถานีอวกาศนานาชาติในปี 2024',
      content: `
        <p>โครงการ Thailand Liquid Crystal in Space (TLC) กำลังเข้าสู่ช่วงเวลาสำคัญ เมื่อทีมนักวิจัยจากคณะวิทยาศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ ภายใต้การนำของ รศ.ดร.ณัฐพร ฉัตรธรรม เตรียมความพร้อมสำหรับการส่งการทดลองไปยังสถานีอวกาศนานาชาติ (ISS)</p>

        <p>การทดลองนี้จะศึกษาพฤติกรรมของผลึกเหลวในสภาวะไร้น้ำหนัก ซึ่งจะช่วยให้เราเข้าใจคุณสมบัติพื้นฐานของวัสดุนี้ได้ดียิ่งขึ้น และนำไปสู่การพัฒนาเทคโนโลยีใหม่ๆ ในอนาคต</p>

        <h3>ความสำคัญของการทดลอง</h3>
        <p>• ศึกษาการจัดตัวของโมเลกุลในสภาวะไร้แรงโน้มถ่วง</p>
        <p>• พัฒนาวัสดุใหม่สำหรับเทคโนโลจีการแสดงผล</p>
        <p>• เปิดโอกาสความร่วมมือระหว่างประเทศด้านการวิจัยอวกาศ</p>
      `,
      image: '/assets/NASA logo_1753195321475.png',
      author: 'ทีมข่าว TLC',
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

        <p>ความร่วมมือนี้จะเปิดโอกาสให้นักศึกษาและนักวิจัยไทยได้เข้าถึงเทคโนโลยีและองค์ความรู้ระดับโลก พร้อมทั้งสร้างเครือข่ายการวิจัยระหว่างประเทศที่แข็งแกร่ง</p>
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
      title: 'GISTDA สนับสนุนโครงการ TLC ด้วยเทคโนโลยีขั้นสูง',
      summary: 'สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (GISTDA) เข้าร่วมสนับสนุนโครงการวิจัยผลึกเหลวในอวกาศ',
      content: `
        <p>สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (GISTDA) ได้เข้าร่วมเป็นพาร์ทเนอร์สำคัญในโครงการ TLC โดยให้การสนับสนุนด้านเทคโนโลยีและความเชี่ยวชาญด้านการวิจัยอวกาศ</p>

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
      title: 'กระทรวงอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม หนุน TLC',
      summary: 'กระทรวงอุดมศึกษาฯ ให้การสนับสนุนงบประมาณและนโยบายสำหรับโครงการวิจัยผลึกเหลวในอวกาศ',
      content: `
        <p>กระทรวงอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.) ได้ให้การสนับสนุนโครงการ TLC ในด้านงบประมาณและการกำหนดนโยบายเพื่อส่งเสริมการวิจัยวิทยาศาสตร์และเทคโนโลยีอวกาศของประเทศ</p>

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

  @ViewChild('newsSlider') newsSlider!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.initializeNews();
    this.initScrollAnimations();
  }

  ngAfterViewInit(): void {
    this.observeElements();
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
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = { name: '', email: '', areaOfInterest: '', message: '' };
  }

  // News functionality
  initializeNews(): void {
    // Group news items into slides (3 items per slide for desktop)
    const itemsPerSlide = 3;
    this.newsGroups = [];

    for (let i = 0; i < this.newsItems.length; i += itemsPerSlide) {
      this.newsGroups.push(this.newsItems.slice(i, i + itemsPerSlide));
    }
    this.filteredNewsGroups = [...this.newsGroups];
    this.maxNewsIndex = this.filteredNewsGroups.length - 1;

    // Auto-slide news every 8 seconds
    if (typeof window !== 'undefined') {
      setInterval(() => {
        this.nextNews();
      }, 8000);
    }
  }

  onSearchChange(): void {
    this.filterNews();
  }

  onCategoryChange(): void {
    this.filterNews();
  }

  filterNews(): void {
    this.filteredNewsGroups = this.newsGroups.map(group =>
      group.filter(news =>
        (!this.searchQuery || news.title.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
        (this.selectedCategory === 'All' || news.category === this.selectedCategory)
      )
    ).filter(group => group.length > 0);
    this.currentNewsIndex = 0;
    this.maxNewsIndex = this.filteredNewsGroups.length - 1 || 0;
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
    if (index >= 0 && index <= this.maxNewsIndex) {
      this.currentNewsIndex = index;
    }
  }

  openNewsDetail(news: NewsItem): void {
    this.selectedNews = news;
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeNewsModal(): void {
    this.selectedNews = null;
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }

  formatDate(date?: Date | null): { day: string, month: string } | null {
    if (!date) return null;
    const day = date.getDate().toString().padStart(2, '0');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const month = months[date.getMonth()];
    return { day, month };
  }

  formatFullDate(date?: Date | null): string {
    if (!date) return '';
    const day = date.getDate();
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    const month = months[date.getMonth()];
    const year = date.getFullYear() + 543; // Convert to Buddhist year
    return `${day} ${month} ${year}`;
  }

  // Social sharing methods
  shareToFacebook(news: NewsItem): void {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&t=${encodeURIComponent(news.title)}`;
    this.openShareWindow(url);
  }

  shareToTwitter(news: NewsItem): void {
    const text = `${news.title} - TLC Project`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    this.openShareWindow(url);
  }

  shareToLine(news: NewsItem): void {
    const text = `${news.title} - TLC Project ${window.location.href}`;
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(text)}`;
    this.openShareWindow(url);
  }

  private openShareWindow(url: string): void {
    if (typeof window !== 'undefined') {
      window.open(url, 'share', 'width=600,height=400,scrollbars=no,resizable=no');
    }
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

    const elementsToObserve = document.querySelectorAll('.mission-card, .research-card, .team-card, .detail-card');
    elementsToObserve.forEach(el => observer.observe(el));
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

  // Sanitize SVG icon
  sanitizeSvg(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  activeModal: string | null = null;

  openModal(section: string) {
    this.activeModal = section;
  }

  closeModal() {
    this.activeModal = null;
  }

  goToPage(section: string) {
    this.closeModal();
    this.scrollToSection(section); // หรือใช้ router.navigate ถ้าเป็น route จริง
  }

  highlights = [
    {
      image: '/assets/20250616_170948-1024x577.jpg',
      title: 'โครงการ Thailand Liquid Crystals in Space (TLC) พร้อมขึ้นสู่อวกาศในเดือนกันยายน 2568 นี้',
      summary: 'โครงการ Thailand Liquid Crystal in Space (TLC) จะเริ่มต้นขึ้นในเดือนกันยายน 2568 นี้ โดยมีพันธมิตรจากนานาชาติร่วมมือกัน.'
    },
    // เพิ่ม highlight อื่นๆ ได้
  ];
  highlightIndex = 0;

  prevHighlight() {
    if (this.highlightIndex > 0) this.highlightIndex--;
  }
  nextHighlight() {
    if (this.highlightIndex < this.highlights.length - 1) this.highlightIndex++;
  }
  goToHighlight(i: number) {
    this.highlightIndex = i;
  }

  topImages = [https://www.facebook.com/TLCinspace
    { src: '/assets/TLCBackground.png', link: 'https://www.facebook.com/TLCinspace' },
    { src: '/assets/20250616_170948-1024x577.jpg', link: 'https://www.facebook.com/photo/?fbid=122268560354069639&set=a.122101870682069639' },
    // เพิ่มภาพและลิ้งค์อื่นๆ ได้
  ];
  topImageIndex = 0;

  prevTopImage() {
    if (this.topImageIndex > 0) this.topImageIndex--;
  }
  nextTopImage() {
    if (this.topImageIndex < this.topImages.length - 1) this.topImageIndex++;
  }
  onTopImageClick(image: {src: string, link: string}) {
    // สามารถเพิ่ม event log หรือ analytics ได้ถ้าต้องการ
  }
}
