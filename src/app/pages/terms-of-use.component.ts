import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="tlcs-frontiers-theme">
      <div class="terms-page">
        <div class="container">
          <div class="page-header">
            <nav class="breadcrumb">
              <a routerLink="/" class="breadcrumb-link">Home</a>
              <span class="breadcrumb-separator">></span>
              <span class="breadcrumb-current">Terms of Use</span>
            </nav>
            <h1 class="page-title">Terms of Use</h1>
            <p class="page-subtitle">Thailand Liquid Crystal in Space Research Project</p>
            <div class="page-divider"></div>
          </div>

          <div class="terms-content">
            <div class="content-section">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using the Thailand Liquid Crystal in Space (TLC) research platform and website, 
                you agree to be bound by these Terms of Use and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using this site.
              </p>
            </div>

            <div class="content-section">
              <h2>Purpose and Scope</h2>
              <p>
                This website serves as an information platform for the TLC research project, a collaborative effort between 
                Thai universities, NASA, GISTDA, and international partners. The platform is designed to:
              </p>
              <ul>
                <li>Share research findings and project updates</li>
                <li>Facilitate academic and research collaboration</li>
                <li>Provide information about liquid crystal space research</li>
                <li>Connect researchers and institutions interested in space science</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Permitted Use</h2>
              <p>You may use this website for legitimate purposes, including:</p>
              <ul>
                <li>Accessing and reading research information and publications</li>
                <li>Contacting our research team for collaboration inquiries</li>
                <li>Sharing our content for educational and academic purposes (with proper attribution)</li>
                <li>Participating in academic discussions and research exchanges</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Prohibited Activities</h2>
              <p>You are prohibited from:</p>
              <ul>
                <li>Using the website for any unlawful purpose or commercial exploitation</li>
                <li>Attempting to gain unauthorized access to our systems or data</li>
                <li>Distributing malware, viruses, or other harmful code</li>
                <li>Copying, reproducing, or redistributing content without permission</li>
                <li>Interfering with the proper functioning of the website</li>
                <li>Impersonating any person or entity associated with the project</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Intellectual Property Rights</h2>
              <p>
                The content on this website, including research data, publications, images, and design elements, 
                is protected by intellectual property laws. Unless otherwise stated:
              </p>
              <ul>
                <li>Research findings and publications are subject to academic fair use policies</li>
                <li>Images and graphics are owned by their respective institutions</li>
                <li>Website design and code are proprietary to the TLC project</li>
                <li>Third-party content is used under appropriate licenses or permissions</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Research Collaboration</h2>
              <p>
                Collaboration inquiries and research partnerships are subject to additional terms and agreements. 
                Any formal collaboration will require:
              </p>
              <ul>
                <li>Institutional approval and proper documentation</li>
                <li>Compliance with international research ethics standards</li>
                <li>Adherence to data sharing and publication policies</li>
                <li>Respect for intellectual property and confidentiality agreements</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Disclaimer of Warranties</h2>
              <p>
                This website and its content are provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul>
                <li>The accuracy, completeness, or timeliness of information</li>
                <li>Uninterrupted or error-free operation of the website</li>
                <li>Fitness for any particular purpose</li>
                <li>Security or privacy of communications</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, the TLC project, Kasetsart University, and partner institutions 
                shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:
              </p>
              <ul>
                <li>Use or inability to use this website</li>
                <li>Reliance on information provided on this website</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Any other matter relating to this website</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>International Compliance</h2>
              <p>
                Given our international partnerships, users must comply with:
              </p>
              <ul>
                <li>Export control laws and regulations of Thailand and partner countries</li>
                <li>International space law and research ethics guidelines</li>
                <li>Applicable data protection and privacy laws</li>
                <li>Academic integrity and research conduct standards</li>
              </ul>
            </div>

            <div class="content-section">
              <h2>Governing Law</h2>
              <p>
                These Terms of Use are governed by the laws of Thailand. Any disputes arising from these terms 
                or your use of this website shall be subject to the exclusive jurisdiction of the Thai courts, 
                unless otherwise required by international agreements or collaborations.
              </p>
            </div>

            <div class="content-section">
              <h2>Contact Information</h2>
              <p>
                If you have questions about these Terms of Use or need clarification on any provisions, 
                please contact us:
              </p>
              <div class="contact-info">
                <p><strong>Email:</strong> lc2021.physicsku&#64;gmail.com</p>
                <p><strong>Address:</strong> Department of Physics, Faculty of Science, Kasetsart University<br>
                Bangkok 10900, Thailand</p>
              </div>
            </div>

            <div class="content-section">
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately 
                upon posting on this website. Your continued use of the website after any changes constitutes acceptance 
                of the new terms.
              </p>
              <p><strong>Last Updated:</strong> January 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .terms-page {
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

    .terms-content {
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
      .terms-page {
        padding: var(--space-2xl) 0;
      }

      .page-title {
        font-size: 2.25rem;
      }

      .terms-content {
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
export class TermsOfUseComponent { }