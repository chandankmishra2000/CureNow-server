import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  location: String,
  fees: Number,
  education: String,
  services: [String],
  rating: Number,
});
const Doctor = mongoose.model("Doctor", doctorSchema);

const doctors = [
  { name: "Dr. Priya Sharma", specialization: "Cardiologist", experience: 10, location: "Delhi", fees: 800, education: "MBBS, MD", services: ["ECG", "BP Monitor", "Heart Checkup"], rating: 4.8 },
  { name: "Dr. Ramesh Kumar", specialization: "Dermatologist", experience: 7, location: "Bangalore", fees: 600, education: "MBBS, MD", services: ["Acne Treatment", "Allergy", "Skin Care"], rating: 4.5 },
  { name: "Dr. Anjali Mehta", specialization: "Gynecologist", experience: 12, location: "Mumbai", fees: 750, education: "MBBS, MS", services: ["Pregnancy Care", "Ultrasound", "Fertility"], rating: 4.9 },
  { name: "Dr. Amit Patel", specialization: "Orthopedic", experience: 9, location: "Ahmedabad", fees: 700, education: "MBBS, MS", services: ["Fracture", "Joint Pain", "Arthroscopy"], rating: 4.6 },
  { name: "Dr. Sneha Das", specialization: "Pediatrician", experience: 6, location: "Kolkata", fees: 500, education: "MBBS, DCH", services: ["Vaccination", "Growth Check", "Fever"], rating: 4.7 },
  { name: "Dr. Neeraj Verma", specialization: "ENT Specialist", experience: 8, location: "Chandigarh", fees: 550, education: "MBBS, MS", services: ["Ear Pain", "Nasal Block", "Sinus"], rating: 4.3 },
  { name: "Dr. Ayesha Khan", specialization: "Psychiatrist", experience: 11, location: "Hyderabad", fees: 900, education: "MBBS, MD", services: ["Depression", "Therapy", "Anxiety"], rating: 4.9 },
  { name: "Dr. Rajesh Bansal", specialization: "Urologist", experience: 10, location: "Pune", fees: 850, education: "MBBS, MS", services: ["Kidney Stone", "UTI", "Prostate"], rating: 4.4 },
  { name: "Dr. Kavita Nair", specialization: "Ophthalmologist", experience: 7, location: "Kochi", fees: 600, education: "MBBS, MS", services: ["LASIK", "Eye Checkup", "Cataract"], rating: 4.6 },
  { name: "Dr. Arvind Joshi", specialization: "Neurologist", experience: 13, location: "Jaipur", fees: 1000, education: "MBBS, DM", services: ["Stroke", "Epilepsy", "Headache"], rating: 4.8 },
  { name: "Dr. Nisha Kapoor", specialization: "Dentist", experience: 5, location: "Lucknow", fees: 400, education: "BDS, MDS", services: ["Braces", "Tooth Removal", "Root Canal"], rating: 4.5 },
  { name: "Dr. Manish Yadav", specialization: "Physician", experience: 15, location: "Patna", fees: 700, education: "MBBS, MD", services: ["Fever", "Cold", "Checkup"], rating: 4.7 },
  { name: "Dr. Shalini Iyer", specialization: "Radiologist", experience: 9, location: "Thiruvananthapuram", fees: 800, education: "MBBS, MD", services: ["MRI", "CT Scan", "X-Ray"], rating: 4.6 },
  { name: "Dr. Vijay Rao", specialization: "Pulmonologist", experience: 10, location: "Indore", fees: 750, education: "MBBS, MD", services: ["Asthma", "COPD", "Cough"], rating: 4.5 },
  { name: "Dr. Nandini Sen", specialization: "Nutritionist", experience: 6, location: "Ranchi", fees: 500, education: "BSc, MSc", services: ["Diet Plan", "Weight Loss", "Diabetes Diet"], rating: 4.6 },
  { name: "Dr. Akshay Mehta", specialization: "Oncologist", experience: 12, location: "Nagpur", fees: 1100, education: "MBBS, MD", services: ["Cancer Care", "Chemotherapy", "Screening"], rating: 4.8 },
  { name: "Dr. Fatima Siddiqui", specialization: "Endocrinologist", experience: 8, location: "Bhopal", fees: 900, education: "MBBS, MD", services: ["Thyroid", "Diabetes", "Hormones"], rating: 4.7 },
  { name: "Dr. Bharat Rana", specialization: "Gastroenterologist", experience: 10, location: "Amritsar", fees: 850, education: "MBBS, MD", services: ["Liver", "Stomach Pain", "Endoscopy"], rating: 4.4 },
  { name: "Dr. Sonali Gupta", specialization: "Rheumatologist", experience: 9, location: "Surat", fees: 750, education: "MBBS, MD", services: ["Arthritis", "Joint Swelling", "Autoimmune"], rating: 4.5 },
  { name: "Dr. Harshad Shah", specialization: "Nephrologist", experience: 11, location: "Nashik", fees: 950, education: "MBBS, MD", services: ["Kidney", "Dialysis", "Renal Health"], rating: 4.6 }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Doctor.deleteMany();
    await Doctor.insertMany(doctors);
    console.log("✅ 20 Doctors Seeded!");
    mongoose.disconnect();
  })
  .catch((err) => console.error("❌ Seed Failed:", err));