
# MSMEJobSphere - The MSME Job Platform

MSMEJobSphere connects job seekers with opportunities in Micro, Small, and Medium Enterprises (MSMEs) across India. Our platform makes job hunting and recruitment easy, fast, and effective.

![MSMEJobSphere Platform](https://placeholder.pics/svg/800x400/DEDEDE/555555/MSME%20Job%20Sphere)

## 🚀 Quick Start Guides

### For Job Seekers

1. **Create Your Account**
   - Click "Sign In" in the top-right corner
   - Choose your preferred login method (Google, LinkedIn, Email)
   - Complete your basic profile information

2. **Upload Your Resume**
   - Go to your profile page
   - Click on "Upload Resume"
   - Our AI will automatically extract your skills and experience

3. **Find Your Perfect Job**
   - Use the search bar or filters on the Jobs page
   - Filter by location, job type, and salary range
   - Click on any job to view details and apply

4. **Get AI Assistance**
   - Click the chat icon in the bottom-right corner
   - Ask our AI Copilot for job recommendations
   - Get feedback on your resume or application

5. **Set Up Job Alerts**
   - Define your job preferences
   - Choose how often you want to receive alerts
   - Get notified when matching jobs are posted

### For Employers/Recruiters

1. **Create Your Company Profile**
   - Sign up and verify your business details
   - Add your company description and logo
   - Specify your industry and company size

2. **Post Your First Job**
   - Click "Post a Job" from your dashboard
   - Fill in the job details (title, description, requirements)
   - Set location, compensation, and application deadline

3. **Find Qualified Candidates**
   - Use AI-powered candidate matching
   - Filter candidates by skills, experience, or location
   - Review applications through your dashboard

4. **Connect With Potential Hires**
   - Schedule interviews directly through the platform
   - Use our messaging system for quick communication
   - Get AI suggestions on candidate fit

5. **Access MSME Specific Resources**
   - Visit the "MSME Solutions" page
   - Explore hiring tools designed for small businesses
   - Get guidance on recruitment best practices

## 📱 Mobile Access

MSMEJobSphere works on all devices:

- **Web Browser**: Visit our website on any desktop or mobile browser
- **Mobile App**: Download our app for iOS or Android
  - App Store: [Coming Soon]
  - Google Play: [Coming Soon]
  - For testing, follow the Developer section below

## 🌟 Key Features

- **AI-Powered Matching**: Smart algorithm connects the right candidates with the right jobs
- **Interactive Tutorials**: Guided tours available for each section (click the "Take a Tour" button)
- **Voice Commands**: Use voice to search for jobs or candidates
- **Two-Factor Authentication**: Optional extra security for your account
- **Multi-Platform**: Access via web or mobile app
- **Resume Analyzer**: Upload your resume to get matched with relevant opportunities

## 🔒 Privacy & Security

- Your data is stored securely using industry-standard encryption
- Two-factor authentication available for enhanced account security
- Control exactly what information is visible to employers or candidates
- Option to anonymize your profile for initial job searches

## 🛠️ Current Limitations & Future Improvements

### Known Issues
- **Social Login**: Currently using mock implementations; will be replaced with actual OAuth providers
- **Resume Parsing**: Basic functionality only; advanced matching coming soon
- **Mobile App**: Beta version available; some features may be limited
- **Payment Processing**: Not yet implemented for premium plans
- **Internationalization**: Currently supports English only

### Coming Soon
- Real-time chat between employers and candidates
- Video interview integration
- Advanced analytics for job postings
- Skill assessment tests
- Integration with popular Applicant Tracking Systems
- Support for multiple languages

## 💬 Getting Help

- **AI Copilot**: Click the chat icon in the bottom right corner for instant assistance
- **Tutorials**: Take the guided tour when you visit each section for the first time
- **Email Support**: Contact support@msmejobsphere.com for additional help

## 🛠️ For Developers

This project is built with:

```
React + TypeScript + Vite + Tailwind CSS + Shadcn UI + Supabase
```

### Development Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd msme-job-sphere

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Mobile Development

```sh
# Install dependencies
npm install

# Build the project
npm run build

# Sync with Capacitor (after build)
npx cap sync

# Open native IDEs
npx cap open ios     # For iOS (requires macOS)
npx cap open android # For Android
```

### Environment Variables
Create a `.env` file in the root directory with:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

Built with ❤️ using [Lovable](https://lovable.dev)

