const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Adding additional sample data...');

  // Add more categories
  console.log('📂 Adding more categories...');
  const additionalCategories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'sales' },
      update: {},
      create: {
        label: 'Sales',
        value: 'sales',
        slug: 'sales'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'customer-service' },
      update: {},
      create: {
        label: 'Customer Service',
        value: 'customer-service',
        slug: 'customer-service'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'human-resources' },
      update: {},
      create: {
        label: 'Human Resources',
        value: 'human-resources',
        slug: 'human-resources'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'operations' },
      update: {},
      create: {
        label: 'Operations',
        value: 'operations',
        slug: 'operations'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'legal' },
      update: {},
      create: {
        label: 'Legal',
        value: 'legal',
        slug: 'legal'
      }
    })
  ]);

  // Add more tags
  console.log('🏷️ Adding more tags...');
  const additionalTags = await Promise.all([
    prisma.tag.upsert({
      where: { name: 'Contract' },
      update: {},
      create: { name: 'Contract' }
    }),
    prisma.tag.upsert({
      where: { name: 'Internship' },
      update: {},
      create: { name: 'Internship' }
    }),
    prisma.tag.upsert({
      where: { name: 'Freelance' },
      update: {},
      create: { name: 'Freelance' }
    }),
    prisma.tag.upsert({
      where: { name: 'Entry Level' },
      update: {},
      create: { name: 'Entry Level' }
    }),
    prisma.tag.upsert({
      where: { name: 'Mid Level' },
      update: {},
      create: { name: 'Mid Level' }
    }),
    prisma.tag.upsert({
      where: { name: 'Vue.js' },
      update: {},
      create: { name: 'Vue.js' }
    }),
    prisma.tag.upsert({
      where: { name: 'Angular' },
      update: {},
      create: { name: 'Angular' }
    }),
    prisma.tag.upsert({
      where: { name: 'AWS' },
      update: {},
      create: { name: 'AWS' }
    }),
    prisma.tag.upsert({
      where: { name: 'Docker' },
      update: {},
      create: { name: 'Docker' }
    }),
    prisma.tag.upsert({
      where: { name: 'Kubernetes' },
      update: {},
      create: { name: 'Kubernetes' }
    })
  ]);

  // Add more skills
  console.log('💼 Adding more skills...');
  const additionalSkills = await Promise.all([
    prisma.skill.upsert({
      where: { name: 'Vue.js' },
      update: {},
      create: { name: 'Vue.js' }
    }),
    prisma.skill.upsert({
      where: { name: 'Angular' },
      update: {},
      create: { name: 'Angular' }
    }),
    prisma.skill.upsert({
      where: { name: 'AWS' },
      update: {},
      create: { name: 'AWS' }
    }),
    prisma.skill.upsert({
      where: { name: 'Docker' },
      update: {},
      create: { name: 'Docker' }
    }),
    prisma.skill.upsert({
      where: { name: 'Kubernetes' },
      update: {},
      create: { name: 'Kubernetes' }
    }),
    prisma.skill.upsert({
      where: { name: 'SQL' },
      update: {},
      create: { name: 'SQL' }
    }),
    prisma.skill.upsert({
      where: { name: 'MongoDB' },
      update: {},
      create: { name: 'MongoDB' }
    }),
    prisma.skill.upsert({
      where: { name: 'GraphQL' },
      update: {},
      create: { name: 'GraphQL' }
    }),
    prisma.skill.upsert({
      where: { name: 'TypeScript' },
      update: {},
      create: { name: 'TypeScript' }
    }),
    prisma.skill.upsert({
      where: { name: 'DevOps' },
      update: {},
      create: { name: 'DevOps' }
    })
  ]);

  // Create more users
  console.log('👥 Creating additional users...');
  const hashedPassword = await bcrypt.hash('password123', 12);

  const additionalUsers = await Promise.all([
    // More employers
    prisma.user.upsert({
      where: { email: 'lisa@retailcorp.com' },
      update: {},
      create: {
        name: 'Lisa Chen',
        email: 'lisa@retailcorp.com',
        hashedPassword,
        role: 'EMPLOYER',
        email_confirmed: true,
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'david@startupx.com' },
      update: {},
      create: {
        name: 'David Rodriguez',
        email: 'david@startupx.com',
        hashedPassword,
        role: 'EMPLOYER',
        email_confirmed: true,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'emma@consulting.com' },
      update: {},
      create: {
        name: 'Emma Thompson',
        email: 'emma@consulting.com',
        hashedPassword,
        role: 'EMPLOYER',
        email_confirmed: true,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      }
    }),
    // More candidates
    prisma.user.upsert({
      where: { email: 'james@email.com' },
      update: {},
      create: {
        name: 'James Wilson',
        email: 'james@email.com',
        hashedPassword,
        role: 'USER',
        email_confirmed: true,
        designation: 'DevOps Engineer',
        description: 'Experienced DevOps engineer with expertise in AWS, Docker, and Kubernetes. Passionate about automation and cloud infrastructure.',
        expected_salary: 95000,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'sophia@email.com' },
      update: {},
      create: {
        name: 'Sophia Martinez',
        email: 'sophia@email.com',
        hashedPassword,
        role: 'USER',
        email_confirmed: true,
        designation: 'Data Scientist',
        description: 'Data scientist with strong background in machine learning, Python, and statistical analysis. 4 years of experience in predictive modeling.',
        expected_salary: 110000,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'michael@email.com' },
      update: {},
      create: {
        name: 'Michael Brown',
        email: 'michael@email.com',
        hashedPassword,
        role: 'USER',
        email_confirmed: true,
        designation: 'Sales Manager',
        description: 'Results-driven sales manager with 6 years of experience in B2B sales, team leadership, and revenue growth strategies.',
        expected_salary: 85000,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'olivia@email.com' },
      update: {},
      create: {
        name: 'Olivia Davis',
        email: 'olivia@email.com',
        hashedPassword,
        role: 'USER',
        email_confirmed: true,
        designation: 'Marketing Specialist',
        description: 'Creative marketing specialist with expertise in digital marketing, social media, and brand management. 3 years of experience.',
        expected_salary: 65000,
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'alex@email.com' },
      update: {},
      create: {
        name: 'Alex Johnson',
        email: 'alex@email.com',
        hashedPassword,
        role: 'USER',
        email_confirmed: true,
        designation: 'Product Manager',
        description: 'Strategic product manager with experience in agile methodologies, user research, and cross-functional team leadership.',
        expected_salary: 105000,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      }
    })
  ]);

  // Create profiles for new users
  console.log('📋 Creating additional user profiles...');
  await Promise.all([
    prisma.profile.upsert({
      where: { userId: additionalUsers[3].id },
      update: {},
      create: {
        userId: additionalUsers[3].id,
        location: 'Seattle, WA',
        phone: '+1 (555) 456-7890',
        website: 'https://jameswilson.dev',
        linkedin: 'https://linkedin.com/in/jameswilson'
      }
    }),
    prisma.profile.upsert({
      where: { userId: additionalUsers[4].id },
      update: {},
      create: {
        userId: additionalUsers[4].id,
        location: 'Austin, TX',
        phone: '+1 (555) 567-8901',
        website: 'https://sophiamartinez.ai',
        linkedin: 'https://linkedin.com/in/sophiamartinez'
      }
    }),
    prisma.profile.upsert({
      where: { userId: additionalUsers[5].id },
      update: {},
      create: {
        userId: additionalUsers[5].id,
        location: 'Chicago, IL',
        phone: '+1 (555) 678-9012',
        website: 'https://michaelbrown.sales',
        linkedin: 'https://linkedin.com/in/michaelbrown'
      }
    }),
    prisma.profile.upsert({
      where: { userId: additionalUsers[6].id },
      update: {},
      create: {
        userId: additionalUsers[6].id,
        location: 'Miami, FL',
        phone: '+1 (555) 789-0123',
        website: 'https://oliviadavis.marketing',
        linkedin: 'https://linkedin.com/in/oliviadavis'
      }
    }),
    prisma.profile.upsert({
      where: { userId: additionalUsers[7].id },
      update: {},
      create: {
        userId: additionalUsers[7].id,
        location: 'Denver, CO',
        phone: '+1 (555) 890-1234',
        website: 'https://alexjohnson.product',
        linkedin: 'https://linkedin.com/in/alexjohnson'
      }
    })
  ]);

  // Create additional companies
  console.log('🏢 Creating additional companies...');
  const additionalCompanies = await Promise.all([
    prisma.company.upsert({
      where: { slug: 'retailcorp-international' },
      update: {},
      create: {
        userId: additionalUsers[0].id,
        name: 'RetailCorp International',
        slug: 'retailcorp-international',
        description: 'Global retail company specializing in consumer goods and e-commerce solutions.',
        location: 'Chicago, IL',
        company_size: '1000-5000',
        founded: new Date('2005-04-12'),
        logo_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
        website_url: 'https://retailcorp.com',
        linkedin_url: 'https://linkedin.com/company/retailcorp'
      }
    }),
    prisma.company.upsert({
      where: { slug: 'startupx-innovations' },
      update: {},
      create: {
        userId: additionalUsers[1].id,
        name: 'StartupX Innovations',
        slug: 'startupx-innovations',
        description: 'Fast-growing startup focused on AI and machine learning solutions for enterprise clients.',
        location: 'Austin, TX',
        company_size: '10-50',
        founded: new Date('2020-08-15'),
        logo_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
        website_url: 'https://startupx.com',
        linkedin_url: 'https://linkedin.com/company/startupx'
      }
    }),
    prisma.company.upsert({
      where: { slug: 'consulting-partners' },
      update: {},
      create: {
        userId: additionalUsers[2].id,
        name: 'Consulting Partners',
        slug: 'consulting-partners',
        description: 'Management consulting firm providing strategic advisory services to Fortune 500 companies.',
        location: 'New York, NY',
        company_size: '200-500',
        founded: new Date('2012-01-20'),
        logo_url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
        website_url: 'https://consultingpartners.com',
        linkedin_url: 'https://linkedin.com/company/consultingpartners'
      }
    })
  ]);

  // Get existing categories for job creation
  const allCategories = await prisma.category.findMany();
  const techCategory = allCategories.find(c => c.slug === 'technology');
  const healthCategory = allCategories.find(c => c.slug === 'healthcare');
  const financeCategory = allCategories.find(c => c.slug === 'finance');
  const marketingCategory = allCategories.find(c => c.slug === 'marketing');
  const salesCategory = allCategories.find(c => c.slug === 'sales');
  const hrCategory = allCategories.find(c => c.slug === 'human-resources');

  // Create additional jobs
  console.log('💼 Creating additional jobs...');
  const additionalJobs = await Promise.all([
    // TechCorp additional jobs
    prisma.job.create({
      data: {
        userId: 2, // John Smith
        companyId: 1, // TechCorp
        categoryId: techCategory.id,
        title: 'DevOps Engineer',
        slug: 'devops-engineer-techcorp',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
        description: 'We are looking for a DevOps Engineer to manage our cloud infrastructure and deployment pipelines. Experience with AWS, Docker, and Kubernetes required.',
        job_type: 'FULL_TIME',
        location: 'San Francisco, CA',
        salary_range: '$100,000 - $140,000',
        position: 'DevOps Engineer',
        experience: '3-5 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '09:00',
        office_end_time: '17:00',
        featured: true,
        status: 'RUNNING'
      }
    }),
    prisma.job.create({
      data: {
        userId: 2,
        companyId: 1,
        categoryId: techCategory.id,
        title: 'Junior Frontend Developer',
        slug: 'junior-frontend-developer-techcorp',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
        description: 'Entry-level position for a Junior Frontend Developer. Perfect for recent graduates or career changers. We will provide mentorship and training.',
        job_type: 'FULL_TIME',
        location: 'Remote',
        salary_range: '$50,000 - $70,000',
        position: 'Junior Developer',
        experience: '0-2 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '09:00',
        office_end_time: '17:00',
        featured: false,
        status: 'RUNNING'
      }
    }),
    // RetailCorp jobs
    prisma.job.create({
      data: {
        userId: additionalUsers[0].id,
        companyId: additionalCompanies[0].id,
        categoryId: salesCategory.id,
        title: 'Sales Representative',
        slug: 'sales-representative-retailcorp',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
        description: 'Join our sales team as a Sales Representative. You will be responsible for building relationships with clients and driving revenue growth.',
        job_type: 'FULL_TIME',
        location: 'Chicago, IL',
        salary_range: '$45,000 - $65,000',
        position: 'Sales Representative',
        experience: '1-3 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '08:30',
        office_end_time: '17:30',
        featured: false,
        status: 'RUNNING'
      }
    }),
    prisma.job.create({
      data: {
        userId: additionalUsers[0].id,
        companyId: additionalCompanies[0].id,
        categoryId: marketingCategory.id,
        title: 'Digital Marketing Manager',
        slug: 'digital-marketing-manager-retailcorp',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
        description: 'Lead our digital marketing efforts including SEO, SEM, social media, and email marketing campaigns.',
        job_type: 'FULL_TIME',
        location: 'Chicago, IL',
        salary_range: '$70,000 - $95,000',
        position: 'Marketing Manager',
        experience: '3-5 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '09:00',
        office_end_time: '17:00',
        featured: true,
        status: 'RUNNING'
      }
    }),
    // StartupX jobs
    prisma.job.create({
      data: {
        userId: additionalUsers[1].id,
        companyId: additionalCompanies[1].id,
        categoryId: techCategory.id,
        title: 'Machine Learning Engineer',
        slug: 'machine-learning-engineer-startupx',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        description: 'Join our AI team as a Machine Learning Engineer. You will work on cutting-edge ML models and algorithms for enterprise applications.',
        job_type: 'FULL_TIME',
        location: 'Austin, TX',
        salary_range: '$120,000 - $160,000',
        position: 'ML Engineer',
        experience: '3-6 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '09:00',
        office_end_time: '17:00',
        featured: true,
        status: 'RUNNING'
      }
    }),
    prisma.job.create({
      data: {
        userId: additionalUsers[1].id,
        companyId: additionalCompanies[1].id,
        categoryId: techCategory.id,
        title: 'Data Scientist Intern',
        slug: 'data-scientist-intern-startupx',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        description: 'Summer internship for Data Science students. Work on real projects with our data science team.',
        job_type: 'INTERNSHIP',
        location: 'Austin, TX',
        salary_range: '$20 - $25 per hour',
        position: 'Data Science Intern',
        experience: 'Student',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '09:00',
        office_end_time: '17:00',
        featured: false,
        status: 'RUNNING'
      }
    }),
    // Consulting Partners jobs
    prisma.job.create({
      data: {
        userId: additionalUsers[2].id,
        companyId: additionalCompanies[2].id,
        categoryId: hrCategory.id,
        title: 'HR Business Partner',
        slug: 'hr-business-partner-consulting',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
        description: 'Strategic HR Business Partner role focusing on talent acquisition, employee relations, and organizational development.',
        job_type: 'FULL_TIME',
        location: 'New York, NY',
        salary_range: '$85,000 - $115,000',
        position: 'HR Business Partner',
        experience: '4-7 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '09:00',
        office_end_time: '17:00',
        featured: false,
        status: 'RUNNING'
      }
    }),
    // HealthPlus additional jobs
    prisma.job.create({
      data: {
        userId: 3, // Sarah Johnson
        companyId: 2, // HealthPlus
        categoryId: healthCategory.id,
        title: 'Medical Assistant',
        slug: 'medical-assistant-healthplus',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
        description: 'Support our medical team as a Medical Assistant. Experience in healthcare setting preferred but not required.',
        job_type: 'FULL_TIME',
        location: 'Boston, MA',
        salary_range: '$35,000 - $45,000',
        position: 'Medical Assistant',
        experience: '1-2 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '08:00',
        office_end_time: '16:00',
        featured: false,
        status: 'RUNNING'
      }
    }),
    // FinanceHub additional jobs
    prisma.job.create({
      data: {
        userId: 4, // Mike Wilson
        companyId: 3, // FinanceHub
        categoryId: financeCategory.id,
        title: 'Investment Analyst',
        slug: 'investment-analyst-financehub',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        description: 'Join our investment team as an Analyst. You will research market trends and provide investment recommendations.',
        job_type: 'FULL_TIME',
        location: 'New York, NY',
        salary_range: '$75,000 - $100,000',
        position: 'Investment Analyst',
        experience: '2-4 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '08:00',
        office_end_time: '18:00',
        featured: true,
        status: 'RUNNING'
      }
    })
  ]);

  // Create job tags for new jobs
  console.log('🏷️ Creating job tags for new jobs...');
  const allTags = await prisma.tag.findMany();
  
  await Promise.all([
    // DevOps Engineer tags
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[0].id,
        tagId: allTags.find(t => t.name === 'AWS').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[0].id,
        tagId: allTags.find(t => t.name === 'Docker').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[0].id,
        tagId: allTags.find(t => t.name === 'Senior').id
      }
    }),
    // Junior Frontend Developer tags
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[1].id,
        tagId: allTags.find(t => t.name === 'Junior').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[1].id,
        tagId: allTags.find(t => t.name === 'Remote').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[1].id,
        tagId: allTags.find(t => t.name === 'React').id
      }
    }),
    // Sales Representative tags
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[2].id,
        tagId: allTags.find(t => t.name === 'Entry Level').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[2].id,
        tagId: allTags.find(t => t.name === 'Full-time').id
      }
    }),
    // Digital Marketing Manager tags
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[3].id,
        tagId: allTags.find(t => t.name === 'Mid Level').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[3].id,
        tagId: allTags.find(t => t.name === 'Full-time').id
      }
    }),
    // Machine Learning Engineer tags
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[4].id,
        tagId: allTags.find(t => t.name === 'Python').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[4].id,
        tagId: allTags.find(t => t.name === 'Senior').id
      }
    }),
    // Data Scientist Intern tags
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[5].id,
        tagId: allTags.find(t => t.name === 'Internship').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: additionalJobs[5].id,
        tagId: allTags.find(t => t.name === 'Python').id
      }
    })
  ]);

  // Create user skills for new users
  console.log('💼 Creating user skills for new users...');
  const allSkills = await prisma.skill.findMany();
  
  await Promise.all([
    // James Wilson (DevOps Engineer) skills
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[3].id,
        skillId: allSkills.find(s => s.name === 'AWS').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[3].id,
        skillId: allSkills.find(s => s.name === 'Docker').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[3].id,
        skillId: allSkills.find(s => s.name === 'Kubernetes').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[3].id,
        skillId: allSkills.find(s => s.name === 'DevOps').id
      }
    }),
    // Sophia Martinez (Data Scientist) skills
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[4].id,
        skillId: allSkills.find(s => s.name === 'Python').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[4].id,
        skillId: allSkills.find(s => s.name === 'Data Analysis').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[4].id,
        skillId: allSkills.find(s => s.name === 'SQL').id
      }
    }),
    // Michael Brown (Sales Manager) skills
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[5].id,
        skillId: allSkills.find(s => s.name === 'Sales').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[5].id,
        skillId: allSkills.find(s => s.name === 'Project Management').id
      }
    }),
    // Olivia Davis (Marketing Specialist) skills
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[6].id,
        skillId: allSkills.find(s => s.name === 'Marketing').id
      }
    }),
    // Alex Johnson (Product Manager) skills
    prisma.skillOnUser.create({
      data: {
        userId: additionalUsers[7].id,
        skillId: allSkills.find(s => s.name === 'Project Management').id
      }
    })
  ]);

  // Create education records for new users
  console.log('🎓 Creating education records for new users...');
  await Promise.all([
    prisma.education.create({
      data: {
        userId: additionalUsers[3].id,
        institution: 'University of Washington',
        degree: 'Bachelor of Science in Computer Engineering',
        start_date: new Date('2016-09-01'),
        end_date: new Date('2020-05-15'),
        description: 'Focused on systems engineering and cloud computing'
      }
    }),
    prisma.education.create({
      data: {
        userId: additionalUsers[4].id,
        institution: 'University of Texas at Austin',
        degree: 'Master of Science in Data Science',
        start_date: new Date('2019-09-01'),
        end_date: new Date('2021-05-15'),
        description: 'Specialized in machine learning and statistical analysis'
      }
    }),
    prisma.education.create({
      data: {
        userId: additionalUsers[5].id,
        institution: 'Northwestern University',
        degree: 'Bachelor of Science in Business Administration',
        start_date: new Date('2014-09-01'),
        end_date: new Date('2018-05-15'),
        description: 'Concentration in marketing and sales management'
      }
    })
  ]);

  // Create experience records for new users
  console.log('💼 Creating experience records for new users...');
  await Promise.all([
    prisma.experience.create({
      data: {
        userId: additionalUsers[3].id,
        company: 'CloudTech Solutions',
        position: 'DevOps Engineer',
        start_date: new Date('2020-06-01'),
        end_date: new Date('2024-01-15'),
        description: 'Managed AWS infrastructure and implemented CI/CD pipelines for multiple client projects'
      }
    }),
    prisma.experience.create({
      data: {
        userId: additionalUsers[4].id,
        company: 'DataInsights Corp',
        position: 'Data Scientist',
        start_date: new Date('2021-07-01'),
        end_date: new Date('2024-02-01'),
        description: 'Developed machine learning models for predictive analytics and business intelligence'
      }
    }),
    prisma.experience.create({
      data: {
        userId: additionalUsers[5].id,
        company: 'SalesForce Dynamics',
        position: 'Senior Sales Representative',
        start_date: new Date('2018-08-01'),
        end_date: new Date('2024-01-30'),
        description: 'Led sales team and exceeded quarterly targets by 25% consistently'
      }
    })
  ]);

  console.log('✅ Additional data seeding completed successfully!');
  console.log(`📊 Added:`);
  console.log(`   - ${additionalCategories.length} additional categories`);
  console.log(`   - ${additionalTags.length} additional tags`);
  console.log(`   - ${additionalSkills.length} additional skills`);
  console.log(`   - ${additionalUsers.length} additional users`);
  console.log(`   - ${additionalCompanies.length} additional companies`);
  console.log(`   - ${additionalJobs.length} additional jobs`);
  console.log(`   - Education, experience, and skills records`);
}

main()
  .catch((e) => {
    console.error('❌ Error during additional seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

