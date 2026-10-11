export interface Specialty {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  treatments: string[];
  headPhysician: string;
  departmentFloor: string;
  contactExtension: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialtyId: string;
  specialtyName: string;
  degrees: string;
  experienceYears: number;
  image: string;
  bio: string;
  boardCertifications: string[];
  education: string[];
  consultationDays: string[];
  spokenLanguages: string[];
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  capacity: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  fullContent: string[];
  author: string;
  authorRole: string;
  image: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age: number;
  condition: string;
  quote: string;
  department: string;
  physician: string;
  outcome: string;
}

export interface FaqItem {
  id: string;
  category: 'Appointments' | 'Visiting Hours' | 'Insurance' | 'Preparation';
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  specialtyId: string;
  doctorId: string;
  preferredDate: string;
  preferredTime: string;
  visitType: 'consultation' | 'second-opinion' | 'executive-health';
  notes: string;
}

export interface AppointmentBookingResult extends AppointmentFormData {
  bookingId: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending Review';
}
