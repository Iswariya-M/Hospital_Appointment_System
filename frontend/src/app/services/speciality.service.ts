import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {
  private blogItems = [
    {
      id: 1,
      speciality: "Aesthetic and Plastic Surgery",
      LogoUrl:"../../../assets/Aesthetic and Plastic Surgery banner.jpg",
      BannerUrl:"../../../assets/Aesthetic and Plastic Surgery logo.webp",
      imageUrl: "../../../assets/Aesthetic and Plastic Surgery.jpg",
      description: " The Aesthetic and Plastic Surgery department is a hallmark of excellence, devoted to achieving unparalleled outcomes in plastic surgery procedures. Pioneering advancements in the field, Our unwavering commitment to quality care is showcased through the constant availability of senior-level expertise, ensuring swift and effective treatment for patients in need to uphold our saying “Live Your Life”."
    },
    {
      id: 2,
      speciality: "Anesthesiology",
      LogoUrl:"../../../assets/Anesthesiology banner.jpg",
      BannerUrl:"../../../assets/Anesthesiology logo.webp",
      imageUrl: "../../../assets/Anesthesiology.jpg",
      description: "Our Anaesthesia Department stands out, featuring the expertise of the finest anesthesiologist specialists. Equipped with advanced technology, including state-of-the-art anesthesia workstations, monitors, fiber optic bronchoscopes, and video laryngoscopes, we ensure precise and safe administration of anesthesia for both general and local anesthesia procedures."
    },
    {
      id: 3,
      speciality: "Cardiology",
      LogoUrl:"../../../assets/Cardiology banner.jpg",
      BannerUrl:"../../../assets/Cardiology logo.jpg",
      imageUrl: "../../../assets/Cardiology.png",
      description: "Our Cardiology Department is dedicated to helping you achieve and maintain optimal heart health. We offer comprehensive cardiac care programs, specialized treatments, and a range of diagnostic tests to prevent and address heart disease. Our commitment is to ensure your heart remains at its healthiest, whether you’re seeking preventive measures or requiring urgent medical attention to “Live Your Life”."
    },
    {
      id: 4,
      speciality: "ENT",
      LogoUrl:"../../../assets/ENT banner.jpg",
      imageUrl: "../../../assets/ENT.webp",
      BannerUrl:"../../../assets/ENT logo.jpg",
      description: "The ENT speciality is distinguished by a team of highly skilled experts dedicated to delivering cutting-edge care for a spectrum of ear, nose, and throat conditions. Led by seasoned otolaryngologists, the department offers comprehensive treatments ranging from intricate head and neck surgeries to delicate procedures such as cochlear implants and endoscopic sinus surgery. With a patient-centric approach, these specialists ensure personalized care tailored to individual needs, ensuring optimal outcomes and improved quality of life for patients."
    },
    {
      id: 5,
      speciality: "Pulmonology",
      LogoUrl:"../../../assets/Pulmonology banner.jpg",
      imageUrl: "../../../assets/Pulmonology.jpg",
      BannerUrl:"../../../assets/Pulmonology logo.jpg",
      description: "Pulmonology, a sub-specialty of Internal Medicine, focuses on the respiratory tract’s health, encompassing the lower airway, lungs, and breathing control, along with their impact on blood oxygenation. Also known as chest medicine or respiratory medicine, pulmonology deals with various respiratory conditions and lung disorders. The respiratory system comprises several components, including the mouth, nose, sinuses, throat, voice box, windpipe, bronchial tubes, lungs, diaphragm, and associated structures like bronchioles and alveoli. Short-term lung illnesses like flu or cough can often be managed through primary care."
    },
    {
      id: 6,
      speciality: "Dermatology",
      LogoUrl:"../../../assets/Dermatology banner.jpg",
      imageUrl: "../../../assets/Dermatology.jpg",
      BannerUrl:"../../../assets/Dermatology logo.jpg",
      description: " Our Dermatology Department is dedicated to treating a spectrum of skin, hair, and nail diseases. Beyond medical management, we specialize in aesthetic and cosmetic dermatology, providing treatments like injectables, lasers, facials, and peels to enhance your skin and hair’s appearance."
    },
    {
      id: 7,
      speciality: "General Medicine",
      LogoUrl:"../../../assets/General Medicine banner.png",
      imageUrl: "../../../assets/General Medicine.jpg",
      BannerUrl:"../../../assets/General Medicine logo.jpg",
      description: "Our General Medicine Department encompasses the vast field of internal medicine, focusing on diseases and disorders affecting the body’s internal organs. Our expert internists specialize in a comprehensive range of areas, including the heart, lungs, liver, gastrointestinal tract, kidneys, urinary tract, brain, spinal column, neurological system, muscles, and joints."
    },
    {
      id: 8,
      speciality: "Pediatrics",
      LogoUrl:"../../../assets/Pediatrics banner.jpg",
      imageUrl: "../../../assets/Pediatrics.jpg",
      BannerUrl:"../../../assets/Pediatrics logo.png",
      description: "Our Pediatrics department offers a comprehensive range of services aimed at providing exceptional care for infants, children, and adolescents. Led by a team of expert paediatricians, we provide general paediatric care, specialized treatments for various conditions including respiratory, gastrointestinal, neurological, and cardiac disorders, as well as emergency services and neonatal intensive care. With state-of-the-art facilities, including advanced imaging and diagnostic services, dedicated intensive care units, and child-friendly environments, we ensure the highest quality of care tailored to the unique needs of each child. Our multidisciplinary approach, coupled with a commitment to compassion and excellence, ensures that our young patients receive the best possible care and support throughout their journey to health and wellness."
    },
  ];

  constructor() { }

  getAllBlogItems() {
    return this.blogItems;
  }

  getBlogItemById(id: number) {
    return this.blogItems.find(item => item.id === id);
  }

}
