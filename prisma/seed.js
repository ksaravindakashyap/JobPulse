const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create categories
  console.log('📂 Creating categories...');
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'technology' },
      update: {},
      create: {
        label: 'Technology',
        value: 'technology',
        slug: 'technology'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'healthcare' },
      update: {},
      create: {
        label: 'Healthcare',
        value: 'healthcare',
        slug: 'healthcare'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'finance' },
      update: {},
      create: {
        label: 'Finance',
        value: 'finance',
        slug: 'finance'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'education' },
      update: {},
      create: {
        label: 'Education',
        value: 'education',
        slug: 'education'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'marketing' },
      update: {},
      create: {
        label: 'Marketing',
        value: 'marketing',
        slug: 'marketing'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'design' },
      update: {},
      create: {
        label: 'Design',
        value: 'design',
        slug: 'design'
      }
    })
  ]);

  // Create tags
  console.log('🏷️ Creating tags...');
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { name: 'Remote' },
      update: {},
      create: { name: 'Remote' }
    }),
    prisma.tag.upsert({
      where: { name: 'Full-time' },
      update: {},
      create: { name: 'Full-time' }
    }),
    prisma.tag.upsert({
      where: { name: 'Part-time' },
      update: {},
      create: { name: 'Part-time' }
    }),
    prisma.tag.upsert({
      where: { name: 'Senior' },
      update: {},
      create: { name: 'Senior' }
    }),
    prisma.tag.upsert({
      where: { name: 'Junior' },
      update: {},
      create: { name: 'Junior' }
    }),
    prisma.tag.upsert({
      where: { name: 'React' },
      update: {},
      create: { name: 'React' }
    }),
    prisma.tag.upsert({
      where: { name: 'Node.js' },
      update: {},
      create: { name: 'Node.js' }
    }),
    prisma.tag.upsert({
      where: { name: 'Python' },
      update: {},
      create: { name: 'Python' }
    }),
    prisma.tag.upsert({
      where: { name: 'JavaScript' },
      update: {},
      create: { name: 'JavaScript' }
    }),
    prisma.tag.upsert({
      where: { name: 'UI/UX' },
      update: {},
      create: { name: 'UI/UX' }
    })
  ]);

  // Create skills
  console.log('💼 Creating skills...');
  const skills = await Promise.all([
    prisma.skill.upsert({
      where: { name: 'JavaScript' },
      update: {},
      create: { name: 'JavaScript' }
    }),
    prisma.skill.upsert({
      where: { name: 'React' },
      update: {},
      create: { name: 'React' }
    }),
    prisma.skill.upsert({
      where: { name: 'Node.js' },
      update: {},
      create: { name: 'Node.js' }
    }),
    prisma.skill.upsert({
      where: { name: 'Python' },
      update: {},
      create: { name: 'Python' }
    }),
    prisma.skill.upsert({
      where: { name: 'Java' },
      update: {},
      create: { name: 'Java' }
    }),
    prisma.skill.upsert({
      where: { name: 'UI/UX Design' },
      update: {},
      create: { name: 'UI/UX Design' }
    }),
    prisma.skill.upsert({
      where: { name: 'Project Management' },
      update: {},
      create: { name: 'Project Management' }
    }),
    prisma.skill.upsert({
      where: { name: 'Data Analysis' },
      update: {},
      create: { name: 'Data Analysis' }
    }),
    prisma.skill.upsert({
      where: { name: 'Marketing' },
      update: {},
      create: { name: 'Marketing' }
    }),
    prisma.skill.upsert({
      where: { name: 'Sales' },
      update: {},
      create: { name: 'Sales' }
    })
  ]);

  // Create users (candidates and employers)
  console.log('👥 Creating users...');
  const hashedPassword = await bcrypt.hash('password123', 12);

  const users = await Promise.all([
    // Admin user
    prisma.user.upsert({
      where: { email: 'admin@jobpulse.com' },
      update: {},
      create: {
        name: 'Admin User',
        email: 'admin@jobpulse.com',
        hashedPassword,
        role: 'ADMIN',
        email_confirmed: true,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      }
    }),
    // Employer users
    prisma.user.upsert({
      where: { email: 'john@techcorp.com' },
      update: {},
      create: {
        name: 'John Smith',
        email: 'john@techcorp.com',
        hashedPassword,
        role: 'EMPLOYER',
        email_confirmed: true,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'sarah@healthplus.com' },
      update: {},
      create: {
        name: 'Sarah Johnson',
        email: 'sarah@healthplus.com',
        hashedPassword,
        role: 'EMPLOYER',
        email_confirmed: true,
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'mike@financehub.com' },
      update: {},
      create: {
        name: 'Mike Wilson',
        email: 'mike@financehub.com',
        hashedPassword,
        role: 'EMPLOYER',
        email_confirmed: true,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      }
    }),
    // Candidate users
    prisma.user.upsert({
      where: { email: 'alice@email.com' },
      update: {},
      create: {
        name: 'Alice Brown',
        email: 'alice@email.com',
        hashedPassword,
        role: 'USER',
        email_confirmed: true,
        designation: 'Frontend Developer',
        description: 'Passionate frontend developer with 3 years of experience in React and modern web technologies.',
        expected_salary: 75000,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'bob@email.com' },
      update: {},
      create: {
        name: 'Bob Davis',
        email: 'bob@email.com',
        hashedPassword,
        role: 'USER',
        email_confirmed: true,
        designation: 'Backend Developer',
        description: 'Experienced backend developer specializing in Node.js and Python with 5 years of experience.',
        expected_salary: 90000,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      }
    }),
    prisma.user.upsert({
      where: { email: 'carol@email.com' },
      update: {},
      create: {
        name: 'Carol Miller',
        email: 'carol@email.com',
        hashedPassword,
        role: 'USER',
        email_confirmed: true,
        designation: 'UI/UX Designer',
        description: 'Creative UI/UX designer with expertise in user research and modern design systems.',
        expected_salary: 70000,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
      }
    })
  ]);

  // Create user profiles
  console.log('📋 Creating user profiles...');
  await Promise.all([
    prisma.profile.upsert({
      where: { userId: users[4].id },
      update: {},
      create: {
        userId: users[4].id,
        location: 'New York, NY',
        phone: '+1 (555) 123-4567',
        website: 'https://alicebrown.dev',
        linkedin: 'https://linkedin.com/in/alicebrown'
      }
    }),
    prisma.profile.upsert({
      where: { userId: users[5].id },
      update: {},
      create: {
        userId: users[5].id,
        location: 'San Francisco, CA',
        phone: '+1 (555) 234-5678',
        website: 'https://bobdavis.dev',
        linkedin: 'https://linkedin.com/in/bobdavis'
      }
    }),
    prisma.profile.upsert({
      where: { userId: users[6].id },
      update: {},
      create: {
        userId: users[6].id,
        location: 'Los Angeles, CA',
        phone: '+1 (555) 345-6789',
        website: 'https://carolmiller.design',
        linkedin: 'https://linkedin.com/in/carolmiller'
      }
    })
  ]);

  // Create companies
  console.log('🏢 Creating companies...');
  const companies = await Promise.all([
    prisma.company.upsert({
      where: { slug: 'techcorp-solutions' },
      update: {},
      create: {
        userId: users[1].id,
        name: 'TechCorp Solutions',
        slug: 'techcorp-solutions',
        description: 'Leading technology company specializing in innovative software solutions and digital transformation.',
        location: 'San Francisco, CA',
        company_size: '100-500',
        founded: new Date('2015-03-15'),
        logo_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
        website_url: 'https://techcorp.com',
        linkedin_url: 'https://linkedin.com/company/techcorp'
      }
    }),
    prisma.company.upsert({
      where: { slug: 'healthplus-medical' },
      update: {},
      create: {
        userId: users[2].id,
        name: 'HealthPlus Medical',
        slug: 'healthplus-medical',
        description: 'Healthcare technology company focused on improving patient care through innovative medical solutions.',
        location: 'Boston, MA',
        company_size: '50-200',
        founded: new Date('2018-07-20'),
        logo_url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop',
        website_url: 'https://healthplus.com',
        linkedin_url: 'https://linkedin.com/company/healthplus'
      }
    }),
    prisma.company.upsert({
      where: { slug: 'financehub-investments' },
      update: {},
      create: {
        userId: users[3].id,
        name: 'FinanceHub Investments',
        slug: 'financehub-investments',
        description: 'Financial services company providing investment solutions and wealth management services.',
        location: 'New York, NY',
        company_size: '200-1000',
        founded: new Date('2010-11-10'),
        logo_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
        website_url: 'https://financehub.com',
        linkedin_url: 'https://linkedin.com/company/financehub'
      }
    })
  ]);

  // Create jobs
  console.log('💼 Creating jobs...');
  const jobs = await Promise.all([
    prisma.job.create({
      data: {
        userId: users[1].id,
        companyId: companies[0].id,
        categoryId: categories[0].id,
        title: 'Senior React Developer',
        slug: 'senior-react-developer-techcorp',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
        description: 'We are looking for a Senior React Developer to join our growing team. You will be responsible for building user-facing features and components using React, Redux, and modern JavaScript.',
        job_type: 'FULL_TIME',
        location: 'San Francisco, CA',
        salary_range: '$90,000 - $120,000',
        position: 'Senior Developer',
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
        userId: users[1].id,
        companyId: companies[0].id,
        categoryId: categories[0].id,
        title: 'Full Stack Developer',
        slug: 'full-stack-developer-techcorp',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
        description: 'Join our team as a Full Stack Developer working with React, Node.js, and modern web technologies. You will be involved in both frontend and backend development.',
        job_type: 'FULL_TIME',
        location: 'Remote',
        salary_range: '$80,000 - $110,000',
        position: 'Full Stack Developer',
        experience: '2-4 years',
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
        userId: users[2].id,
        companyId: companies[1].id,
        categoryId: categories[1].id,
        title: 'Healthcare Data Analyst',
        slug: 'healthcare-data-analyst-healthplus',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
        description: 'We are seeking a Healthcare Data Analyst to analyze patient data and help improve healthcare outcomes. Experience with healthcare data and statistical analysis required.',
        job_type: 'FULL_TIME',
        location: 'Boston, MA',
        salary_range: '$70,000 - $95,000',
        position: 'Data Analyst',
        experience: '2-4 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '08:00',
        office_end_time: '16:00',
        featured: false,
        status: 'RUNNING'
      }
    }),
    prisma.job.create({
      data: {
        userId: users[3].id,
        companyId: companies[2].id,
        categoryId: categories[2].id,
        title: 'Financial Advisor',
        slug: 'financial-advisor-financehub',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        description: 'Join our team as a Financial Advisor to help clients with investment strategies and financial planning. CFA or CFP certification preferred.',
        job_type: 'FULL_TIME',
        location: 'New York, NY',
        salary_range: '$85,000 - $130,000',
        position: 'Financial Advisor',
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
        userId: users[1].id,
        companyId: companies[0].id,
        categoryId: categories[0].id,
        title: 'UI/UX Designer',
        slug: 'ui-ux-designer-techcorp',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop',
        description: 'We are looking for a creative UI/UX Designer to create beautiful and functional user interfaces. Experience with Figma, Sketch, and user research required.',
        job_type: 'FULL_TIME',
        location: 'San Francisco, CA',
        salary_range: '$75,000 - $105,000',
        position: 'UI/UX Designer',
        experience: '2-4 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '09:00',
        office_end_time: '17:00',
        featured: false,
        status: 'RUNNING'
      }
    }),
    prisma.job.create({
      data: {
        userId: users[2].id,
        companyId: companies[1].id,
        categoryId: categories[1].id,
        title: 'Nurse Practitioner',
        slug: 'nurse-practitioner-healthplus',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
        description: 'Join our healthcare team as a Nurse Practitioner. You will provide primary care services and work closely with physicians to deliver quality patient care.',
        job_type: 'FULL_TIME',
        location: 'Boston, MA',
        salary_range: '$95,000 - $125,000',
        position: 'Nurse Practitioner',
        experience: '3-5 years',
        office_days: 'Monday to Friday',
        holidays: 'Saturday to Sunday',
        office_start_time: '08:00',
        office_end_time: '16:00',
        featured: true,
        status: 'RUNNING'
      }
    })
  ]);

  // Create job tags relationships
  console.log('🏷️ Creating job tags...');
  await Promise.all([
    // Senior React Developer tags
    prisma.jobTags.create({
      data: {
        jobId: jobs[0].id,
        tagId: tags.find(t => t.name === 'Senior').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: jobs[0].id,
        tagId: tags.find(t => t.name === 'React').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: jobs[0].id,
        tagId: tags.find(t => t.name === 'Full-time').id
      }
    }),
    // Full Stack Developer tags
    prisma.jobTags.create({
      data: {
        jobId: jobs[1].id,
        tagId: tags.find(t => t.name === 'Remote').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: jobs[1].id,
        tagId: tags.find(t => t.name === 'Node.js').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: jobs[1].id,
        tagId: tags.find(t => t.name === 'React').id
      }
    }),
    // Healthcare Data Analyst tags
    prisma.jobTags.create({
      data: {
        jobId: jobs[2].id,
        tagId: tags.find(t => t.name === 'Python').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: jobs[2].id,
        tagId: tags.find(t => t.name === 'Full-time').id
      }
    }),
    // UI/UX Designer tags
    prisma.jobTags.create({
      data: {
        jobId: jobs[4].id,
        tagId: tags.find(t => t.name === 'UI/UX').id
      }
    }),
    prisma.jobTags.create({
      data: {
        jobId: jobs[4].id,
        tagId: tags.find(t => t.name === 'Full-time').id
      }
    })
  ]);

  // Create user skills relationships
  console.log('💼 Creating user skills...');
  await Promise.all([
    // Alice Brown skills
    prisma.skillOnUser.create({
      data: {
        userId: users[4].id,
        skillId: skills.find(s => s.name === 'React').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: users[4].id,
        skillId: skills.find(s => s.name === 'JavaScript').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: users[4].id,
        skillId: skills.find(s => s.name === 'UI/UX Design').id
      }
    }),
    // Bob Davis skills
    prisma.skillOnUser.create({
      data: {
        userId: users[5].id,
        skillId: skills.find(s => s.name === 'Node.js').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: users[5].id,
        skillId: skills.find(s => s.name === 'Python').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: users[5].id,
        skillId: skills.find(s => s.name === 'JavaScript').id
      }
    }),
    // Carol Miller skills
    prisma.skillOnUser.create({
      data: {
        userId: users[6].id,
        skillId: skills.find(s => s.name === 'UI/UX Design').id
      }
    }),
    prisma.skillOnUser.create({
      data: {
        userId: users[6].id,
        skillId: skills.find(s => s.name === 'JavaScript').id
      }
    })
  ]);

  // Create education records
  console.log('🎓 Creating education records...');
  await Promise.all([
    prisma.education.create({
      data: {
        userId: users[4].id,
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science in Computer Science',
        start_date: new Date('2018-09-01'),
        end_date: new Date('2022-05-15'),
        description: 'Focused on software engineering and web development'
      }
    }),
    prisma.education.create({
      data: {
        userId: users[5].id,
        institution: 'Stanford University',
        degree: 'Master of Science in Computer Science',
        start_date: new Date('2016-09-01'),
        end_date: new Date('2018-06-15'),
        description: 'Specialized in distributed systems and backend development'
      }
    }),
    prisma.education.create({
      data: {
        userId: users[6].id,
        institution: 'Art Center College of Design',
        degree: 'Bachelor of Fine Arts in Graphic Design',
        start_date: new Date('2017-09-01'),
        end_date: new Date('2021-05-15'),
        description: 'Focused on user experience design and visual communication'
      }
    })
  ]);

  // Create experience records
  console.log('💼 Creating experience records...');
  await Promise.all([
    prisma.experience.create({
      data: {
        userId: users[4].id,
        company: 'TechStart Inc.',
        position: 'Frontend Developer',
        start_date: new Date('2022-06-01'),
        end_date: new Date('2024-01-15'),
        description: 'Developed responsive web applications using React and modern JavaScript frameworks'
      }
    }),
    prisma.experience.create({
      data: {
        userId: users[5].id,
        company: 'DataFlow Systems',
        position: 'Backend Developer',
        start_date: new Date('2018-07-01'),
        end_date: new Date('2024-02-01'),
        description: 'Built scalable backend services using Node.js, Python, and cloud technologies'
      }
    }),
    prisma.experience.create({
      data: {
        userId: users[6].id,
        company: 'DesignStudio Pro',
        position: 'UI/UX Designer',
        start_date: new Date('2021-08-01'),
        end_date: new Date('2024-01-30'),
        description: 'Created user-centered designs for web and mobile applications'
      }
    })
  ]);

  // Create portfolio records
  console.log('📁 Creating portfolio records...');
  await Promise.all([
    prisma.portfolio.create({
      data: {
        userId: users[4].id,
        project_name: 'E-commerce Dashboard',
        project_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        project_url: 'https://github.com/alice/ecommerce-dashboard',
        description: 'A modern e-commerce dashboard built with React and TypeScript'
      }
    }),
    prisma.portfolio.create({
      data: {
        userId: users[5].id,
        project_name: 'API Gateway Service',
        project_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
        project_url: 'https://github.com/bob/api-gateway',
        description: 'Scalable API gateway built with Node.js and microservices architecture'
      }
    }),
    prisma.portfolio.create({
      data: {
        userId: users[6].id,
        project_name: 'Mobile Banking App Design',
        project_image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
        project_url: 'https://dribbble.com/carol/banking-app',
        description: 'Complete UI/UX design for a mobile banking application'
      }
    })
  ]);

  console.log('✅ Database seeding completed successfully!');
  console.log(`📊 Created:`);
  console.log(`   - ${categories.length} categories`);
  console.log(`   - ${tags.length} tags`);
  console.log(`   - ${skills.length} skills`);
  console.log(`   - ${users.length} users`);
  console.log(`   - ${companies.length} companies`);
  console.log(`   - ${jobs.length} jobs`);
  console.log(`   - Education, experience, and portfolio records`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

