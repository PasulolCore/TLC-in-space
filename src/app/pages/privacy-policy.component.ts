import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="tlcs-frontiers-theme">
      <div class="privacy-policy-page">
        <div class="container">
          <div class="page-header">
            <nav class="breadcrumb">
              <a routerLink="/" class="breadcrumb-link">Home</a>
              <span class="breadcrumb-separator">></span>
              <span class="breadcrumb-current">Privacy Policy</span>
            </nav>
            <h1 class="page-title">Privacy Policy</h1>
            <p class="page-subtitle">Thailand Liquid Crystal in Space Research Project</p>
            <div class="page-divider"></div>
          </div>

          <div class="privacy-content">
            <div class="content-section">
              <h2>Introduction</h2>
              <p>
                The Thailand Liquid Crystal in Space (TLC) research project is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, and protect information when you interact with our research platform and website.
              </p>
            </div>

            <div class="content-section">
              <h2>Information We Collect</h2>
              <h3>Research Collaboration Information</h3>
              <ul>
                <li>Name and professional title</li>
                <li>Email address and institutional affiliation</li>
                <li>Research interests and collaboration inquiries</li>
                <li>Academic and professional background</li>
              </ul>

              <h3>Website Usage Information</h3>
              <ul>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring websites and search terms</li>
                <li>Device information and IP address</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>Facilitating research collaboration and academic partnerships</li>
                <li>Responding to inquiries about our research projects</li>
                <li>Improving our website and research platform</li>
                <li>Sharing research updates and findings with interested researchers</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul>
                <li>With partner institutions for legitimate research collaboration purposes</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>With service providers who assist in operating our website (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encrypted data transmission and storage</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for data processing (where applicable)</li>
                <li>File a complaint with relevant data protection authorities</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>International Data Transfers</h2>
              <p>
                As our research involves international collaboration with NASA and other global institutions, 
                your information may be transferred to and processed in countries outside Thailand. 
                We ensure appropriate safeguards are in place for such transfers.
              </p>
            </div>

            <div class="content-section">
              <h2>Contact Information</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights regarding your personal information, 
                please contact us:
              </p>
              <div class="contact-info">
                <p><strong>Email:</strong> lc2021.physicsku&#64;gmail.com</p>
                <p><strong>Address:</strong> Department of Physics, Faculty of Science, Kasetsart University<br>
                Bangkok 10900, Thailand</p>
              </div>
            </div>

            <div class="content-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by posting the updated policy on our website with the effective date.
              </p>
              <p><strong>Last Updated:</strong> January 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .privacy-policy-page {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      min-height: 100vh;
      padding: var(--space-4xl) 0;
    }

    .page-header {
      text-align: center;
      margin-bottom: var(--space-4xl);
    }

    .breadcrumb {
      margin-bottom: var(--space-lg);
      font-size: 0.875rem;
    }

    .breadcrumb-link {
      color: var(--ku-blue);
      text-decoration: none;
      transition: color var(--transition-normal);
    }

    .breadcrumb-link:hover {
      color: #1e40af;
      text-decoration: underline;
    }

    .breadcrumb-separator {
      margin: 0 var(--space-sm);
      color: var(--space-gray-500);
    }

    .breadcrumb-current {
      color: var(--space-gray-700);
    }

    .page-title {
      font-size: 3rem;
      font-weight: 800;
      color: var(--space-gray-900);
      margin: 0 0 var(--space-sm) 0;
      background: var(--gradient-primary);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .page-subtitle {
      font-size: 1.25rem;
      color: var(--space-gray-600);
      margin: 0 0 var(--space-xl) 0;
    }

    .page-divider {
      width: 100px;
      height: 4px;
      background: var(--gradient-primary);
      margin: 0 auto;
      border-radius: 2px;
    }

    .privacy-content {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      border-radius: 24px;
      padding: var(--space-4xl);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(0, 0, 0, 0.04);
    }

    .content-section {
      margin-bottom: var(--space-3xl);
    }

    .content-section:last-child {
      margin-bottom: 0;
    }

    .content-section h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--space-gray-900);
      margin: 0 0 var(--space-lg) 0;
      padding-bottom: var(--space-sm);
      border-bottom: 2px solid var(--ku-blue);
    }

    .content-section h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--space-gray-800);
      margin: var(--space-xl) 0 var(--space-md) 0;
    }

    .content-section p {
      color: var(--space-gray-700);
      line-height: 1.7;
      margin-bottom: var(--space-md);
      font-size: 1rem;
    }

    .content-section ul {
      color: var(--space-gray-700);
      line-height: 1.7;
      margin: var(--space-md) 0;
      padding-left: var(--space-xl);
    }

    .content-section li {
      margin-bottom: var(--space-sm);
    }

    .contact-info {
      background: var(--space-gray-50);
      padding: var(--space-xl);
      border-radius: 12px;
      border-left: 4px solid var(--ku-blue);
      margin: var(--space-lg) 0;
    }

    .contact-info p {
      margin-bottom: var(--space-sm);
    }

    .contact-info strong {
      color: var(--space-gray-900);
    }

    @media (max-width: 768px) {
      .privacy-policy-page {
        padding: var(--space-2xl) 0;
      }

      .page-title {
        font-size: 2.25rem;
      }

      .privacy-content {
        margin: 0 var(--space-lg);
        padding: var(--space-2xl);
        border-radius: 16px;
      }

      .content-section h2 {
        font-size: 1.5rem;
      }
    }
  `]
})
export class PrivacyPolicyComponent { }